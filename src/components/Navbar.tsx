import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, FileText, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { buttonMotion, EASE_OUT_EXPO, PILL_SPRING } from '../lib/motion';
import { Language } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

interface NavbarProps {
  onCopyEmail: () => void;
  onOpenCommandPalette: () => void;
}

const SECTION_IDS = [
  'hero',
  'projetos',
  'engenharia',
  'educacao',
  'experiencia',
] as const;

const LANGUAGES: readonly Language[] = ['pt', 'en'] as const;

const iconButtonClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors';

export const Navbar: React.FC<NavbarProps> = ({
  onCopyEmail,
  onOpenCommandPalette,
}) => {
  const { lang, setLang, t, content } = useLanguage();
  const profile = content.profile;

  const [activeId, setActiveId] = useActiveSection(SECTION_IDS);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'projetos', label: t.nav.projects },
    { id: 'engenharia', label: t.nav.stack },
    { id: 'educacao', label: t.nav.education },
    { id: 'experiencia', label: t.nav.experience },
  ] as const;

  // Compacta o header após 40px de scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reseta o feedback "Copiado!"
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  // Drawer mobile: ESC fecha, trava scroll do body, fecha ao atingir lg
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onBreakpoint);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onBreakpoint);
    };
  }, [mobileOpen]);

  const handleCopy = useCallback(() => {
    onCopyEmail();
    setCopied(true);
  }, [onCopyEmail]);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  // A pílula segue o hover (magnético) e volta para a seção ativa
  const pillTarget = hoveredId ?? activeId;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="fixed inset-x-0 top-4 z-40 px-4"
      >
        <motion.div
          animate={{
            height: scrolled ? 56 : 64,
            paddingLeft: scrolled ? 20 : 24,
            paddingRight: scrolled ? 20 : 24,
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-950/75 backdrop-blur-xl transition-shadow duration-300 xl:gap-6 ${
            scrolled
              ? 'shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)]'
              : 'shadow-[0_6px_24px_-10px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* ── Identidade ─────────────────────────────── */}
          <a
            href="#hero"
            onClick={() => handleNavClick('hero')}
            className="group flex shrink-0 items-center gap-3"
            aria-label={t.nav.backToTopAria}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-xs font-bold text-emerald-400 transition-colors group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
              &gt;_
            </span>
            <span className="flex flex-col leading-tight">
              <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-zinc-100">
                {profile.shortName}
              </span>
              <span className="whitespace-nowrap text-xs text-zinc-400">
                {profile.location} · PUC-Rio
              </span>
            </span>
          </a>

          {/* ── Navegação (desktop) ────────────────────── */}
          <nav
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredId(null)}
            className="hidden items-center gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              const hasPill = pillTarget === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onFocus={() => setHoveredId(item.id)}
                  onBlur={() => setHoveredId(null)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium outline-none transition-colors duration-200 ${
                    hasPill ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {hasPill && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={PILL_SPRING}
                      className={`absolute inset-0 rounded-full border ${
                        isActive
                          ? 'border-emerald-500/30 bg-emerald-500/15'
                          : 'border-white/10 bg-white/[0.07]'
                      }`}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Ações & Idioma ─────────────────────────── */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Seletor de Idioma PT | EN com pílula deslizante (layoutId="lang-pill") */}
            <div
              role="group"
              aria-label={t.nav.switchLangTitle}
              title={t.nav.switchLangTitle}
              className="inline-flex h-9 items-center rounded-lg border border-white/10 bg-white/[0.03] p-0.5 font-mono text-[11px]"
            >
              {LANGUAGES.map((code) => {
                const isSelected = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={isSelected}
                    className={`relative rounded-md px-2 py-1 font-semibold uppercase transition-colors ${
                      isSelected
                        ? 'text-zinc-950'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="lang-pill"
                        transition={PILL_SPRING}
                        className="absolute inset-0 rounded-md bg-emerald-400"
                      />
                    )}
                    <span className="relative z-10">{code.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>

            <motion.button
              {...buttonMotion}
              type="button"
              onClick={onOpenCommandPalette}
              title={t.nav.commandsTitle}
              aria-label={t.nav.commandsTitle}
              className="hidden h-9 items-center rounded-lg border border-white/10 bg-white/[0.03] px-2.5 transition-colors hover:border-white/20 md:inline-flex"
            >
              <kbd className="font-mono text-[11px] font-medium text-zinc-300">
                ⌘K
              </kbd>
            </motion.button>

            <motion.a
              {...buttonMotion}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className={`${iconButtonClass} hidden hover:border-white/25 hover:text-white lg:inline-flex`}
            >
              <GithubIcon className="h-4 w-4" />
            </motion.a>

            <motion.a
              {...buttonMotion}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className={`${iconButtonClass} hidden hover:border-cyan-500/40 hover:text-cyan-400 lg:inline-flex`}
            >
              <LinkedinIcon className="h-4 w-4" />
            </motion.a>

            {/* Copiar e-mail compacto + tooltip com endereço completo */}
            <motion.button
              {...buttonMotion}
              type="button"
              onClick={handleCopy}
              aria-label={`${t.nav.copyEmail} (${profile.email})`}
              className={`group relative hidden h-9 items-center gap-2 rounded-lg border px-2.5 font-mono text-xs transition-colors sm:inline-flex xl:px-3 ${
                copied
                  ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                  : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'check' : 'copy'}
                  initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </motion.span>
              </AnimatePresence>
              <span className="hidden whitespace-nowrap xl:inline">
                {copied ? t.nav.copied : t.nav.copyEmail}
              </span>

              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-200 opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              >
                {copied ? t.nav.copiedTooltip : profile.email}
              </span>
            </motion.button>

            <motion.a
              {...buttonMotion}
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Curriculo-Savio-Patrick-Costa-Camara.pdf"
              className="hidden h-9 items-center gap-1.5 whitespace-nowrap rounded-lg bg-zinc-100 px-3 text-xs font-semibold text-zinc-950 transition-colors hover:bg-white lg:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" />
              {t.nav.resumeFile}
            </motion.a>

            {/* Toggle do drawer mobile */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
              className={`${iconButtonClass} hover:border-white/25 hover:text-white lg:hidden`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {mobileOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* ── Drawer mobile ────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              className="mx-auto mt-2 max-w-6xl origin-top rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden"
            >
              <motion.nav
                aria-label="Mobile navigation"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.04 } },
                }}
                className="flex flex-col gap-1"
              >
                {navItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0 },
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
                        isActive ? 'text-white' : 'text-zinc-400'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobile-nav-pill"
                          transition={PILL_SPRING}
                          className="absolute inset-0 rounded-xl border border-emerald-500/30 bg-emerald-500/10"
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                    </motion.a>
                  );
                })}
              </motion.nav>

              <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-white/[0.07] pt-3">
                <motion.button
                  {...buttonMotion}
                  type="button"
                  onClick={handleCopy}
                  className={`col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-xl border font-mono text-xs transition-colors ${
                    copied
                      ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                      : 'border-white/10 bg-white/[0.03] text-zinc-200'
                  }`}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="truncate">
                    {copied ? t.nav.copied : profile.email}
                  </span>
                </motion.button>
                <motion.a
                  {...buttonMotion}
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-zinc-200"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </motion.a>
                <motion.a
                  {...buttonMotion}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-zinc-200"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </motion.a>
                <motion.a
                  {...buttonMotion}
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Curriculo-Savio-Patrick-Costa-Camara.pdf"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-100 text-sm font-semibold text-zinc-950"
                >
                  <FileText className="h-4 w-4" />
                  {t.nav.resumeFile}
                </motion.a>
                <motion.button
                  {...buttonMotion}
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-zinc-200"
                >
                  <kbd className="font-mono text-xs">⌘K</kbd>
                  {t.nav.commandsLabel}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop do drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
