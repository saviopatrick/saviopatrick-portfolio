import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  GraduationCap,
  Layers,
  MapPin,
  Phone,
  Play,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SpotlightCard } from './ui/SpotlightCard';
import { buttonMotion } from '../lib/motion';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

interface HeroSectionProps {
  onCopyNpx: () => void;
  onCopyEmail: () => void;
  onOpenFlagshipArchitecture: () => void;
}

interface TerminalLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopyNpx,
  onCopyEmail,
  onOpenFlagshipArchitecture,
}) => {
  const { lang, t, content } = useLanguage();
  const profile = content.profile;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const quickCommands =
    lang === 'pt'
      ? [
          { cmd: 'npx savio-dev', label: 'npx savio-dev' },
          { cmd: 'educacao', label: 'educacao' },
          { cmd: 'btg-ml', label: 'btg-ml' },
          { cmd: 'projeto-mama', label: 'projeto-mama' },
          { cmd: 'stack', label: 'stack' },
          { cmd: 'contato', label: 'contato' },
          { cmd: 'clear', label: 'clear' },
        ]
      : [
          { cmd: 'npx savio-dev', label: 'npx savio-dev' },
          { cmd: 'education', label: 'education' },
          { cmd: 'btg-ml', label: 'btg-ml' },
          { cmd: 'mama-project', label: 'mama-project' },
          { cmd: 'stack', label: 'stack' },
          { cmd: 'contact', label: 'contact' },
          { cmd: 'clear', label: 'clear' },
        ];

  const buildProfileNode = useCallback(
    () => (
      <div className="space-y-2 text-xs leading-relaxed">
        <div className="flex flex-wrap items-center gap-2 text-emerald-400">
          <span className="font-semibold">{t.hero.termVerified}</span>
          <span className="text-zinc-500">·</span>
          <span className="text-zinc-300">{profile.location}</span>
        </div>
        <div className="rounded-lg border border-white/[0.08] bg-black/50 p-3 font-mono text-[11px] text-zinc-300">
          <div className="text-zinc-100 font-semibold">
            {profile.name.toUpperCase()}
          </div>
          <div className="text-emerald-400 text-[10px]">{profile.role}</div>
          <div className="mt-1.5 text-zinc-400">
            ├─ <span className="text-emerald-400">{t.hero.termMasterLabel}</span>{' '}
            {t.hero.termMasterValue}
          </div>
          <div className="text-zinc-400">
            ├─ <span className="text-cyan-400">{t.hero.termGradLabel}</span>{' '}
            {t.hero.termGradValue}
          </div>
          <div className="text-zinc-400">
            ├─ <span className="text-violet-400">{t.hero.termRoleLabel}</span>{' '}
            {t.hero.termRoleValue}
          </div>
          <div className="text-zinc-400">
            └─ <span className="text-amber-300">{t.hero.termContactLabel}</span>{' '}
            {profile.email} | {profile.phone}
          </div>
        </div>
        <div className="text-zinc-500">
          {t.hero.termHintPrefix} <span className="text-zinc-200">help</span>{' '}
          {t.hero.termHintSuffix}
        </div>
      </div>
    ),
    [profile, t.hero]
  );

  const [logs, setLogs] = useState<TerminalLog[]>(() => [
    {
      id: 'init-1',
      command: 'npx savio-dev --profile',
      timestamp: '00:00.08',
      output: buildProfileNode(),
    },
  ]);

  // Atualiza o log inicial quando o idioma alterna
  useEffect(() => {
    setLogs([
      {
        id: `init-${lang}`,
        command: 'npx savio-dev --profile',
        timestamp: '00:00.08',
        output: buildProfileNode(),
      },
    ]);
  }, [lang, buildProfileNode]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCopyEmailBtn = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    onCopyEmail();
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(profile.npxCommand);
    setCopiedCmd(true);
    onCopyNpx();
    setTimeout(() => setCopiedCmd(false), 2200);
  };

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (cmd) {
      case 'npx savio-dev':
      case 'whoami':
        outputNode = buildProfileNode();
        break;
      case 'help':
        outputNode = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-zinc-300">
            <div>
              <span className="text-emerald-400">npx savio-dev</span> —{' '}
              {t.hero.helpProfile}
            </div>
            <div>
              <span className="text-emerald-400">
                {lang === 'pt' ? 'educacao' : 'education'}
              </span>{' '}
              — {t.hero.helpEdu}
            </div>
            <div>
              <span className="text-emerald-400">btg-ml</span> —{' '}
              {t.hero.helpBtg}
            </div>
            <div>
              <span className="text-emerald-400">
                {lang === 'pt' ? 'projeto-mama' : 'mama-project'}
              </span>{' '}
              — {t.hero.helpMama}
            </div>
            <div>
              <span className="text-emerald-400">stack</span> —{' '}
              {t.hero.helpStack}
            </div>
            <div>
              <span className="text-emerald-400">
                {lang === 'pt' ? 'contato' : 'contact'}
              </span>{' '}
              — {t.hero.helpContact}
            </div>
          </div>
        );
        break;
      case 'educacao':
      case 'education':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            {content.education.map((edu, idx) => (
              <div
                key={edu.id}
                className={`rounded border p-2 ${
                  idx === 0
                    ? 'border-emerald-500/25 bg-emerald-500/10'
                    : 'border-cyan-500/25 bg-cyan-500/10'
                }`}
              >
                <div
                  className={`font-bold ${
                    idx === 0 ? 'text-emerald-300' : 'text-cyan-300'
                  }`}
                >
                  {edu.shortName} — {edu.degree}
                </div>
                <div className="text-zinc-400 text-[11px]">
                  {edu.location} | {edu.status}
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case 'btg-ml':
        outputNode = (
          <div className="space-y-2 text-[11px] font-mono">
            <div className="text-emerald-300 font-semibold">
              [TELEMÍDIA LAB - PUC-RIO] {content.experience[0].company} (
              {content.experience[0].period})
            </div>
            <div className="rounded border border-white/[0.08] bg-black/60 p-2.5 text-zinc-300 space-y-1">
              {content.experience[0].architectureHighlights.map((line, i) => (
                <div key={i}>• {line}</div>
              ))}
            </div>
            <button
              type="button"
              onClick={onOpenFlagshipArchitecture}
              className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/25"
            >
              <Layers className="h-3.5 w-3.5" />
              {t.hero.inspectFullArch}
            </button>
          </div>
        );
        break;
      case 'projeto-mama':
      case 'mama-project':
        outputNode = (
          <div className="space-y-1.5 text-[11px] font-mono text-zinc-300">
            <div className="text-cyan-300 font-semibold">
              [{content.experience[2].company.toUpperCase()}]{' '}
              {content.experience[2].role} ({content.experience[2].period})
            </div>
            {content.experience[2].architectureHighlights.map((line, i) => (
              <div key={i}>• {line}</div>
            ))}
          </div>
        );
        break;
      case 'stack':
        outputNode = (
          <div className="space-y-1 text-[11px] font-mono text-zinc-300">
            {content.stackCategories.map((cat) => (
              <div key={cat.id}>
                <span className="text-emerald-400">[{cat.title}]</span>{' '}
                {cat.items.map((i) => i.name).join(', ')}
              </div>
            ))}
          </div>
        );
        break;
      case 'contato':
      case 'contact':
        onCopyEmail();
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-emerald-300">
            <div>
              {t.hero.emailCopiedTerminal}{' '}
              <span className="underline">{profile.email}</span>
            </div>
            <div className="text-zinc-300">
              {t.hero.phoneLabel} {profile.phone} · {t.hero.locationLabel}{' '}
              {profile.location}
            </div>
          </div>
        );
        break;
      default:
        outputNode = (
          <div className="text-xs font-mono text-zinc-400">
            {t.hero.unknownCmdPrefix}{' '}
            <span className="text-rose-400">{rawCmd}</span>.{' '}
            {t.hero.unknownCmdSuffix}
          </div>
        );
    }

    const now = new Date();
    const ts = `${String(now.getMinutes()).padStart(2, '0')}:${String(
      now.getSeconds()
    ).padStart(2, '0')}.${String(now.getMilliseconds()).slice(0, 2)}`;

    setLogs((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        command: rawCmd,
        output: outputNode,
        timestamp: ts,
      },
    ]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/[0.07] pt-10 pb-20 md:pt-16 md:pb-24"
    >
      {/* Ambient top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Current Role & Location Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>{profile.availability}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
                <span className="font-semibold text-white">{profile.name}</span>
                <span className="text-zinc-600">//</span>
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[46px] lg:leading-[1.12]">
                {t.hero.titlePrefix}{' '}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {profile.subheadline}
            </p>

            {/* Primary Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.button
                {...buttonMotion}
                type="button"
                onClick={handleCopyEmailBtn}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 font-mono text-xs font-semibold text-obsidian-950 transition-all hover:bg-emerald-300 shadow-lg shadow-emerald-500/10"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>
                      {t.hero.copiedEmailPrefix} ({profile.email})
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>
                      {t.hero.copyBtnPrefix} {profile.email}
                    </span>
                  </>
                )}
              </motion.button>

              <motion.a
                {...buttonMotion}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-mono text-xs font-medium text-zinc-100 transition-all hover:border-white/[0.25] hover:bg-white/[0.09]"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
              </motion.a>

              <motion.a
                {...buttonMotion}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 font-mono text-xs font-medium text-zinc-100 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
              </motion.a>

              <a
                href={`tel:${profile.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-obsidian-900/90 px-3.5 py-3 font-mono text-xs text-zinc-300 transition-colors hover:border-white/[0.2] hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>{profile.phone}</span>
              </a>
            </div>

            {/* Academic Strip */}
            <div className="grid grid-cols-1 gap-3 pt-4 border-t border-white/[0.07] sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-obsidian-900/70 p-3">
                <GraduationCap className="h-5 w-5 text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-xs font-semibold text-white truncate">
                    {t.hero.pucTitle}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-400 truncate">
                    {t.hero.pucSub}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-obsidian-900/70 p-3">
                <GraduationCap className="h-5 w-5 text-cyan-400 shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-xs font-semibold text-white truncate">
                    {t.hero.ufmaTitle}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-400 truncate">
                    {t.hero.ufmaSub}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.16)"
              className="border-white/[0.12] shadow-2xl shadow-black/90"
            >
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-black/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                    <TerminalIcon className="h-3.5 w-3.5 text-emerald-400" />
                    zsh — {profile.npxCommand}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCopyCommand}
                    className="inline-flex items-center gap-1 rounded border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300"
                  >
                    {copiedCmd ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span>{t.hero.cliCopied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>{profile.npxCommand}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Quick Command Bar */}
              <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/[0.06] bg-obsidian-950/60 px-3 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 shrink-0 flex items-center gap-1">
                  <Play className="h-2.5 w-2.5 text-emerald-400 fill-current" />
                  {t.hero.runLabel}
                </span>
                {quickCommands.map((item) => (
                  <button
                    key={item.cmd}
                    type="button"
                    onClick={() => executeCommand(item.cmd)}
                    className="shrink-0 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-300 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:text-emerald-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Terminal Output Buffer */}
              <div
                ref={terminalBodyRef}
                className="h-[315px] overflow-y-auto p-4 font-mono text-xs space-y-4 bg-obsidian-950/50"
              >
                {logs.length === 0 ? (
                  <div className="text-zinc-500">{t.hero.emptyBufferMsg}</div>
                ) : (
                  logs.map((entry) => (
                    <div key={entry.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold">➜</span>
                          <span className="text-cyan-400">~</span>
                          <span className="text-zinc-100 font-semibold">
                            {entry.command}
                          </span>
                        </div>
                        <span className="text-zinc-600">{entry.timestamp}</span>
                      </div>
                      <div className="pl-4">{entry.output}</div>
                    </div>
                  ))
                )}
              </div>

              {/* Interactive Input Prompt */}
              <form
                onSubmit={handleFormSubmit}
                className="flex items-center gap-2 border-t border-white/[0.08] bg-black/60 px-4 py-2.5"
              >
                <span className="font-mono text-xs font-bold text-emerald-400">
                  ➜
                </span>
                <span className="font-mono text-xs text-cyan-400">
                  savio-dev
                </span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={t.hero.inputPlaceholder}
                  aria-label="Terminal command"
                  className="w-full bg-transparent font-mono text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded border border-white/[0.1] bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-zinc-300 hover:bg-white/[0.1]"
                >
                  Enter ↵
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
