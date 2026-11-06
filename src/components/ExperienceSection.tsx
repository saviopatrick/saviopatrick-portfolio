import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  Copy,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SpotlightCard } from './ui/SpotlightCard';
import { RevealGroup } from './ui/Reveal';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';

interface ExperienceSectionProps {
  onCopyEmail: () => void;
  onCopyNpx: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onCopyEmail,
  onCopyNpx,
}) => {
  const { t, content } = useLanguage();
  const profile = content.profile;
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmailClick = () => {
    navigator.clipboard.writeText(profile.email);
    setEmailCopied(true);
    onCopyEmail();
    setTimeout(() => setEmailCopied(false), 2200);
  };

  return (
    <div className="border-b border-white/[0.07]">
      {/* 1. SECÇÃO ACADÉMICA (PUC-Rio & UFMA) */}
      <section
        id="educacao"
        className="relative border-b border-white/[0.07] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealGroup className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
              <GraduationCap className="h-4 w-4" />
              <span>{t.educationAndExp.eduKicker}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {t.educationAndExp.eduTitle}
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
              {t.educationAndExp.eduSubtitle}
            </p>
          </RevealGroup>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {content.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={
                    index === 0
                      ? 'rgba(16, 185, 129, 0.16)'
                      : 'rgba(6, 182, 212, 0.14)'
                  }
                  className={`h-full p-6 sm:p-8 ${
                    index === 0 ? 'border-emerald-500/30' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 font-mono text-xs font-semibold ${
                        index === 0
                          ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                          : 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300'
                      }`}
                    >
                      <GraduationCap className="h-3.5 w-3.5" />
                      {edu.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-300">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      {edu.location} · <strong>{edu.status}</strong>
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    {edu.degree}
                  </h3>
                  <div className="mt-1 font-mono text-xs font-semibold text-emerald-400 sm:text-sm">
                    {edu.institution}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-zinc-400">
                    {edu.field}
                  </div>

                  <div className="mt-5 space-y-2.5 border-t border-white/[0.07] pt-4">
                    {edu.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXPERIÊNCIA PROFISSIONAL (TIMELINE TÉCNICA) & CONTACTO */}
      <section id="experiencia" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column (7 cols): Technical Experience Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <RevealGroup className="space-y-3">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{t.educationAndExp.expKicker}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  {t.educationAndExp.expTitle}
                </h2>
                <p className="text-sm text-zinc-400 sm:text-base">
                  {t.educationAndExp.expSubtitle}
                </p>
              </RevealGroup>

              {/* Vertical Timeline */}
              <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-emerald-500/60 before:via-white/[0.12] before:to-transparent">
                {content.experience.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="relative pl-10"
                  >
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border ${
                        idx === 0
                          ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-sm shadow-emerald-500/30'
                          : 'border-white/[0.18] bg-obsidian-900 text-zinc-400'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>

                    <SpotlightCard
                      spotlightColor="rgba(16, 185, 129, 0.11)"
                      className="p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-300">
                          {item.period}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">
                          {item.location} · {item.modality}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                        {item.role}
                      </h3>
                      <div className="font-mono text-xs font-semibold text-cyan-400">
                        {item.company}
                      </div>

                      {/* Architectural & Engineering Highlights */}
                      <div className="mt-4 space-y-2.5 border-t border-white/[0.06] pt-4">
                        {item.architectureHighlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols): Contact Hub & Quick Links */}
            <div className="lg:col-span-5 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                <RevealGroup className="space-y-3">
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>{t.educationAndExp.contactKicker}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {t.educationAndExp.contactTitle}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {profile.name} — {profile.role}.
                  </p>
                </RevealGroup>

                {/* Instant Copy Email Card */}
                <SpotlightCard
                  spotlightColor="rgba(16, 185, 129, 0.18)"
                  className="border-emerald-500/30 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      {t.educationAndExp.officialEmailLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      {profile.location}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-obsidian-950 p-3.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="font-mono text-sm text-zinc-100 truncate">
                        {profile.email}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmailClick}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-emerald-400 px-3.5 py-2 font-mono text-xs font-semibold text-obsidian-950 transition-all hover:bg-emerald-300"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>{t.educationAndExp.copiedBtn}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{t.educationAndExp.copyEmailBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.08] bg-obsidian-950/70 px-3.5 py-2.5 font-mono text-xs text-zinc-300">
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-cyan-400" />
                      {t.educationAndExp.phoneWhatsappLabel}
                    </span>
                    <a
                      href={`tel:${profile.phone.replace(/\D/g, '')}`}
                      className="font-semibold text-white hover:text-emerald-300"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </SpotlightCard>

                {/* Quick Links Stack (GitHub, LinkedIn, PDF Resume) */}
                <div className="grid grid-cols-1 gap-3.5">
                  {/* GitHub */}
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <SpotlightCard className="p-4 transition-all group-hover:border-white/[0.22]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-zinc-100 group-hover:border-emerald-500/40 group-hover:text-emerald-400">
                            <GithubIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-white">
                              {t.educationAndExp.githubCardTitle}
                            </div>
                            <div className="font-mono text-xs text-zinc-400">
                              https://github.com/saviopatrick
                            </div>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                      </div>
                    </SpotlightCard>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <SpotlightCard className="p-4 transition-all group-hover:border-white/[0.22]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-zinc-100 group-hover:border-cyan-500/40 group-hover:text-cyan-400">
                            <LinkedinIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-white">
                              {t.educationAndExp.linkedinCardTitle}
                            </div>
                            <div className="font-mono text-xs text-zinc-400">
                              https://linkedin.com/in/saviopatrick
                            </div>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                      </div>
                    </SpotlightCard>
                  </a>

                  {/* Currículo em PDF */}
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Curriculo-Savio-Patrick-Costa-Camara.pdf"
                    className="group block"
                  >
                    <SpotlightCard className="p-4 transition-all group-hover:border-emerald-500/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-white">
                              {t.educationAndExp.resumeCardTitle}
                            </div>
                            <div className="font-mono text-xs text-emerald-400">
                              {t.educationAndExp.resumeCardSubtitle}
                            </div>
                          </div>
                        </div>
                        <span className="rounded-lg border border-white/[0.1] bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-zinc-200 group-hover:bg-white group-hover:text-obsidian-950 font-semibold transition-colors">
                          {t.educationAndExp.downloadPdfBtn}
                        </span>
                      </div>
                    </SpotlightCard>
                  </a>
                </div>

                {/* CLI Quick Card */}
                <SpotlightCard className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-xs text-zinc-400">
                        {t.educationAndExp.cliCardTitle}
                      </div>
                      <div className="mt-1 font-mono text-sm font-bold text-emerald-400">
                        $ {profile.npxCommand}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(profile.npxCommand);
                        onCopyNpx();
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-zinc-200 hover:bg-white/[0.1]"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      <span>{t.educationAndExp.copyCliBtn}</span>
                    </button>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
