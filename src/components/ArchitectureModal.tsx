import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  Calendar,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Cpu,
  FileCode,
  Layers,
  Lock,
  MapPin,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types/portfolio';
import { EASE_OUT_EXPO } from '../lib/motion';

interface ArchitectureModalProps {
  projectId: string | null;
  initialNodeId?: string;
  onClose: () => void;
}

type ModalTab = 'topology' | 'adrs' | 'code';

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  projectId,
  initialNodeId,
  onClose,
}) => {
  const { t, content } = useLanguage();

  const project: ProjectItem | null =
    content.projects.find((p) => p.id === projectId) ?? null;

  const [activeTab, setActiveTab] = useState<ModalTab>('topology');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setActiveTab('topology');
      setSelectedNodeId(
        initialNodeId || project.architecture.nodes[0]?.id || ''
      );
    }
  }, [projectId, initialNodeId, project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleCopyCode = (code: string, filename: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(filename);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="arch-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            key="arch-modal-panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-obsidian-900 shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-obsidian-950 px-6 py-5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300">
                    <Cpu className="h-3 w-3" />
                    {project.contextBadge}
                  </span>
                  <span className="font-mono text-xs text-zinc-300">
                    {project.organization}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400">
                    <Calendar className="h-3 w-3 text-emerald-400" />
                    {project.period}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400">
                    <MapPin className="h-3 w-3 text-cyan-400" />
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-emerald-400/90">
                  {project.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={t.modal.closeAria}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center justify-between border-b border-white/10 bg-obsidian-950/70 px-6 py-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('topology')}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${
                    activeTab === 'topology'
                      ? 'border border-emerald-500/35 bg-emerald-500/15 text-emerald-300'
                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>{t.modal.tab1}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('adrs')}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${
                    activeTab === 'adrs'
                      ? 'border border-emerald-500/35 bg-emerald-500/15 text-emerald-300'
                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>
                    {t.modal.tab2Prefix} ({project.architecture.adrs.length})
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${
                    activeTab === 'code'
                      ? 'border border-emerald-500/35 bg-emerald-500/15 text-emerald-300'
                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                  }`}
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>{t.modal.tab3}</span>
                </button>
              </div>

              <span className="hidden md:inline font-mono text-[11px] text-zinc-500">
                {t.modal.escToClose}
              </span>
            </div>

            {/* Modal Body Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeTab === 'topology' && (
                <>
                  {/* Visão Geral & Segurança/Escalabilidade */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-obsidian-950/80 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400">
                        <Layers className="h-4 w-4" />
                        <span>{t.modal.overviewTitle}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                        {project.architecture.overview}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-obsidian-950/80 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400">
                        <Lock className="h-4 w-4" />
                        <span>{t.modal.securityScaleTitle}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                        {project.architecture.securityAndScale}
                      </p>
                    </div>
                  </div>

                  {/* Todas as 4 Métricas e Pilares de Engenharia Expandidos */}
                  <div>
                    <div className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {t.modal.pillarsTitle}
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {project.impactMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-white/10 bg-obsidian-950/70 p-4"
                        >
                          <div className="text-xs text-zinc-400">
                            {metric.label}
                          </div>
                          <div className="mt-1 text-base font-bold text-white">
                            {metric.value}
                          </div>
                          <div className="mt-1 text-xs text-emerald-400">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Diagrama Visual em Blocos Conectados das Camadas da Arquitetura */}
                  <div>
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        {t.modal.diagramTitle}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        {project.architecture.nodes.length}{' '}
                        {t.modal.connectedLayersSuffix}
                      </span>
                    </div>

                    {/* Fluxo Resumido */}
                    <div className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-3.5">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                        {t.modal.dataFlowTitle}
                      </div>
                      <div className="mt-1 font-mono text-xs text-zinc-200 leading-relaxed">
                        {project.architecture.dataFlowSummary}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.architecture.nodes.map((node, index) => {
                        const isFocused = selectedNodeId === node.id;
                        const isLast =
                          index === project.architecture.nodes.length - 1;

                        return (
                          <React.Fragment key={node.id}>
                            <div
                              onClick={() => setSelectedNodeId(node.id)}
                              className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                                isFocused
                                  ? 'border-emerald-500/50 bg-emerald-500/[0.07] shadow-lg shadow-emerald-950/30'
                                  : 'border-white/10 bg-obsidian-950/80 hover:border-white/20'
                              }`}
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] pb-3">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-300">
                                    {node.layer}
                                  </span>
                                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs text-zinc-200">
                                    {node.badge}
                                  </span>
                                </div>
                                <span className="font-mono text-xs text-cyan-300">
                                  {node.tech}
                                </span>
                              </div>

                              <h4 className="mt-3 text-base font-bold text-white sm:text-lg">
                                {node.title}
                              </h4>

                              <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                                {node.description}
                              </p>

                              <div className="mt-3.5 space-y-2 border-t border-white/[0.06] pt-3">
                                {node.details.map((detail, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="flex items-start gap-2.5 text-xs text-zinc-300"
                                  >
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {!isLast && (
                              <div className="flex justify-center py-0.5">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                                  <ArrowDown className="h-3.5 w-3.5" />
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stack Completa Categorizada */}
                  <div>
                    <div className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {t.modal.categorizedStackTitle}
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {project.stackGroups.map((group) => (
                        <div
                          key={group.label}
                          className="rounded-xl border border-white/10 bg-obsidian-950/70 p-4"
                        >
                          <div className="font-mono text-xs font-semibold text-emerald-400">
                            {group.label}
                          </div>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {group.items.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'adrs' && (
                <div className="space-y-4">
                  {project.architecture.adrs.map((adr) => (
                    <div
                      key={adr.id}
                      className="rounded-xl border border-white/10 bg-obsidian-950 p-5 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-300">
                            {adr.id}
                          </span>
                          <h4 className="font-bold text-base text-white">
                            {adr.title}
                          </h4>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-zinc-300">
                          {adr.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-3">
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <div className="font-mono text-[11px] uppercase text-zinc-400">
                            {t.modal.contextLabel}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                            {adr.context}
                          </p>
                        </div>
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <div className="font-mono text-[11px] uppercase text-cyan-400">
                            {t.modal.decisionLabel}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                            {adr.decision}
                          </p>
                        </div>
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <div className="font-mono text-[11px] uppercase text-emerald-400">
                            {t.modal.resultLabel}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                            {adr.consequence}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'code' && (
                <div className="space-y-6">
                  {project.architecture.snippets.map((snippet) => (
                    <div
                      key={snippet.filename}
                      className="overflow-hidden rounded-xl border border-white/10 bg-obsidian-950"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <FileCode className="h-4 w-4 text-emerald-400" />
                          <span className="font-mono text-xs font-semibold text-zinc-200">
                            {snippet.title}
                          </span>
                          <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
                            — {snippet.filename}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopyCode(snippet.code, snippet.filename)
                          }
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-300 hover:bg-white/10 hover:text-white"
                        >
                          {copiedSnippet === snippet.filename ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span className="text-emerald-300">
                                {t.modal.copied}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>{t.modal.copy}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-200">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-obsidian-950 px-6 py-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-zinc-100 px-4 py-2 font-mono text-xs font-semibold text-obsidian-950 hover:bg-white"
              >
                {t.modal.closeInspection}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
