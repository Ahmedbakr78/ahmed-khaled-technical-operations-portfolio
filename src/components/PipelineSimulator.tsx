import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Zap,
  Terminal,
  Layers,
  FileCheck,
  ShieldCheck,
  Building2,
  HardDrive
} from 'lucide-react';
import {
  sectionContainerVariants,
  sectionItemVariants,
  staggerGridVariants,
  staggerCardVariants,
  sectionViewportConfig,
} from '../utils/motionVariants';

export const PipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [completionRate, setCompletionRate] = useState<number>(100);
  const [verifiedMilestones, setVerifiedMilestones] = useState<number>(5);
  const [complianceScore, setComplianceScore] = useState<number>(100);
  const [operationsStatus, setOperationsStatus] = useState<'ON SCHEDULE' | 'QC INSPECTING' | 'MILESTONE PASSED'>('ON SCHEDULE');
  const [activeStage, setActiveStage] = useState<number>(2);
  const [selectedLog, setSelectedLog] = useState<string>(
    'RFI #ENG-2026-104: Technical drawing interpretation verified against structural layout. Zero variance.'
  );
  const [rfiInput, setRfiInput] = useState<string>(
    'SELECT milestone_id, scope_name, qc_status, contractor_compliance FROM engineering_scopes WHERE completion_rate = 100;'
  );
  const [deliverablesData, setDeliverablesData] = useState<Array<{ milestone: string; scope: string; compliance: string; status: string }>>([
    { milestone: 'MS-01', scope: 'Project Scope & WBS Formulation', compliance: '100% Verified', status: 'Completed' },
    { milestone: 'MS-02', scope: 'Site Survey & BOQ Quantity Take-off', compliance: '100% Verified', status: 'Completed' },
    { milestone: 'MS-03', scope: 'Subcontractor Supervision & Installation', compliance: '100% Verified', status: 'Completed' },
    { milestone: 'MS-04', scope: 'Quality Control (QC) & RFI Approvals', compliance: '100% Verified', status: 'Completed' },
    { milestone: 'MS-05', scope: 'Final Client Handover & Invoice Auditing', compliance: '100% Verified', status: 'Completed' },
  ]);

  // Telemetry ticker for project lifecycle
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
      const logs = [
        'RFI #ENG-2026-104: Technical drawing interpretation verified against structural layout. Zero variance.',
        'QC Gate #3: Material submittal verified for site installation. Specs compliance confirmed.',
        'BOQ Milestone: Quantity take-off reconciled against contractor billing invoice. 100% approved.',
        'Site Coordination: Subcontractor progress aligned with master WBS schedule. Zero schedule slippage.',
        'Handover Stage: Milestone deliverable signed off by project owner and consulting team.'
      ];
      setSelectedLog(logs[Math.floor(Math.random() * logs.length)]);
    }, 2400);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSimulateInspection = () => {
    setOperationsStatus('QC INSPECTING');
    setSelectedLog('Quality Assurance audit initiated: scanning active site logs and RFI submittals...');
    setTimeout(() => {
      setOperationsStatus('MILESTONE PASSED');
      setSelectedLog('Audit Complete: 100% compliance with technical specifications and safety criteria verified.');
      setTimeout(() => {
        setOperationsStatus('ON SCHEDULE');
      }, 1800);
    }, 1400);
  };

  const handleQueryAudit = () => {
    setSelectedLog('Executed audit query across project scope records. All 5 deliverables verified with 100% completion.');
  };

  const pipelineStages = [
    {
      title: '1. Scope & WBS',
      tech: 'Project Planning',
      detail: 'Scope Definition • WBS • Budget Caps',
      icon: Layers,
    },
    {
      title: '2. Site Survey & BOQ',
      tech: 'Quantity Take-offs',
      detail: 'AutoCAD Schematics • Cost Estimations',
      icon: Building2,
    },
    {
      title: '3. Site Execution',
      tech: 'Field Supervision',
      detail: 'Subcontractor Alignment • Daily Logs',
      icon: Zap,
    },
    {
      title: '4. Quality & RFI',
      tech: 'Standards Compliance',
      detail: 'RFI Processing • Material Submittals',
      icon: ShieldCheck,
    },
    {
      title: '5. Client Handover',
      tech: 'Milestone Sign-off',
      detail: '100% Completion Rate • Final Delivery',
      icon: FileCheck,
    },
  ];

  return (
    <motion.section
      id="simulator"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewportConfig}
      variants={sectionContainerVariants}
      className="py-16 px-4 sm:px-6"
    >
      <motion.div variants={sectionContainerVariants} className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div variants={sectionItemVariants} className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            Interactive Project Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Project Lifecycle & Operations Simulator
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Simulate end-to-end engineering deliverables: from scope formulation and site coordination to quality control and final handover.
          </p>
        </motion.div>

        {/* Main Simulator Card */}
        <motion.div variants={sectionItemVariants} className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/20 space-y-8">
          {/* Controls & Metrics Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                  isRunning
                    ? 'bg-white/15 text-white border border-white/25 hover:bg-white/25'
                    : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause Lifecycle</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Lifecycle</span>
                  </>
                )}
              </button>

              <button
                onClick={handleSimulateInspection}
                className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-mono hover:bg-white/20 border border-white/15 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Simulate quality assurance audit & RFI verification"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Simulate QC Audit</span>
              </button>
            </div>

            {/* Live Metrics Pill Trio */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
              <div className="px-3.5 py-2 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-[10px] font-mono text-zinc-400">COMPLETION</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-white">
                  {completionRate}% Verified
                </span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-[10px] font-mono text-zinc-400">DELIVERABLES</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-white">
                  {verifiedMilestones}/5 Delivered
                </span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-[10px] font-mono text-zinc-400">QC SCORE</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-zinc-200">
                  {complianceScore}% RFI Pass
                </span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-[10px] font-mono text-zinc-400">SCHEDULE</span>
                <span className="text-xs sm:text-sm font-bold font-mono text-white">
                  {operationsStatus}
                </span>
              </div>
            </div>
          </div>

          {/* 5-Stage Interactive Project Lifecycle Flow */}
          <motion.div variants={staggerGridVariants} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <motion.div
                  key={stage.title}
                  variants={staggerCardVariants}
                  className={`p-4 rounded-2xl border transition-all duration-300 relative ${
                    isActive
                      ? 'bg-white/10 border-white text-white scale-[1.02] shadow-lg'
                      : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white animate-pulse' : 'text-zinc-400'}`} />
                    <span className="text-[10px] font-mono text-zinc-500">Stage 0{idx + 1}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">{stage.title}</h4>
                  <p className="text-[11px] font-mono text-zinc-300">{stage.tech}</p>
                  <p className="text-[10px] text-zinc-400 mt-2">{stage.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Live Telemetry Log Feed */}
          <div className="p-3.5 rounded-2xl bg-black/60 border border-white/15 font-mono text-xs text-zinc-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
            <span className="text-zinc-400 font-bold select-none">[SITE-LOG]</span>
            <span className="truncate">{selectedLog}</span>
          </div>

          {/* Interactive RFI & Scope Inspection Console */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-zinc-300" />
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  Deliverables & Compliance Verification Console
                </h3>
              </div>
              <button
                onClick={handleQueryAudit}
                className="px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Verify Audit Log</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <textarea
              value={rfiInput}
              onChange={(e) => setRfiInput(e.target.value)}
              rows={2}
              className="w-full p-3 rounded-2xl bg-black/70 border border-white/15 text-xs font-mono text-white focus:outline-none focus:border-white/50 resize-none"
            />

            {/* Deliverables Output Table */}
            <div className="rounded-2xl border border-white/10 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-xs font-mono">
                <thead className="bg-white/5 text-zinc-400 border-b border-white/10">
                  <tr>
                    <th className="p-3">Milestone Code</th>
                    <th className="p-3">Scope Description</th>
                    <th className="p-3">QC Compliance</th>
                    <th className="p-3 text-right">Delivery Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {deliverablesData.map((row) => (
                    <tr key={row.milestone} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-semibold text-white whitespace-nowrap">{row.milestone}</td>
                      <td className="p-3 whitespace-nowrap">{row.scope}</td>
                      <td className="p-3 text-white whitespace-nowrap">{row.compliance}</td>
                      <td className="p-3 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 text-[11px] text-white font-mono">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
