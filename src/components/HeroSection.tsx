import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { LinkedInIcon } from './BrandIcons';
import {
  MapPin,
  Mail,
  Download,
  Activity,
  Layers,
  Cpu,
  GitPullRequest,
  Sparkles,
  CheckCircle2,
  Camera,
  Terminal,
  ShieldCheck,
  Sliders,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import {
  sectionContainerVariants,
  sectionItemVariants,
  staggerGridVariants,
  staggerCardVariants,
  sectionViewportConfig,
} from '../utils/motionVariants';

interface HeroSectionProps {
  onOpenSimulator: () => void;
  onOpenResume: () => void;
  onOpenControls?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSimulator,
  onOpenResume,
  onOpenControls,
}) => {


  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewportConfig}
      variants={sectionContainerVariants}
      className="relative pt-28 pb-12 sm:pt-36 sm:pb-24 px-3.5 sm:px-6"
    >
      <motion.div variants={sectionContainerVariants} className="max-w-5xl mx-auto">
        {/* Availability & Qualification Badges */}
        <motion.div
          variants={sectionItemVariants}
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] sm:text-xs font-mono text-zinc-200">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="w-2 h-2 rounded-full bg-white -ml-4" />
            <span>AVAILABLE FOR ON-SITE & REMOTE ROLES • EGYPT</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-[11px] sm:text-xs text-zinc-300 font-mono">
            <GitPullRequest className="w-3.5 h-3.5 text-white shrink-0" />
            <span>100% Project Completion Rate · Available Now</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-[11px] sm:text-xs text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
            <span className="truncate">Egypt · {PERSONAL_INFO.email}</span>
          </div>
        </motion.div>

        {/* Hero Card with Liquid Glass */}
        <motion.div
          variants={sectionItemVariants}
          className="relative rounded-[28px] sm:rounded-[32px] p-5 sm:p-10 md:p-12 liquid-glass border border-white/20 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
        >
          {/* Ambient monochrome lighting accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center justify-between relative z-10">
            {/* Left Column: Executive Identity, Bio & Actions */}
            <div className="flex-1 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Cpu className="w-3.5 h-3.5 shrink-0" />
                  <span>{PERSONAL_INFO.title}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-zinc-200 text-[11px] sm:text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>Technical Operations · Project Controls</span>
                </div>
              </div>

              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-zara leading-[1.03]">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="mt-3 text-[11px] sm:text-sm font-mono text-zinc-200 tracking-wide uppercase bg-white/[0.05] border border-white/10 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 inline-block leading-relaxed">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Managing engineering projects with precision — from{' '}
                <span className="text-white font-semibold">site coordination & RFI management</span> and{' '}
                <span className="text-white font-semibold">BOQ estimation & quality control</span> to{' '}
                <span className="text-white font-semibold">AI-driven workflow automation</span>.
              </p>

              {/* Key Competency Highlights Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 max-w-2xl">
                <div className="px-3.5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Project Management</div>
                    <div className="text-[10px] font-mono text-zinc-400">WBS · Scheduling · Risk</div>
                  </div>
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Site Operations</div>
                    <div className="text-[10px] font-mono text-zinc-400">AutoCAD · RFI · QC</div>
                  </div>
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">AI Automation</div>
                    <div className="text-[10px] font-mono text-zinc-400">Digital Workflows</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons — Mobile 2x2 Grid & Desktop Inline Row */}
              <div className="pt-2 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="px-4 sm:px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all duration-150 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Get in Touch</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#projects"
                  className="px-3.5 sm:px-4 py-2.5 rounded-full bg-zinc-900/90 text-white hover:bg-zinc-800 border border-white/20 font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center justify-center gap-2"
                >
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>Projects ({PROJECTS.length})</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenSimulator}
                  className="px-3.5 sm:px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center justify-center gap-2"
                >
                  <Activity className="w-4 h-4 text-white shrink-0" />
                  <span>Simulator</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenResume}
                  className="px-3.5 sm:px-4 py-2.5 rounded-full bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Resume PDF</span>
                </motion.button>

                {onOpenControls && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenControls}
                    className="col-span-2 sm:col-span-1 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white hover:text-black border border-white/30 text-white font-bold text-xs sm:text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Sliders className="w-4 h-4 shrink-0" />
                    <span>Account & Portfolio Control Center</span>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Right Column: Engineering Executive Credential Crest */}
            <div className="flex-shrink-0 flex flex-col items-center lg:items-end">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="relative group"
              >
                {/* Outer ambient rim glow */}
                <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-b from-white/35 via-white/10 to-white/25 opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Main Credential Container */}
                <div className="relative w-64 h-72 sm:w-68 sm:h-80 rounded-[28px] overflow-hidden border-2 border-white/30 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
                  {/* Top Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="portrait-glass-badge px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <CheckCircle2 className="w-3 h-3 text-white shrink-0" />
                      <span className="text-[10px] font-mono text-white tracking-wider uppercase font-semibold">
                        Verified Credentials
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-white">
                      Egypt
                    </span>
                  </div>

                  {/* Central Engineering Monogram & Badge */}
                  <div className="my-auto flex flex-col items-center justify-center text-center py-2">
                    <div className="relative w-24 h-24 rounded-3xl border border-white/25 bg-white/[0.04] backdrop-blur-md flex items-center justify-center shadow-inner group-hover:border-white/50 group-hover:scale-105 transition-all duration-300">
                      <div className="absolute inset-1 rounded-2xl border border-dashed border-white/20 pointer-events-none" />
                      <span className="text-3xl font-extrabold tracking-tighter text-white font-mono">
                        AK
                      </span>
                    </div>
                    <div className="mt-3">
                      <span className="text-sm font-bold text-white block tracking-tight">
                        Ahmed Khaled
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 block">
                        Project Engineer
                      </span>
                    </div>
                  </div>

                  {/* Bottom Stats Matrix */}
                  <div className="portrait-glass-badge p-2.5 rounded-2xl flex items-center justify-around shadow-lg border border-white/10">
                    <div className="text-center">
                      <div className="text-[10px] font-mono uppercase text-zinc-400">Completion</div>
                      <div className="text-xs font-bold font-mono text-white">100%</div>
                    </div>
                    <div className="w-[1px] h-6 bg-white/15" />
                    <div className="text-center">
                      <div className="text-[10px] font-mono uppercase text-zinc-400">Standards</div>
                      <div className="text-xs font-bold font-mono text-white">QC / RFI</div>
                    </div>
                    <div className="w-[1px] h-6 bg-white/15" />
                    <div className="text-center">
                      <div className="text-[10px] font-mono uppercase text-zinc-400">Status</div>
                      <div className="text-xs font-bold font-mono text-emerald-400">Available</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Direct Channels */}
              <div className="mt-3 flex items-center gap-2 self-center">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-all flex items-center gap-1.5 text-xs font-mono border border-white/15"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile — Ahmed Khaled"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-all flex items-center gap-1.5 text-xs font-mono border border-white/15"
                  aria-label="Email Ahmed Khaled"
                  title="Direct Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>

            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative z-10">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                B.Sc.
              </div>
              <div className="text-xs text-zinc-300 mt-1 font-semibold">
                Engineering Graduate
              </div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                Faculty of Engineering · Egypt
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                5+
              </div>
              <div className="text-xs text-zinc-300 mt-1 font-semibold">
                Key Projects
              </div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                All Successfully Delivered
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                100%
              </div>
              <div className="text-xs text-zinc-300 mt-1 font-semibold">
                Completion Rate
              </div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                All Projects On-Time
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Marquee Pills */}
        <motion.div
          variants={staggerGridVariants}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono"
        >
          {[
            'Project Planning',
            'Site Coordination',
            'BOQ Estimation',
            'Quality Control',
            'RFI Management',
            'Subcontractor Supervision',
            'AutoCAD & Technical Drawings',
            'MS Project & Office',
            'HSE Compliance',
            'Client & Stakeholder Management',
            'AI Tool Integration',
            'Technical Proposal Writing',
            'Corporate Training Content',
          ].map((tech) => (
            <motion.span
              key={tech}
              variants={staggerCardVariants}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

