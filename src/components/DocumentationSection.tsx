import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Workflow,
  Cloud,
  Layers,
  ShieldCheck,
  Lock,
  Github,
  ExternalLink,
  Rocket,
  GitBranch,
  FileText,
  ChevronDown,
  HelpCircle,
  Gauge,
  Globe,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Boxes,
} from 'lucide-react';
import {
  REPOSITORY,
  DOCUMENTATION_LINKS,
  RELEASE_HISTORY,
  FAQ_ITEMS,
  APP_FEATURES,
  ARTICLES,
  CERTIFICATIONS,
  PROJECTS,
} from '../data/portfolioData';
import {
  sectionContainerVariants,
  sectionItemVariants,
  staggerGridVariants,
  staggerCardVariants,
  sectionViewportConfig,
} from '../utils/motionVariants';

const DOC_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Workflow,
  Cloud,
  Layers,
  ShieldCheck,
  Lock,
};

export const DocumentationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { label: 'Product features', value: `${APP_FEATURES.length}` },
    { label: 'Long-form articles', value: `${ARTICLES.length}` },
    { label: 'Credentials', value: `${CERTIFICATIONS.length}` },
    { label: 'Case deliverables', value: `${PROJECTS.length}` },
  ];

  return (
    <motion.section
      id="docs"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewportConfig}
      variants={sectionContainerVariants}
      className="py-16 px-4 sm:px-6"
    >
      <motion.div variants={sectionContainerVariants} className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <motion.div variants={sectionItemVariants} className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5" />
            Open Engineering · Documentation · Releases
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-zara">
            Reproducible by Design
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            This portfolio is a public engineering artefact. Every architectural decision, quality gate,
            deployment step and release is documented so that the work can be inspected, reproduced and extended.
          </p>
        </motion.div>

        {/* Repository + Release Summary */}
        <motion.div variants={staggerGridVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <motion.div
            variants={staggerCardVariants}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl liquid-glass border border-white/20 space-y-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Public repository
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 break-all">
                  {REPOSITORY.owner}/{REPOSITORY.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                {REPOSITORY.license}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              React 19 · TypeScript 7 · Vite 8 · Tailwind CSS v4 · Three.js · Motion · Web Audio API.
              Static, privacy-first and deployed at the edge with Cloudflare Pages.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {stats.map((stat) => (
                <div key={stat.label} className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="text-lg font-extrabold font-mono text-white">{stat.value}</div>
                  <div className="text-[10px] font-mono text-zinc-400 leading-tight mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={REPOSITORY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white text-black font-bold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={REPOSITORY.pagesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Live Site</span>
              </a>
              <a
                href={`${REPOSITORY.url}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Rocket className="w-4 h-4" />
                <span>Releases</span>
              </a>
            </div>
          </motion.div>

          {/* Release Card */}
          <motion.div
            variants={staggerCardVariants}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-4"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Latest release
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 text-[10px] font-mono font-bold">
                STABLE
              </span>
            </div>

            {RELEASE_HISTORY.map((release) => (
              <div key={release.version} className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold font-mono text-white">{release.version}</span>
                  <span className="text-xs text-zinc-400 font-mono">{release.date}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{release.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{release.summary}</p>
                <ul className="space-y-1.5">
                  {release.highlights.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-zinc-300 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:underline"
                >
                  Read release notes <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Documentation Grid */}
        <motion.div variants={sectionItemVariants} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Documentation index
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-zara mt-1">
                Read the System, Not Just the Screenshot
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Architecture · Deployment · Testing · Security
            </span>
          </div>

          <motion.div variants={staggerGridVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCUMENTATION_LINKS.map((doc) => {
              const Icon = DOC_ICONS[doc.icon] || FileText;
              return (
                <motion.a
                  key={doc.title}
                  variants={staggerCardVariants}
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-3xl glass-panel border border-white/15 hover:border-white/35 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="p-2 rounded-xl bg-white/10 border border-white/10 text-white">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                        {doc.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-3 flex items-center gap-1.5">
                      {doc.title}
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Engineering Signals */}
        <motion.div variants={staggerGridVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Gauge,
              title: 'Performance Discipline',
              detail: 'Static bundle, immutable asset caching, Brotli compression, lazy visual work and a documented performance budget.',
            },
            {
              icon: ShieldCheck,
              title: 'Quality Gate',
              detail: 'TypeScript strict checks, ten deterministic unit tests, production build verification and a GitHub Actions CI pipeline.',
            },
            {
              icon: Sparkles,
              title: 'Privacy by Default',
              detail: 'No analytics, no cookies, no backend. Preferences stay in localStorage and the contact flow opens the visitor’s own mail client.',
            },
          ].map((signal) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.title}
                variants={staggerCardVariants}
                className="p-5 rounded-3xl glass-panel border border-white/15 space-y-2"
              >
                <Icon className="w-5 h-5 text-white" />
                <h4 className="text-sm font-bold text-white">{signal.title}</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">{signal.detail}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Recruiter FAQ */}
        <motion.div variants={sectionItemVariants} className="p-6 sm:p-8 rounded-3xl liquid-glass border border-white/20 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-white" />
            <h3 className="text-xl sm:text-2xl font-bold text-white font-zara">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-white/10 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Build Signal Footer */}
        <motion.div
          variants={sectionItemVariants}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider"
        >
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3" /> npm run verify
          </span>
          <span className="flex items-center gap-1.5">
            <Boxes className="w-3 h-3" /> {APP_FEATURES.length} features
          </span>
          <span className="flex items-center gap-1.5">
            <Cloud className="w-3 h-3" /> Cloudflare Pages
          </span>
          <span className="flex items-center gap-1.5">
            <GitBranch className="w-3 h-3" /> v{REPOSITORY.version}
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
