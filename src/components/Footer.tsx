import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowUp, MapPin, Github, BookOpen, Rocket } from 'lucide-react';
import { PERSONAL_INFO, REPOSITORY } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-24 px-4 sm:px-6 relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Identity & Bio */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white font-zara">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Portfolio and engineering showcase of Ahmed Khaled, Project Engineer specializing in Technical Operations, Site Coordination, and Project Management.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono text-zinc-200">
                Available for On-Site & Remote Roles
              </span>
            </div>
          </div>

          {/* Project Operations Track Record Card */}
          <div className="p-5 rounded-3xl liquid-glass space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-white font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                Track Record
              </span>
              <span className="text-zinc-300">Verified Metrics</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="block text-lg font-bold text-white">100%</span>
                <span className="text-[10px] text-zinc-400">Completion Rate</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="block text-lg font-bold text-white">100%</span>
                <span className="text-[10px] text-zinc-400">QC & RFI Compliance</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-3 md:text-right">
            <span className="text-xs font-mono uppercase text-zinc-400 font-bold block">
              Direct Connectivity
            </span>
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white underline font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center justify-start md:justify-end gap-1 text-zinc-400 text-xs font-mono">
                <MapPin className="w-3 h-3 text-zinc-400" />
                <span>Egypt · Available for Technical Roles</span>
              </div>
              <div className="flex flex-wrap items-center justify-start md:justify-end gap-3 pt-2 text-[11px] font-mono">
                <a
                  href={REPOSITORY.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-400 hover:text-white"
                >
                  <Github className="w-3 h-3" /> Source
                </a>
                <a
                  href="#docs"
                  className="flex items-center gap-1 text-zinc-400 hover:text-white"
                >
                  <BookOpen className="w-3 h-3" /> Docs
                </a>
                <a
                  href={REPOSITORY.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-400 hover:text-white"
                >
                  <Rocket className="w-3 h-3" /> v{REPOSITORY.version}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Selected Element 3: Bottom line — scroll-animated with end text hidden */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 text-xs font-mono text-zinc-500"
        >
          <span>© 2026 {PERSONAL_INFO.name}</span>

          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="p-2.5 rounded-full liquid-glass-pill text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};
