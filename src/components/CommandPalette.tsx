import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Copy,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  Search,
  Terminal,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
  onCopyNpx: () => void;
  onOpenFlagshipArchitecture: () => void;
  onSwitchLanguage?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onCopyEmail,
  onCopyNpx,
  onOpenFlagshipArchitecture,
  onSwitchLanguage,
}) => {
  const { lang, toggleLang, t, content } = useLanguage();
  const profile = content.profile;
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'switch-lang',
      title: `Switch Language (PT / EN) — ${t.commandPalette.switchLangActionTitle}`,
      category: t.commandPalette.switchLangCategory,
      shortcut: lang === 'pt' ? 'EN' : 'PT',
      icon: <Globe className="h-4 w-4 text-emerald-400" />,
      run: () => {
        if (onSwitchLanguage) {
          onSwitchLanguage();
        } else {
          toggleLang();
        }
        onClose();
      },
    },
    {
      id: 'flagship-arch',
      title: t.commandPalette.inspectFlagshipTitle,
      category: t.commandPalette.projectsCategory,
      shortcut: '↵',
      icon: <Cpu className="h-4 w-4 text-emerald-400" />,
      run: () => {
        onOpenFlagshipArchitecture();
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: `${t.commandPalette.copyEmailTitlePrefix} (${profile.email})`,
      category: t.commandPalette.contactCategory,
      shortcut: 'Mail',
      icon: <Mail className="h-4 w-4 text-emerald-400" />,
      run: () => {
        navigator.clipboard.writeText(profile.email);
        onCopyEmail();
        onClose();
      },
    },
    {
      id: 'goto-educacao',
      title: t.commandPalette.gotoEduTitle,
      category: t.commandPalette.academicCategory,
      shortcut: '#educacao',
      icon: <GraduationCap className="h-4 w-4 text-cyan-400" />,
      run: () => {
        window.location.hash = '#educacao';
        onClose();
      },
    },
    {
      id: 'goto-bento',
      title: t.commandPalette.gotoStackTitle,
      category: t.commandPalette.navCategory,
      shortcut: '#engenharia',
      icon: <Layers className="h-4 w-4 text-violet-400" />,
      run: () => {
        window.location.hash = '#engenharia';
        onClose();
      },
    },
    {
      id: 'copy-npx',
      title: t.commandPalette.copyCliTitle,
      category: t.commandPalette.terminalCategory,
      shortcut: 'CLI',
      icon: <Terminal className="h-4 w-4 text-cyan-400" />,
      run: () => {
        navigator.clipboard.writeText(profile.npxCommand);
        onCopyNpx();
        onClose();
      },
    },
    {
      id: 'download-cv',
      title: t.commandPalette.downloadCvTitle,
      category: t.commandPalette.docCategory,
      shortcut: 'PDF',
      icon: <FileText className="h-4 w-4 text-amber-300" />,
      run: () => {
        window.open(profile.resumeUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'open-github',
      title: t.commandPalette.openGithubTitle,
      category: t.commandPalette.socialCategory,
      shortcut: 'Ext',
      icon: <GithubIcon className="h-4 w-4 text-zinc-300" />,
      run: () => {
        window.open(profile.github, '_blank');
        onClose();
      },
    },
    {
      id: 'open-linkedin',
      title: t.commandPalette.openLinkedinTitle,
      category: t.commandPalette.socialCategory,
      shortcut: 'Ext',
      icon: <LinkedinIcon className="h-4 w-4 text-zinc-300" />,
      run: () => {
        window.open(profile.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 pt-20 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.15] bg-obsidian-900 shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.commandPalette.placeholder}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-500 hover:bg-white/[0.06] hover:text-zinc-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center font-mono text-xs text-zinc-500">
              {t.commandPalette.noResultsPrefix} "{query}".
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.run}
                className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs transition-colors hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-obsidian-950">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium text-zinc-100 text-sm">
                      {item.title}
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500">
                      {item.category}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-white/[0.1] bg-obsidian-950 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                    {item.shortcut}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-500" />
                </div>
              </button>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] bg-obsidian-950 px-4 py-2 font-mono text-[11px] text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Copy className="h-3 w-3 text-emerald-400" />
            {profile.name} · Command Bar ({lang.toUpperCase()})
          </span>
          <span>{t.commandPalette.escToClose}</span>
        </div>
      </div>
    </div>
  );
};
