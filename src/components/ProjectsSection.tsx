import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Code2,
  Cpu,
  Filter,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCategoryId, ProjectItem } from '../types/portfolio';
import { SpotlightCard } from './ui/SpotlightCard';
import { RevealGroup } from './ui/Reveal';
import { buttonMotion } from '../lib/motion';

interface ProjectsSectionProps {
  onSelectArchitecture: (project: ProjectItem, initialNodeId?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectArchitecture,
}) => {
  const { t, content } = useLanguage();
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryId>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = content.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      project.categories.includes(selectedCategory);
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesCategory && matchesTag;
  });

  const handleCategoryChange = (cat: ProjectCategoryId) => {
    setSelectedCategory(cat);
    setSelectedTag(null);
  };

  return (
    <section
      id="projetos"
      className="relative border-b border-white/[0.07] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <RevealGroup className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
              <Layers className="h-3.5 w-3.5" />
              <span>{t.projects.sectionKicker}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {t.projects.sectionTitle}
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
              {t.projects.sectionSubtitle}
            </p>
          </RevealGroup>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/70 p-1.5">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 font-mono text-[11px] text-zinc-400">
              <Filter className="h-3 w-3" />
              {t.projects.domainFilterLabel}
            </span>
            {content.projectCategories.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                    active
                      ? 'bg-zinc-100 font-semibold text-zinc-950 shadow-sm'
                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tag Filter Pill */}
        {selectedTag && (
          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span>{t.projects.filteringByTag}</span>
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-0.5 text-emerald-300 hover:bg-emerald-500/25"
            >
              <span>{selectedTag}</span>
              <span>×</span>
            </button>
          </div>
        )}

        {/* Main Projects Grid: grid-cols-1 lg:grid-cols-2 gap-6 */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFullWidthFlagship =
                index === 0 && filteredProjects.length % 2 === 1;

              const moduleCount = project.architecture.nodes.length;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={
                    isFullWidthFlagship ? 'lg:col-span-2' : 'lg:col-span-1'
                  }
                >
                  <SpotlightCard
                    spotlightColor={
                      project.flagship
                        ? 'rgba(16, 185, 129, 0.14)'
                        : 'rgba(6, 182, 212, 0.11)'
                    }
                    className="h-full rounded-2xl border border-white/10 bg-zinc-900/50 transition-all hover:border-emerald-500/40"
                  >
                    <div className="flex h-full flex-col justify-between p-6">
                      {/* TOP & MIDDLE CONTENT */}
                      <div className="space-y-5">
                        {/* 1. Cabeçalho do Card */}
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs font-medium text-emerald-300">
                                {project.flagship && (
                                  <Sparkles className="h-3 w-3 text-emerald-400" />
                                )}
                                {project.contextBadge}
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-zinc-400">
                                <Calendar className="h-3 w-3 text-emerald-400" />
                                {project.period}
                              </span>
                            </div>

                            <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400">
                              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                              {project.location}
                            </span>
                          </div>

                          <h3 className="mt-3.5 text-xl font-bold leading-snug tracking-tight text-white">
                            {project.title}
                          </h3>
                          <p className="mt-1 font-mono text-xs text-emerald-400/90">
                            {project.subtitle}
                          </p>
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-300">
                            {project.summary}
                          </p>
                        </div>

                        {/* 2. Destaques de Engenharia (Grid 2x2 respirável, sem quebrar palavras) */}
                        <div className="grid grid-cols-2 gap-3">
                          {project.impactMetrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-xl border border-white/[0.08] bg-zinc-950/60 p-3.5"
                            >
                              <div className="text-xs text-zinc-400">
                                {metric.label}
                              </div>
                              <div className="mt-1 text-sm font-semibold text-zinc-100">
                                {metric.value}
                              </div>
                              <div className="mt-0.5 text-xs text-emerald-400/90">
                                {metric.detail}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* 3. Camadas da Arquitetura (Lista vertical limpa de 1 coluna, sem truncar) */}
                        <div className="rounded-xl border border-white/[0.08] bg-zinc-950/70 p-3.5">
                          <div className="mb-2.5 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-200">
                              <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                              {t.projects.archLayersTitle}
                            </span>
                          </div>

                          <div className="flex flex-col gap-2">
                            {project.architecture.nodes.map((node, nodeIdx) => {
                              const cleanTitle = node.title.replace(
                                /^\d+\.\s*/,
                                ''
                              );
                              return (
                                <button
                                  key={node.id}
                                  type="button"
                                  onClick={() =>
                                    onSelectArchitecture(project, node.id)
                                  }
                                  className="group flex w-full items-center justify-between gap-3 rounded-lg border border-white/[0.07] bg-zinc-900/80 px-3 py-2.5 text-left transition-all hover:border-emerald-500/40 hover:bg-emerald-500/[0.06]"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-500/15 font-mono text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                                      {nodeIdx + 1}
                                    </span>
                                    <span className="text-xs font-medium text-zinc-100 group-hover:text-white sm:text-sm">
                                      {cleanTitle}
                                    </span>
                                  </div>

                                  <div className="flex shrink-0 items-center gap-1.5">
                                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                                      {node.badge}
                                    </span>
                                    <ChevronRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* 4. Rodapé Separado em 2 Linhas (Sem disputa de espaço) */}
                      <div className="mt-5 pt-1">
                        {/* Linha 1: Pílulas da Stack Tecnológica (100% da largura) */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => {
                            const isTagSelected = selectedTag === tag;
                            return (
                              <button
                                key={tag}
                                type="button"
                                onClick={() =>
                                  setSelectedTag(isTagSelected ? null : tag)
                                }
                                className={`rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                                  isTagSelected
                                    ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-200'
                                    : 'border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:text-white'
                                }`}
                                title={`${t.projects.filterByTitle} ${tag}`}
                              >
                                {tag}
                              </button>
                            );
                          })}
                        </div>

                        {/* Linha 2: Indicador de módulos à esquerda + Botão de ação à direita */}
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {moduleCount}{' '}
                            {moduleCount === 1
                              ? t.projects.moduleSingular
                              : t.projects.modulePlural}
                          </span>

                          <motion.button
                            {...buttonMotion}
                            type="button"
                            onClick={() => onSelectArchitecture(project)}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-xs font-semibold text-zinc-100 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/15 hover:text-emerald-300"
                          >
                            <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                            <span>{t.projects.viewDetailedArch}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
