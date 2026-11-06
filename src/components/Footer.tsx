import React from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, content } = useLanguage();
  const profile = content.profile;

  return (
    <footer className="border-t border-white/[0.07] bg-obsidian-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-emerald-400">
            <Terminal className="h-3.5 w-3.5" />
          </div>
          <span className="font-mono text-xs text-zinc-400">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.footer.educationBadge}
          </span>
          <span>·</span>
          <span>{profile.email}</span>
        </div>
      </div>
    </footer>
  );
};
