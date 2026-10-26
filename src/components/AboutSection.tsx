import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  GraduationCap,
  Sparkles,
  Database,
  Lock,
  Layers,
  Globe,
  Workflow,
  Award,
  Compass,
  GitBranch,
  Terminal,
  CheckCircle2,
  Boxes
} from 'lucide-react';
import {
  PERSONAL_INFO,
  WHAT_I_DO,
  PROJECT_ECOSYSTEM,
  CORE_COMPETENCIES,
  TRAINING_PROGRAMS,
  ROADMAP_ITEMS
} from '../data/portfolioData';
import {
  sectionContainerVariants,
  sectionItemVariants,
  staggerGridVariants,
  staggerCardVariants,
  sectionViewportConfig,
} from '../utils/motionVariants';

export const AboutSection: React.FC = () => {
  const [activeBlueprint, setActiveBlueprint] = useState<'lifecycle' | 'rfi' | 'qc' | 'boq' | 'stack'>('lifecycle');

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewportConfig}
      variants={sectionContainerVariants}
      className="py-16 px-4 sm:px-6"
    >
      <motion.div variants={sectionContainerVariants} className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <motion.div
          variants={sectionItemVariants}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Philosophy & Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-zara">
            Engineering Project Execution & Quality Assurance
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </motion.div>

        {/* Engineering Performance Highlights Strip */}
        <motion.div
          variants={staggerGridVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {[
            { value: '100%', label: 'Completion Rate', sub: 'All Projects Delivered' },
            { value: '5+', label: 'Key Projects', sub: 'Site & Operations' },
            { value: 'B.Sc.', label: 'Engineering Degree', sub: 'Faculty of Engineering' },
            { value: '4', label: 'Core Disciplines', sub: 'Project · Site · QC · AI' },
            { value: '6', label: 'Training Programs', sub: 'HSE · Scheduling · Proposals' },
            { value: 'ON', label: 'Available Status', sub: 'On-Site & Remote Roles' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerCardVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 rounded-2xl glass-panel border border-white/15 text-center"
            >
              <div className="text-2xl font-extrabold font-mono text-white">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-zinc-200 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What I Do — 6 Core Engineering Disciplines */}
        <motion.div variants={sectionItemVariants} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Core Competencies
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-zara mt-1">
                What I Do Across 4 Engineering Pillars
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              AutoCAD · RFI · BOQ · QC · AI Tools · MS Project
            </span>
          </div>

          <motion.div
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {WHAT_I_DO.map((item, idx) => (
              <motion.div
                key={item.discipline}
                variants={staggerCardVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl glass-panel border border-white/15 hover:border-white/35 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-zinc-200">
                      0{idx + 1} / Discipline
                    </span>
                    <Database className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.discipline}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-300">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Engineering Operations Ecosystem & Core Competency Showcase */}
        <motion.div variants={staggerGridVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Engineering Operations Card */}
          <motion.div
            variants={staggerCardVariants}
            className="p-6 sm:p-8 rounded-3xl liquid-glass border border-white/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                  Project Engineering Services
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Egypt · Available Now
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-zara">
                Engineering Operations Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                A comprehensive engineering operations profile covering project management, site coordination, quality control, and AI-driven workflow automation across on-site and remote engineering roles.
              </p>

              <div className="mt-5 space-y-2.5">
                {PROJECT_ECOSYSTEM.map((row) => (
                  <div
                    key={row.area}
                    className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="text-xs font-bold text-white shrink-0">
                      {row.area}
                    </span>
                    <span className="text-[11px] text-zinc-400 sm:text-right">
                      {row.built}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Engineering Competencies Card */}
          <motion.div
            variants={staggerCardVariants}
            className="p-6 sm:p-8 rounded-3xl liquid-glass border border-white/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/15 text-white border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider">
                  Key Engineering Competencies
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Technical Operations Profile
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-zara">
                AutoCAD · RFI · BOQ · QC · AI Tools
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Six core engineering competency areas: Project Scope Management, Site Operations, BOQ Estimation, RFI Documentation, Client Coordination, and AI-Driven Workflow Automation.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CORE_COMPETENCIES.map((ext) => (
                  <div
                    key={ext.name}
                    className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-white">
                        {ext.name}
                      </span>
                      <Boxes className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {ext.description}
                    </p>
                    <span className="inline-block mt-2 text-[9px] font-mono text-zinc-300 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {ext.tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Engineering Workflow Blueprints */}
        <motion.div
          variants={sectionItemVariants}
          className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Workflow className="w-3.5 h-3.5 text-white" />
                <span>Interactive Architecture Diagrams</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-zara mt-1">
                Engineering Delivery Blueprints
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'lifecycle', label: 'Delivery Lifecycle' },
                { id: 'rfi', label: 'RFI & Submittals' },
                { id: 'qc', label: 'QC Gates' },
                { id: 'boq', label: 'BOQ & Cost' },
                { id: 'stack', label: 'Web Architecture' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveBlueprint(tab.id as 'lifecycle' | 'rfi' | 'qc' | 'boq' | 'stack')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeBlueprint === tab.id
                      ? 'bg-white text-black shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeBlueprint === 'lifecycle' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 max-w-3xl">
                A controlled seven-stage delivery model. Each stage has an owner, an evidence package and a release criterion before the next stage can begin.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
                {[
                  { step: '01', name: 'Scope Definition', desc: 'Deliverables, exclusions, assumptions and acceptance criteria', owner: 'Project Owner' },
                  { step: '02', name: 'Resource Planning', desc: 'WBS, budget, team, equipment and schedule baseline', owner: 'Project Controls' },
                  { step: '03', name: 'Site Execution', desc: 'Daily supervision, trade coordination and progress logs', owner: 'Site Engineer' },
                  { step: '04', name: 'QC Inspection', desc: 'ITP hold points, material verification and test records', owner: 'QA / QC' },
                  { step: '05', name: 'RFI & Documentation', desc: 'Controlled queries, submittals and drawing revisions', owner: 'Technical Office' },
                  { step: '06', name: 'Milestone Review', desc: 'Verified quantities, invoices and earned value review', owner: 'Cost Control' },
                  { step: '07', name: 'Final Handover', desc: 'As-built dossier, snag closeout and client sign-off', owner: 'Project Manager' },
                ].map((node) => (
                  <div
                    key={node.step}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col justify-between hover:border-white/35 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-zinc-400">
                      STEP {node.step}
                    </span>
                    <div className="text-xs font-bold text-white mt-2">
                      {node.name}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {node.desc}
                    </p>
                    <span className="mt-3 text-[9px] font-mono uppercase tracking-wider text-zinc-300 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 self-start">
                      {node.owner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBlueprint === 'rfi' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 max-w-3xl">
                RFI and submittal control loop. Every query is logged, owned and linked to a drawing revision, specification clause or contractual decision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { node: '01 · Identify', detail: 'Field team raises a technical query with drawing reference, location and impact.', output: 'RFI draft' },
                  { node: '02 · Log', detail: 'Technical office assigns a unique ID, priority, owner and response deadline.', output: 'RFI register' },
                  { node: '03 · Coordinate', detail: 'Consultant, designer and contractor align on the technical position.', output: 'Response memo' },
                  { node: '04 · Approve', detail: 'Authorised sign-off confirms the instruction and any cost or schedule impact.', output: 'Approved RFI' },
                  { node: '05 · Distribute', detail: 'Controlled distribution to site, procurement, cost control and document control.', output: 'Revision update' },
                  { node: '06 · Verify', detail: 'Site inspection confirms the work follows the approved response.', output: 'Closed record' },
                ].map((cls) => (
                  <div
                    key={cls.node}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/15"
                  >
                    <div className="text-xs font-bold text-white font-mono">{cls.node}</div>
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">{cls.detail}</p>
                    <span className="inline-block mt-2.5 text-[9px] font-mono text-zinc-300 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {cls.output}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBlueprint === 'qc' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 max-w-3xl">
                Five quality gates protect the permanent works. A gate cannot be passed without the specified inspection record, test certificate and authorised signature.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  { gate: 'Gate 1', title: 'Material Receipt', checks: ['Submittal approved', 'Certificate verified', 'Storage compliant'], release: 'Material release' },
                  { gate: 'Gate 2', title: 'Setting Out', checks: ['Drawing revision', 'Survey coordinates', 'Tolerance check'], release: 'Survey record' },
                  { gate: 'Gate 3', title: 'Installation', checks: ['ITP hold point', 'Workmanship check', 'Photo evidence'], release: 'Inspection request' },
                  { gate: 'Gate 4', title: 'Testing', checks: ['Test method', 'Calibrated equipment', 'Acceptance criteria'], release: 'Test certificate' },
                  { gate: 'Gate 5', title: 'Handover', checks: ['Snag closeout', 'As-built drawing', 'O&M documentation'], release: 'Client sign-off' },
                ].map((g) => (
                  <div key={g.gate} className="p-4 rounded-2xl bg-white/[0.04] border border-white/15">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400">{g.gate}</span>
                    <div className="text-xs font-bold text-white mt-1">{g.title}</div>
                    <ul className="mt-2 space-y-1 text-[10px] text-zinc-400">
                      {g.checks.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                    <span className="inline-block mt-2.5 text-[9px] font-mono text-zinc-200 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                      {g.release}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBlueprint === 'boq' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 max-w-3xl">
                BOQ and cost-control chain. Quantities, rates, approvals and payments remain traceable to the same measurement baseline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                {[
                  { state: 'Drawing Register', transition: 'Control revisions and measurement basis' },
                  { state: 'Quantity Take-off', transition: 'Measure against approved drawings' },
                  { state: 'Unit Rate Build-up', transition: 'Labour, material, plant and overhead' },
                  { state: 'Cost Baseline', transition: 'Budget, contingency and cash flow' },
                  { state: 'Progress Verification', transition: 'Measured work and quality records' },
                  { state: 'Invoice Certification', transition: 'Contract-compliant payment release' },
                ].map((st) => (
                  <div key={st.state} className="p-4 rounded-2xl bg-white/[0.04] border border-white/15">
                    <div className="text-xs font-bold text-white font-mono">[{st.state}]</div>
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-snug">{st.transition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeBlueprint === 'stack' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 max-w-3xl">
                This portfolio is also an engineering artefact: a typed, client-side React application deployed as an immutable static bundle at the edge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { node: 'Presentation', methods: 'React 19 · TypeScript 7 · Tailwind CSS v4 · Motion' },
                  { node: 'Interaction', methods: 'Command palette · Lifecycle simulator · Filters · Theme engine' },
                  { node: 'Graphics', methods: 'Three.js WebGL canvas · 5 presets · 60 FPS target' },
                  { node: 'Audio', methods: 'Web Audio API · 84 procedural sounds · 8 categories' },
                  { node: 'State & Persistence', methods: 'React state · localStorage preferences · zero backend' },
                  { node: 'Delivery', methods: 'Vite build · Cloudflare Pages · Brotli · immutable cache' },
                ].map((cls) => (
                  <div key={cls.node} className="p-4 rounded-2xl bg-white/[0.04] border border-white/15 font-mono">
                    <div className="text-xs font-bold text-white">{cls.node}</div>
                    <div className="text-[10px] text-zinc-400 mt-1.5 leading-relaxed">{cls.methods}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Training & Programs + 2026–2027 Roadmap */}
        <motion.div variants={staggerGridVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Training & Programs */}
          <motion.div
            variants={staggerCardVariants}
            className="p-4 sm:p-6 rounded-3xl glass-panel border border-white/15 space-y-4 overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-white shrink-0" />
                <span>Training & Elite Programs</span>
              </h3>
              <span className="text-[10px] font-mono text-zinc-400 uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0">
                7 Verified Programs
              </span>
            </div>
            <div className="space-y-2.5">
              {TRAINING_PROGRAMS.map((tp) => (
                <div
                  key={tp.program}
                  className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3"
                >
                  <span className="text-xs font-bold text-white leading-snug">
                    {tp.program}
                  </span>
                  <span className="self-start sm:self-auto text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 max-w-full break-words sm:shrink-0">
                    {tp.detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2026–2027 Engineering Roadmap */}
          <motion.div
            variants={staggerCardVariants}
            className="p-4 sm:p-6 rounded-3xl glass-panel border border-white/15 space-y-4 overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-white shrink-0" />
                <span>Engineering Roadmap (2026 – 2027)</span>
              </h3>
              <span className="text-[10px] font-mono text-zinc-400 uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0">
                Active Build Train
              </span>
            </div>
            <div className="space-y-2.5">
              {ROADMAP_ITEMS.map((rm) => (
                <div
                  key={rm.item}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      {rm.section}
                    </span>
                    <span className="text-xs font-bold text-white block leading-snug">
                      {rm.item}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-bold inline-block">
                      {rm.status}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 mt-1 block">
                      {rm.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Academic Card */}
        <motion.div
          variants={sectionItemVariants}
          className="p-4 sm:p-8 rounded-3xl glass-panel border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6"
        >
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20 text-xs font-mono font-semibold shrink-0">
                  {PERSONAL_INFO.education.gpa}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-0.5">
                Bachelor of Science in {PERSONAL_INFO.education.degree}
              </p>
              <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                {PERSONAL_INFO.education.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full md:w-auto">
            <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="block text-xs font-mono text-zinc-400">Track Record</span>
              <span className="text-sm font-bold text-white">100% Completion Rate</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="block text-xs font-mono text-zinc-400">Availability & Status</span>
              <span className="text-sm font-bold text-white">On-Site & Remote · Egypt</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
