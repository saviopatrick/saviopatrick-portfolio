import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SpotlightCard } from './ui/SpotlightCard';
import { RevealGroup } from './ui/Reveal';

export const BentoEngineeringSection: React.FC = () => {
  const { lang, t, content } = useLanguage();

  const [selectedTech, setSelectedTech] = useState<{
    name: string;
    context?: string;
    category: string;
  }>(() => ({
    name: content.stackCategories[0].items[0].name,
    context: content.stackCategories[0].items[0].context,
    category: content.stackCategories[0].title,
  }));

  useEffect(() => {
    setSelectedTech({
      name: content.stackCategories[0].items[0].name,
      context: content.stackCategories[0].items[0].context,
      category: content.stackCategories[0].title,
    });
  }, [lang, content.stackCategories]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'linguagens':
        return <Code2 className="h-4 w-4 text-emerald-400" />;
      case 'backend-arquitetura':
        return <Cpu className="h-4 w-4 text-cyan-400" />;
      case 'frontend':
        return <Layers className="h-4 w-4 text-violet-400" />;
      case 'databases-baas':
        return <Database className="h-4 w-4 text-emerald-400" />;
      case 'mobile':
        return <Smartphone className="h-4 w-4 text-cyan-400" />;
      case 'cloud-devops-messaging':
        return <Cloud className="h-4 w-4 text-amber-300" />;
      default:
        return <ShieldCheck className="h-4 w-4 text-emerald-400" />;
    }
  };

  return (
    <section
      id="engenharia"
      className="relative border-b border-white/[0.07] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <RevealGroup className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
              <Cpu className="h-3.5 w-3.5" />
              <span>{t.bento.sectionKicker}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {t.bento.sectionTitle}
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
              {t.bento.sectionSubtitle}
            </p>
          </RevealGroup>

          {/* Interactive Selected Technology Inspector Bar */}
          {selectedTech && (
            <div className="rounded-xl border border-emerald-500/30 bg-obsidian-900/90 px-4 py-3 font-mono text-xs">
              <div className="text-[10px] uppercase tracking-wider text-emerald-400">
                {selectedTech.category}
              </div>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="font-bold text-white">{selectedTech.name}</span>
                {selectedTech.context && (
                  <>
                    <span className="text-zinc-600">—</span>
                    <span className="text-zinc-300">{selectedTech.context}</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {content.stackCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={category.colSpan}
            >
              <SpotlightCard
                spotlightColor="rgba(16, 185, 129, 0.14)"
                className="h-full p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.1] bg-obsidian-950">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="font-mono text-[11px] text-zinc-400">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="rounded border border-white/[0.08] bg-obsidian-950 px-2.5 py-1 font-mono text-[10px] text-emerald-400">
                      $ {category.command}
                    </span>
                  </div>

                  {/* Interactive Technology Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => {
                      const isSelected = selectedTech?.name === item.name;
                      const isLanguageHighlight = Boolean(
                        item.isLanguageHighlight
                      );

                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() =>
                            setSelectedTech({
                              name: item.name,
                              context: item.context,
                              category: category.title,
                            })
                          }
                          className={`group flex flex-col items-start rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                            isLanguageHighlight
                              ? 'w-full border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20'
                              : isSelected
                              ? 'border-emerald-500/50 bg-emerald-500/15 shadow-sm'
                              : 'border-white/[0.08] bg-obsidian-950/75 hover:border-white/[0.2] hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-white">
                            {isLanguageHighlight && (
                              <Globe className="h-3.5 w-3.5 text-emerald-400" />
                            )}
                            <span>{item.name}</span>
                          </div>
                          {item.context && (
                            <span className="mt-0.5 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-300">
                              {item.context}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
