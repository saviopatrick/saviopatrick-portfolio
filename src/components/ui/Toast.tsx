import React from 'react';
import { CheckCircle2, Terminal, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  subtitle?: string;
  code?: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 rounded-xl border border-emerald-500/30 bg-obsidian-900/95 px-4 py-3.5 text-sm text-zinc-100 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-200"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <div className="flex flex-col pr-2">
        <span className="font-medium text-zinc-100">{toast.title}</span>
        {toast.subtitle && (
          <span className="text-xs text-zinc-400 mt-0.5">{toast.subtitle}</span>
        )}
        {toast.code && (
          <span className="mt-1 inline-flex items-center gap-1.5 rounded bg-white/[0.06] px-2 py-0.5 font-mono text-xs text-emerald-300 border border-white/[0.06]">
            <Terminal className="h-3 w-3" />
            {toast.code}
          </span>
        )}
      </div>
      <button
        onClick={onClose}
        className="ml-auto rounded-lg p-1 text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-zinc-200"
        aria-label="Fechar notificação"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
