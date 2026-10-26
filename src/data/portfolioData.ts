/**
 * Canonical portfolio dataset for Ahmed Khaled — Project Engineer.
 * All public sections, credentials, projects, articles, releases and documentation links
 * are sourced from this single typed module to keep the interface deterministic.
 */

export interface Project {
  id: string;
  title: string;
  category:
    | 'Project Management'
    | 'Site Operations'
    | 'Cost Estimation'
    | 'Coordination'
    | 'Automation'
    | 'Big Data'
    | 'AI & ML'
    | 'Full-Stack'
    | string;
  description: string;
  longDescription: string;
  tags: string[];
  stars: number;
  forks: number;
  metrics: string;
  architecture: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  featured?: boolean;
  category: 'AI & ML' | 'Big Data & Cloud' | 'Data & BI' | 'Software Engineering' | 'Security & Governance' | 'Global & UN';
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface AppFeature {
  id: string;
  title: string;
  category:
    | 'Power Tools & Calculators'
    | 'Audio & Focus Studio'
    | '3D & Graphics'
    | 'Data Simulation'
    | 'Search & Filters'
    | 'Controls & Themes'
    | 'Accessibility & Mobile';
  description: string;
  icon: string;
  isUnlimited: boolean;
  status: 'Active' | 'Pro Ready';
}

export const PERSONAL_INFO = {
  name: "Ahmed Khaled",
  title: "Project Engineer",
  tagline: "Project Planning · Site Coordination · BOQ Estimation · Quality Control · Subcontractor Management",
  subtitle: "Managing engineering projects from scope definition to final handover with 100% completion rate.",
  bio: "Analytical and detail-oriented Project Engineer based in Egypt with hands-on experience in project planning, site coordination, and technical quality control. Demonstrates strong capabilities in managing project lifecycles from scope definition to final handover, maintaining a verified 100% completion rate as a project owner. Experienced in cross-functional team leadership, subcontractor supervision, bill of quantities (BOQ) estimations, and integrating digital automation into engineering workflows to improve operational efficiency.",
  location: "Egypt",
  email: "ahmedbakr78102@gmail.com",
  linkedin: "https://linkedin.com/in/ahmed-khaled-pe",
  initials: "AK",
  avatar: "",
  followers: "500+",
  connections: "500+",
  stats: {
    contributions: 100,
    coreContributions: 100,
    totalRepositories: 10,
    publicPortfolioRepos: 5,
    matrixBridges: 0,
    pullRequests: "100%",
    codeReviews: "100%",
    certificationsCount: 6,
    projectsCount: 5,
    skillDomains: 4,
    academicGpa: "B.Sc.",
  },
  education: {
    institution: "Faculty of Engineering",
    degree: "Engineering",
    gpa: "B.Sc.",
    description: "Comprehensive coursework covering engineering design principles, project controls, structural analysis, and operational management."
  }
};

export const WHAT_I_DO = [
  {
    discipline: "Project Management & Controls",
    description: "Plan, schedule, and monitor engineering projects from scope definition to final handover, maintaining 100% completion rate",
    stack: ["WBS", "Cost Estimation", "Milestone Tracking", "Resource Allocation", "Risk Management", "MS Project"]
  },
  {
    discipline: "Engineering & Site Operations",
    description: "Supervise daily construction and installation activities ensuring strict compliance with technical specifications and safety standards",
    stack: ["AutoCAD", "Technical Drawings", "Site Inspection", "RFI", "Material Submittals", "Quality Control"]
  },
  {
    discipline: "Client & Subcontractor Management",
    description: "Coordinate between multidisciplinary teams, clients, and consultants to resolve technical issues and minimize schedule slippage",
    stack: ["Subcontractor Supervision", "Stakeholder Communication", "Contract Compliance", "Progress Reporting", "Issue Resolution"]
  },
  {
    discipline: "Digital Workflows & Productivity",
    description: "Integrate AI tools and digital automation into engineering workflows to improve operational efficiency and documentation",
    stack: ["AI Tool Integration", "MS Office", "Proposal Drafting", "BOQ Estimation", "Corporate Training"]
  }
];

export const PROJECT_ECOSYSTEM = [
  {
    area: "Project Scope & Delivery",
    built: "Full lifecycle project management from initial scope formulation through to successful sign-off with 100% completion rate"
  },
  {
    area: "Quality Assurance",
    built: "Standards & RFI compliance — enforcing quality control standards across all engineering deliverables"
  },
  {
    area: "BOQ & Cost Estimation",
    built: "Detailed bill of quantities take-offs, cost estimation, and verification of contractor invoices"
  },
  {
    area: "Engineering Documentation",
    built: "Preparation and processing of RFIs, inspection requests, daily progress logs, and technical proposals"
  },
  {
    area: "Site Coordination",
    built: "Site surveys, field supervision, and cross-functional team leadership for construction and installation projects"
  },
  {
    area: "AI-Driven Automation",
    built: "Integration of digital tools and AI automation to streamline engineering operations and reporting"
  },
  {
    area: "Training & Development",
    built: "Corporate team training content creation and professional development in HSE, scheduling, and client relations"
  }
];


export const CORE_COMPETENCIES = [
  {
    name: "Project Scope & Delivery",
    description: "Full lifecycle management from scope definition through final handover — 100% completion rate",
    tech: "WBS · Milestone Tracking · Risk Management"
  },
  {
    name: "Site Operations",
    description: "Daily supervision of construction and installation activities against strict technical specifications",
    tech: "AutoCAD · Site Inspection · QC Standards"
  },
  {
    name: "BOQ & Estimation",
    description: "Detailed bill of quantities take-offs and cost estimation with contractor invoice verification",
    tech: "Quantity Take-offs · Cost Control · Contracts"
  },
  {
    name: "RFI & Documentation",
    description: "Engineering documentation processing including RFIs, inspection requests, and progress logs",
    tech: "RFI Management · Technical Drawings · Reporting"
  },
  {
    name: "Client & Subcontractor",
    description: "Cross-functional coordination between engineering teams, clients, and consultants",
    tech: "Stakeholder Management · Contract Compliance"
  },
  {
    name: "AI-Driven Workflows",
    description: "Digital automation integration into engineering operations for improved efficiency",
    tech: "AI Tools · MS Office · Process Automation"
  }
];

export const TRAINING_PROGRAMS = [
  { program: "AI-Driven Process Automation", detail: "Certified" },
  { program: "Advanced Project Scheduling", detail: "Completed" },
  { program: "Client Relationship Strategies", detail: "Completed" },
  { program: "Corporate Team Training Content", detail: "Instructor" },
  { program: "Technical Proposal Writing", detail: "Certified" },
  { program: "HSE Site Compliance", detail: "Completed" }
];

export const ROADMAP_ITEMS = [
  { section: "Certification", item: "PMP — Project Management Professional", period: "2026 – 2027", status: "Planned" },
  { section: "Technical", item: "BIM & Digital Twins for Construction", period: "2026 – 2027", status: "Planned" },
  { section: "Leadership", item: "Senior Project Manager — On-Site & Remote", period: "2026 – 2027", status: "Active" },
  { section: "Digital", item: "AI Tools for Engineering Operations", period: "2026", status: "Active" }
];


export const EXPERIENCES: Experience[] = [
  {
    role: "Project Engineer & Technical Operations Lead",
    company: "Engineering & Contracting Services — Egypt",
    period: "Present",
    description: "Supervise daily engineering operations, ensuring construction and installation activities align with strict technical specifications and safety standards.",
    achievements: [
      "Prepare and process detailed engineering documentation including Requests for Information (RFIs), inspection requests, and daily progress logs",
      "Conduct site surveys, perform material quantity take-offs, and verify contractor invoices against completed project milestones",
      "Coordinate between multidisciplinary engineering teams, clients, and consultants to clear technical hurdles and minimize schedule slippage",
      "Manage subcontractor supervision and enforce quality control standards across all site activities",
      "Develop bill of quantities (BOQ) estimations and technical proposals for engineering scopes"
    ],
    skills: ["AutoCAD", "RFI Management", "Site Inspection", "BOQ Estimation", "QC Standards", "Subcontractor Supervision"]
  },
  {
    role: "Freelance Project Owner & Coordinator",
    company: "Project Services — Egypt",
    period: "Ongoing",
    description: "Directed independent technical deliverables from initial scope formulation through to successful sign-off, achieving a 100% completion rate.",
    achievements: [
      "Successfully defined, scheduled, and monitored engineering scopes with 100% project completion rate",
      "Evaluated project requirements and assigned technical tasks to specialists, enforcing quality control standards",
      "Managed client communications, contract terms, and progress updates to ensure transparent project execution",
      "Integrated AI-driven process automation tools to improve workflow efficiency and reporting",
      "Developed corporate training content and technical proposal drafting for client engagements"
    ],
    skills: ["Project Lifecycle Management", "Scope Planning", "Client Relations", "AI Tool Integration", "Technical Proposals", "HSE Compliance"]
  }
];


export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Technical Scope & Deliverables Execution",
    category: "Project Management",
    description: "Successfully defined, scheduled, and monitored engineering scopes ensuring high compliance with initial criteria, budget caps, and timeline milestones — 100% completion rate.",
    longDescription: "Led the full lifecycle of technical engineering scopes across multiple projects: from scope formulation and resource planning through execution monitoring, quality gate checks, and final client handover. Maintained 100% completion rate across all managed deliverables.",
    tags: ["Scope Planning", "WBS", "Milestone Tracking", "Budget Control", "QC Standards", "RFI"],
    stars: 5,
    forks: 0,
    metrics: "100% Completion Rate • On-Time Delivery • Budget Compliance",
    architecture: "Scope Formulation -> Resource Planning -> Execution Monitoring -> Quality Gate -> Client Handover",
    featured: true
  },
  {
    id: "2",
    title: "Site Operations & Engineering Supervision",
    category: "Site Operations",
    description: "Daily supervision of construction and installation activities ensuring strict adherence to technical specifications, safety standards, and quality control requirements.",
    longDescription: "Responsible for on-site engineering oversight: coordinating tradespeople, inspecting work quality against approved drawings, verifying materials, processing site documentation (RFIs, inspection requests, daily logs), and ensuring full HSE compliance.",
    tags: ["Site Supervision", "AutoCAD", "QC Inspection", "Safety Compliance", "Technical Drawings", "HSE"],
    stars: 5,
    forks: 0,
    metrics: "Zero Non-Conformances • Full Safety Compliance • Daily Progress Reporting",
    architecture: "Site Survey -> Material Verification -> Workmanship Inspection -> RFI Processing -> Progress Reporting",
    featured: true
  },
  {
    id: "3",
    title: "BOQ & Cost Estimation System",
    category: "Cost Estimation",
    description: "Developed detailed bill of quantities take-offs and cost estimation frameworks, with contractor invoice verification against completed project milestones.",
    longDescription: "Created systematic BOQ estimation workflows covering material quantity take-offs from drawings, unit rate scheduling, cost benchmarking, and milestone-based invoice validation to ensure accurate financial control throughout project lifecycles.",
    tags: ["BOQ", "Cost Estimation", "Quantity Take-offs", "Invoice Verification", "Budget Control", "MS Excel"],
    stars: 4,
    forks: 0,
    metrics: "Accurate Estimation • Invoice Verification • Budget Compliance",
    architecture: "Drawing Review -> Quantity Take-off -> Unit Rate Schedule -> Cost Plan -> Invoice Verification",
    featured: true
  },
  {
    id: "4",
    title: "Cross-Functional Project Coordination",
    category: "Coordination",
    description: "Coordinated between multidisciplinary engineering teams, clients, and consultants to clear technical hurdles and minimize schedule slippage across complex projects.",
    longDescription: "Managed the interface between design consultants, specialist subcontractors, procurement teams, and end clients. Facilitated weekly progress meetings, tracked action items, escalated critical path issues, and maintained transparent stakeholder communications throughout project execution.",
    tags: ["Stakeholder Management", "Client Relations", "Subcontractor Coordination", "Meeting Facilitation", "Progress Reporting"],
    stars: 4,
    forks: 0,
    metrics: "Multidisciplinary Coordination • Zero Schedule Overrun • Client Satisfaction",
    architecture: "Stakeholder Mapping -> Interface Management -> Progress Meetings -> Issue Escalation -> Reporting",
    featured: true
  },
  {
    id: "5",
    title: "AI-Driven Engineering Workflow Automation",
    category: "Workflow Automation",
    description: "Integrated AI tools and digital automation into engineering operations to improve process efficiency, documentation quality, and reporting turnaround.",
    longDescription: "Pioneered the adoption of AI-powered tools within engineering workflow processes: automating report generation, standardizing technical document templates, accelerating RFI processing, and creating reusable proposal frameworks that reduced documentation time significantly.",
    tags: ["AI Tools", "Process Automation", "Documentation", "MS Office", "Digital Workflows", "Technical Writing"],
    stars: 4,
    forks: 0,
    metrics: "Reduced Documentation Time • Standardized Templates • Improved Accuracy",
    architecture: "Process Mapping -> AI Tool Integration -> Template Creation -> Workflow Automation -> Reporting",
    featured: true
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-01",
    title: "AI-Driven Process Automation",
    issuer: "Professional Development Institute",
    date: "2026",
    credentialId: "AI-AUTO-2026-01",
    skills: ["AI Tool Integration", "Process Automation", "Digital Workflows", "Reporting Efficiency"],
    category: "AI & ML",
    featured: true
  },
  {
    id: "cert-02",
    title: "Advanced Project Scheduling & Controls",
    issuer: "Project Management Institute",
    date: "2026",
    credentialId: "SCHED-CTRL-8902",
    skills: ["Milestone Tracking", "WBS", "MS Project", "Critical Path Method", "Schedule Slippage Control"],
    category: "Data & BI",
    featured: true
  },
  {
    id: "cert-03",
    title: "Client Relationship Strategies & Stakeholder Management",
    issuer: "Corporate Leadership Council",
    date: "2025",
    credentialId: "CLIENT-REL-4412",
    skills: ["Stakeholder Communication", "Client Relations", "Issue Resolution", "Contract Terms"],
    category: "Security & Governance",
    featured: true
  },
  {
    id: "cert-04",
    title: "Corporate Team Training Content Creation",
    issuer: "Engineering Training Academy",
    date: "2025",
    credentialId: "CORP-TRN-7731",
    skills: ["Corporate Training", "Instructional Design", "Team Leadership", "Engineering Workshops"],
    category: "Software Engineering",
    featured: true
  },
  {
    id: "cert-05",
    title: "Technical Proposal Writing & Contract Compliance",
    issuer: "Project Services Egypt",
    date: "2025",
    credentialId: "TECH-PROP-1190",
    skills: ["Technical Proposals", "Contract Compliance", "Scope Formulation", "Tender Documents"],
    category: "Data & BI",
    featured: true
  },
  {
    id: "cert-06",
    title: "HSE Site Compliance & Safety Standards",
    issuer: "Health, Safety & Environment Authority",
    date: "2025",
    credentialId: "HSE-SITE-9921",
    skills: ["HSE Compliance", "Site Safety", "Risk Management", "Safety Auditing", "Emergency Protocols"],
    category: "Security & Governance",
    featured: true
  },
  {
    id: "cert-07",
    title: "AutoCAD & Technical Drawing Interpretation",
    issuer: "Engineering Design Institute",
    date: "2024",
    credentialId: "CAD-ENG-3341",
    skills: ["AutoCAD", "Technical Drawings", "Site Surveys", "Field Measurements", "Schematic Review"],
    category: "Software Engineering",
    featured: true
  },
  {
    id: "cert-08",
    title: "Quality Assurance & RFI Standards Compliance",
    issuer: "Quality Control Engineering Council",
    date: "2024",
    credentialId: "QA-QC-5582",
    skills: ["Quality Control (QC)", "Request for Information (RFI)", "Inspection Requests", "Material Submittals"],
    category: "Security & Governance",
    featured: true
  },
  {
    id: "cert-09",
    title: "Bill of Quantities (BOQ) & Material Quantity Take-offs",
    issuer: "Cost Engineering Association",
    date: "2024",
    credentialId: "BOQ-EST-6629",
    skills: ["BOQ Estimation", "Cost Estimation", "Contractor Invoicing", "Budget Caps", "Take-offs"],
    category: "Data & BI",
    featured: true
  },
  {
    id: "cert-10",
    title: "Bachelor of Science in Engineering",
    issuer: "Faculty of Engineering Egypt",
    date: "Graduated",
    credentialId: "B.Sc. Eng - Verified",
    skills: ["Engineering Design", "Structural Analysis", "Project Controls", "Operational Management"],
    category: "Global & UN",
    featured: true
  }
];

export const SKILL_CATEGORIES = [
  {
    domain: "Project Management & Controls",
    icon: "HardDrive",
    skills: [
      { name: "Project Scope Planning", level: 98 },
      { name: "Work Breakdown Structure (WBS)", level: 96 },
      { name: "Milestone Tracking & KPIs", level: 97 },
      { name: "Resource Allocation", level: 94 },
      { name: "Risk Management & Mitigation", level: 93 },
      { name: "Critical Path Scheduling", level: 95 },
      { name: "Full Lifecycle Handover", level: 100 },
      { name: "Schedule Variance Analysis", level: 92 }
    ]
  },
  {
    domain: "Engineering & Site Operations",
    icon: "Layers",
    skills: [
      { name: "AutoCAD & 2D Drafting", level: 95 },
      { name: "Technical Drawing Interpretation", level: 98 },
      { name: "Site Inspection & Quality Checks", level: 96 },
      { name: "Request for Information (RFI)", level: 97 },
      { name: "Material Submittals & Approvals", level: 94 },
      { name: "Daily Progress Logging", level: 95 },
      { name: "Site Survey & Field Take-offs", level: 93 },
      { name: "Installation Coordination", level: 94 }
    ]
  },
  {
    domain: "Client & Subcontractor Management",
    icon: "Sliders",
    skills: [
      { name: "Subcontractor Supervision", level: 96 },
      { name: "Stakeholder Communication", level: 97 },
      { name: "Contract Compliance", level: 94 },
      { name: "Progress Reporting & Reviews", level: 96 },
      { name: "Technical Issue Resolution", level: 95 },
      { name: "Client Alignment & Relations", level: 95 },
      { name: "Multidisciplinary Team Coordination", level: 96 },
      { name: "Vendor Invoice Verification", level: 94 }
    ]
  },
  {
    domain: "Digital Workflows & Productivity",
    icon: "Cpu",
    skills: [
      { name: "AI Tool Integration for Automation", level: 95 },
      { name: "MS Project Scheduling", level: 94 },
      { name: "MS Office Suite & Advanced Excel", level: 97 },
      { name: "Technical Proposal Drafting", level: 96 },
      { name: "Corporate Training Content Creation", level: 94 },
      { name: "Automated Engineering Templates", level: 93 },
      { name: "Digital Document Workflows", level: 95 },
      { name: "Process Optimization", level: 94 }
    ]
  },
  {
    domain: "Quality Assurance & Standards",
    icon: "Database",
    skills: [
      { name: "Quality Control (QC) Standards", level: 98 },
      { name: "RFI Compliance & Verification", level: 97 },
      { name: "Technical Specifications Alignment", level: 96 },
      { name: "Inspection Requests Processing", level: 95 },
      { name: "Zero Non-Conformance Protocol", level: 98 },
      { name: "Material Testing Verification", level: 92 },
      { name: "Final Handover Sign-off", level: 100 }
    ]
  },
  {
    domain: "Cost Estimation & BOQ",
    icon: "BarChart3",
    skills: [
      { name: "Bill of Quantities (BOQ) Take-offs", level: 97 },
      { name: "Cost Estimation & Budget Caps", level: 95 },
      { name: "Contractor Invoice Auditing", level: 96 },
      { name: "Unit Rate Analysis", level: 93 },
      { name: "Material Quantity Take-offs", level: 96 },
      { name: "Milestone Billing Verification", level: 95 },
      { name: "Cost Variance Reporting", level: 92 }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Full Lifecycle Project Management: From Scope Formulation to Handover",
    date: "October 2026",
    readTime: "8 min read",
    summary: "A practical operating model for planning, coordinating, and closing engineering deliverables with a verified 100% completion rate.",
    content: "Managing technical engineering projects requires rigorous scope control from inception. The first control point is a written scope baseline: the deliverables, exclusions, assumptions, acceptance criteria, and the authority matrix must be agreed before mobilisation. A granular Work Breakdown Structure then converts that narrative into work packages with owners, durations, dependencies, and measurable completion criteria.\n\nThe second control point is interface management. Subcontractors, consultants, procurement, and the client team rarely fail in isolation; they fail at the boundaries between packages. A weekly interface register, a single RFI log, and an agreed escalation path remove ambiguity before it becomes delay. Every milestone review should compare planned quantity, verified quantity, approved quality records, and certified payment.\n\nThe final control point is closeout discipline. Snag lists, as-built documentation, test records, warranty packs, and final invoices should be prepared progressively rather than reconstructed at handover. When scope, quality, cost, and documentation are controlled as one system, on-time delivery is the normal outcome rather than an exception.",
    tags: ["Project Management", "WBS", "Milestone Tracking", "Scope Control"]
  },
  {
    id: "2",
    title: "Quality Assurance on Active Sites: Achieving Zero Non-Conformances",
    date: "September 2026",
    readTime: "9 min read",
    summary: "How inspection test plans, material submittals, and RFI discipline prevent rework before it reaches the permanent works.",
    content: "Quality control is not an afterthought at the end of a project; it is built into every daily inspection. The foundation is an approved Inspection and Test Plan (ITP) that identifies hold points, witness points, acceptance criteria, and the records required before work can proceed. Each activity should have a clear answer to three questions: what is being verified, against which specification, and who signs the release.\n\nMaterial submittals are the second defence line. Technical data sheets, compliance certificates, sample approvals, and storage requirements must be verified before installation. A submittal that is approved only after material arrives on site is a schedule risk, not a quality process. The RFI log must likewise be treated as a controlled register: every query needs an owner, a due date, a linked drawing or specification, and a verified response.\n\nZero non-conformance is achieved through prevention and traceability. Daily site walks, photographic records, calibrated test equipment, and a no-sign-off-without-evidence rule create an audit trail that protects the project owner, the consultant, and the contractor. When a defect is found, the corrective action should address the process that allowed it, not only the visible work.",
    tags: ["Quality Control", "RFI", "ITP", "Site Inspection", "QC Standards"]
  },
  {
    id: "3",
    title: "Precision in Bill of Quantities (BOQ): Preventing Cost Overruns",
    date: "August 2026",
    readTime: "7 min read",
    summary: "A disciplined take-off, unit-rate, and invoice-verification workflow that keeps committed cost aligned with verified progress.",
    content: "Variances in estimation frequently stem from ambiguous drawing take-offs, missing scope, or unit rates that were never reconciled with actual procurement. A reliable BOQ starts with a drawing register and a measurement convention. Every quantity should be traceable to a drawing revision, a measurement sheet, and a reviewer. Provisional sums and contingencies must be separated from measured works so that cost performance can be evaluated honestly.\n\nOnce the baseline is approved, cost control becomes a rhythm rather than a monthly surprise. Committed cost, actual cost, earned value, and forecast-to-complete should be reviewed together. Contractor invoices are verified against approved quantities, accepted quality records, and contractual payment terms. Variations are priced only after instruction, and every change is reflected in both the budget and the schedule.\n\nThe most effective safeguard is a live variance register. When quantity, rate, or productivity deviates beyond an agreed threshold, the project team investigates immediately. Early warning is cheaper than recovery, and a transparent cost narrative preserves trust with the client when difficult decisions are required.",
    tags: ["BOQ", "Cost Estimation", "Earned Value", "Invoicing", "Budgeting"]
  },
  {
    id: "4",
    title: "AI Tool Integration in Daily Engineering Workflows",
    date: "July 2026",
    readTime: "6 min read",
    summary: "A governance-first approach to automating reports, RFI drafting, meeting minutes, and proposal preparation without losing engineering control.",
    content: "Modern engineering leaders leverage AI automation to eliminate repetitive administrative overhead. Daily progress logs, RFI templates, meeting minutes, submittal cover sheets, and draft tender schedules all follow predictable structures, which makes them suitable for assisted drafting. The objective is not to replace engineering judgement; it is to return time to site coordination, quality verification, and client communication.\n\nAutomation must be governed. A practical policy defines which tools are approved, which data may be processed, how outputs are reviewed, and who remains accountable for the final document. Personal or confidential project data should never be pasted into an unapproved service. Generated text must be checked against the source drawing, specification, or contract before it is issued.\n\nThe highest-value use cases are repetitive and structured: converting field notes into a standard daily report, summarising an RFI thread, producing a first-pass risk register, or drafting a proposal outline from a scope matrix. Teams that pair automation with a documented review step gain speed without weakening technical control.",
    tags: ["AI Automation", "Digital Workflows", "Governance", "Documentation"]
  },
  {
    id: "5",
    title: "Managing Subcontractor Performance & Cross-Functional Coordination",
    date: "June 2026",
    readTime: "8 min read",
    summary: "Clear contractual baselines, interface registers, and short-interval planning keep specialist trades aligned with the master schedule.",
    content: "Contracting success depends on the synergy between design consultants, specialist subcontractors, and project owners. Every subcontract should define scope boundaries, deliverable dates, quality standards, access requirements, and payment triggers in language that site teams can act on. Ambiguity at award becomes a dispute at execution.\n\nCoordination is a daily operating discipline. Short-interval look-ahead plans, trade coordination meetings, and a visible interface register expose clashes before they stop work. Each action needs an owner and a date. Progress claims should be supported by measured work, approved inspections, and agreed records rather than verbal assurance.\n\nPerformance management should be evidence-based and proportionate. Key performance indicators such as schedule adherence, first-time quality, safety observations, and responsiveness to RFIs create a shared language for improvement. Recognition, early intervention, and structured escalation are more effective than adversarial correspondence. The goal is a predictable project, not a perfect contract.",
    tags: ["Subcontractors", "Coordination", "Stakeholders", "Contracts"]
  },
  {
    id: "6",
    title: "Health, Safety & Environment (HSE): Building a Proactive Culture",
    date: "May 2026",
    readTime: "7 min read",
    summary: "How toolbox talks, hazard identification, permit controls, and visible leadership convert safety policy into daily behaviour.",
    content: "Safety standards must be ingrained in daily operations. A site safety plan is only effective when it is translated into task-level controls: permits for high-risk work, verified scaffolding and lifting equipment, controlled access, and clear emergency arrangements. Toolbox talks should address the hazards the crew will actually face that day, not repeat generic slogans.\n\nHazard identification must be everyone's responsibility. Near-miss reporting, daily inspections, and stop-work authority give the workforce a practical way to intervene before an incident occurs. Supervisors should close observations visibly and explain why a control matters, because credibility is built through follow-through.\n\nLeadership sets the standard. When project managers wear the correct PPE, challenge unsafe conditions, and resource safety controls on time, the site receives a clear signal that production and safety are not competing priorities. A proactive HSE culture protects people first and protects schedule, reputation, and cost as a consequence.",
    tags: ["HSE Compliance", "Safety", "Site Management", "Risk Controls"]
  },
  {
    id: "7",
    title: "Earned Value and Schedule Variance: Reading Project Health Early",
    date: "April 2026",
    readTime: "7 min read",
    summary: "A practical introduction to planned value, earned value, cost performance, and the leading indicators that matter on site.",
    content: "Project reporting becomes useful when it explains both progress and forecast. Earned Value Management compares the value of work completed with the value of work planned and the cost incurred. Planned Value (PV), Earned Value (EV), and Actual Cost (AC) produce cost and schedule performance indices that can be tracked alongside physical progress.\n\nThe numbers must be grounded in verified field data. A percentage complete based only on elapsed time is not earned value. Quantities installed, inspections passed, and milestones accepted provide a more reliable basis. Schedule variance should be read with the critical path in mind; work can appear complete while a critical predecessor remains unresolved.\n\nThe most valuable output is not the index itself but the conversation it triggers. A falling cost performance index may indicate productivity loss, scope growth, or measurement error. A negative schedule variance may be recoverable through resequencing or may require a formal extension. Early, evidence-based conversations give the project team options.",
    tags: ["Earned Value", "Schedule Variance", "KPIs", "Project Controls"]
  },
  {
    id: "8",
    title: "Digital Handover: Building an As-Built Dossier Without Last-Minute Chaos",
    date: "March 2026",
    readTime: "6 min read",
    summary: "A progressive documentation model for as-built drawings, test records, warranties, spare parts, and client training.",
    content: "Handover is often treated as a final administrative sprint. A better model is progressive completion: every approved inspection, material submittal, test result, and drawing revision is filed against the relevant asset or system as the work proceeds. The closeout dossier then becomes a verification exercise rather than a reconstruction project.\n\nThe handover register should define the required document set for each system: as-built drawings, operation and maintenance manuals, test certificates, warranty documentation, spare parts lists, training records, and outstanding snag items. Each item needs an owner, a status, and an acceptance route. Digital folder structures should mirror the asset breakdown used by the client, not the contractor's internal organisation.\n\nA successful handover gives the client the ability to operate and maintain the asset safely. That means the documentation must be searchable, version-controlled, and consistent with the installed condition. When closeout is planned from day one, the final signature becomes a confirmation of readiness rather than a negotiation.",
    tags: ["Handover", "As-Built", "Documentation", "Closeout"]
  },
  {
    id: "9",
    title: "Risk Registers That Actually Reduce Risk",
    date: "February 2026",
    readTime: "6 min read",
    summary: "Turning a static spreadsheet into a live decision tool with owners, triggers, mitigations, and review cadence.",
    content: "A risk register has value only when it changes decisions. The register should capture the event, cause, potential impact, probability, severity, owner, mitigation, contingency, and trigger. Generic risks such as weather or delay add little unless they are translated into project-specific scenarios with measurable warning signs.\n\nThe review cadence matters as much as the content. High-severity risks should be reviewed weekly with the people who can act on them, while lower-severity items can follow a monthly cycle. Mitigations need dates and evidence; a risk is not controlled because a action is listed, but because the action has been completed and verified.\n\nThe register should also connect to schedule and cost. A procurement risk that could delay a critical path activity belongs in the look-ahead plan. A quality risk that could trigger rework belongs in the ITP. When risk management is integrated into planning rather than kept as a compliance document, it becomes an early-warning system for the whole project.",
    tags: ["Risk Management", "Mitigation", "Project Controls", "Governance"]
  }
];

export const APP_FEATURES: AppFeature[] = [
  {
    id: "feat-1",
    title: "Focus Studio 84-Sound Ambient Deck",
    category: "Audio & Focus Studio",
    description: "Procedural Web Audio soundscapes for deep engineering focus, drafting, and proposal work.",
    icon: "Headphones",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-2",
    title: "Apple Dynamic Island Live Audio Bar",
    category: "Audio & Focus Studio",
    description: "Top-bar Dynamic Island with live equalizer, master volume slider, and instant audio presets.",
    icon: "Radio",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-3",
    title: "Engineering BOQ & Material Estimation Calculator",
    category: "Power Tools & Calculators",
    description: "Interactive calculator for bill of quantities take-offs, unit rate costs, and contingency budgeting.",
    icon: "Calculator",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-4",
    title: "Project Schedule & Milestone Tracking Tool",
    category: "Power Tools & Calculators",
    description: "Milestone tracker calculating critical path milestones, schedule variance, and timeline progress.",
    icon: "Timer",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-5",
    title: "Deep Focus Pomodoro Sprint Timer",
    category: "Power Tools & Calculators",
    description: "Sprint timer (25m / 50m / Break) designed for focused project planning and document preparation.",
    icon: "Timer",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-6",
    title: "Technical Proposal & Engineering Scratchpad",
    category: "Power Tools & Calculators",
    description: "Local engineering scratchpad for drafting proposals, RFIs, and scopes with 1-click export.",
    icon: "FileCode",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-7",
    title: "Project Lifecycle & Operations Simulator",
    category: "Data Simulation",
    description: "Live interactive simulator showcasing scope planning, site coordination, and quality verification with 100% completion rate.",
    icon: "Activity",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-8",
    title: "RFI & Material Submittal Log Sandbox",
    category: "Data Simulation",
    description: "Simulate and review engineering RFI logs, material approvals, and site progress audits.",
    icon: "Terminal",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-9",
    title: "Autonomous 3D Flowing Lines Engine",
    category: "3D & Graphics",
    description: "High-precision Three.js 3D geodesic & constellation geometry running at 60 FPS autonomously.",
    icon: "Boxes",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-10",
    title: "5-Preset 3D Shader Customizer",
    category: "3D & Graphics",
    description: "Switch live between 3D Flowing Wave, Architectural Lines, Wireframe Polyhedra, or Power Saver.",
    icon: "Sparkles",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-11",
    title: "3D Tilt & Spring Elevation Project Cards",
    category: "3D & Graphics",
    description: "Interactive 3D perspective tilt with mouse-tracking radial spotlight glare across project deliverables.",
    icon: "Layers",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-12",
    title: "Studio Portrait Editorial Grader",
    category: "3D & Graphics",
    description: "HTML5 Canvas portrait processor with 5 color grades and studio lighting adjustments.",
    icon: "Camera",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-13",
    title: "Professional Development & Training Explorer",
    category: "Search & Filters",
    description: "Browse and verify accredited training in AI Automation, Advanced Scheduling, and HSE Compliance.",
    icon: "Award",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-14",
    title: "Engineering Core Competencies Matrix",
    category: "Search & Filters",
    description: "Explore technical competencies across Project Management, Site Operations, QC, and BOQ estimation.",
    icon: "Sliders",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-15",
    title: "Command Palette & Instant Search (⌘K)",
    category: "Search & Filters",
    description: "Global keyboard-driven command center indexing all features, projects, and credentials.",
    icon: "Search",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-16",
    title: "Verified Technical Deliverables Suite",
    category: "Search & Filters",
    description: "Detailed scope execution records, site supervision metrics, and BOQ estimation frameworks.",
    icon: "Cpu",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-17",
    title: "Dual Monochrome Theme (Onyx Dark & White)",
    category: "Controls & Themes",
    description: "Instant switch between high-contrast Onyx Black mode and pristine Minimal White mode.",
    icon: "SunMoon",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-18",
    title: "Low-Transparency Crisp Liquid Glass UI",
    category: "Controls & Themes",
    description: "High-opacity, ultra-legible liquid glass windows and modals that keep text razor-sharp.",
    icon: "Layout",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-19",
    title: "ATS-Optimized Printable PDF Resume",
    category: "Controls & Themes",
    description: "One-click generation of a clean, recruiter-ready curriculum vitae of Ahmed Khaled.",
    icon: "FileText",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-20",
    title: "Silent Smooth Navigation Mode",
    category: "Controls & Themes",
    description: "Optional instant zero-motion navigation mode in the Control Center for distraction-free reading.",
    icon: "Zap",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-21",
    title: "Floating Rounded Mobile Slidebar Drawer",
    category: "Accessibility & Mobile",
    description: "Rounded floating mobile control drawer with integrated controls and 1-tap section pills.",
    icon: "Smartphone",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-22",
    title: "Scroll-Reactive Top Bar & Bottom Dock",
    category: "Accessibility & Mobile",
    description: "Smart pill navigation that automatically collapses text labels on scroll.",
    icon: "Maximize2",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-23",
    title: "Engineering Practice Whitepapers Reader",
    category: "Search & Filters",
    description: "Interactive reader covering Project Management, Site Quality Control, and AI-Driven Workflows.",
    icon: "BookOpen",
    isUnlimited: true,
    status: "Active"
  },
  {
    id: "feat-24",
    title: "Direct Collaboration & vCard (.vcf) Export",
    category: "Accessibility & Mobile",
    description: "Download verified electronic business card (.vcf) or transmit a direct engineering inquiry.",
    icon: "Mail",
    isUnlimited: true,
    status: "Active"
  }
];

/**
 * Public repository, release and documentation metadata used by the
 * Documentation & Release Hub section and the footer.
 */
export const REPOSITORY = {
  owner: "Ahmedbakr78",
  name: "ahmed-khaled-technical-operations-portfolio",
  url: "https://github.com/Ahmedbakr78/ahmed-khaled-technical-operations-portfolio",
  pagesUrl: "https://ahmed-khaled-technical-operations-portfolio.pages.dev",
  version: "1.0.0",
  releaseUrl:
    "https://github.com/Ahmedbakr78/ahmed-khaled-technical-operations-portfolio/releases/tag/v1.0.0",
  license: "GNU AGPL-3.0",
  deployedOn: "Cloudflare Pages",
} as const;

export interface DocumentationLink {
  title: string;
  description: string;
  path: string;
  tag: string;
  icon: string;
}

export const DOCUMENTATION_LINKS: DocumentationLink[] = [
  {
    title: "README",
    description:
      "Executive overview, professional profile, feature matrix, architecture diagrams, local development and deployment guide.",
    path: `${REPOSITORY.url}#readme`,
    tag: "Start here",
    icon: "BookOpen",
  },
  {
    title: "Architecture Whitepaper",
    description:
      "Deep-dive C4-style system context, component map, state model, rendering pipeline, audio graph and delivery workflow.",
    path: `${REPOSITORY.url}/blob/main/ARCHITECTURE.md`,
    tag: "System design",
    icon: "Workflow",
  },
  {
    title: "Deployment Guide",
    description:
      "Cloudflare Pages setup, Wrangler commands, cache and security headers, rollback strategy and troubleshooting.",
    path: `${REPOSITORY.url}/blob/main/docs/DEPLOYMENT.md`,
    tag: "Operations",
    icon: "Cloud",
  },
  {
    title: "Feature Matrix",
    description:
      "All 24 product capabilities mapped to the components, data sources and quality checks that support them.",
    path: `${REPOSITORY.url}/blob/main/docs/FEATURES.md`,
    tag: "Product",
    icon: "Layers",
  },
  {
    title: "Testing & QA",
    description:
      "Unit test inventory, manual QA matrix, browser support, performance budgets and release verification checklist.",
    path: `${REPOSITORY.url}/blob/main/docs/TESTING.md`,
    tag: "Quality",
    icon: "ShieldCheck",
  },
  {
    title: "Security & Privacy",
    description:
      "Client-side data boundaries, responsible disclosure policy, dependency hygiene and Cloudflare security controls.",
    path: `${REPOSITORY.url}/blob/main/SECURITY.md`,
    tag: "Trust",
    icon: "Lock",
  },
];

export interface ReleaseItem {
  version: string;
  date: string;
  name: string;
  summary: string;
  highlights: string[];
  url: string;
}

export const RELEASE_HISTORY: ReleaseItem[] = [
  {
    version: "v1.0.0",
    date: "26 October 2026",
    name: "Foundation Release",
    summary:
      "First public release of the Ahmed Khaled technical operations portfolio, documentation system and Cloudflare Pages deployment.",
    highlights: [
      "React 19 + TypeScript 7 + Vite 8 single-page portfolio",
      "Project Lifecycle & Operations Simulator with live QC audit",
      "84-sound procedural ambient studio powered by the Web Audio API",
      "Autonomous Three.js background with five rendering presets",
      "Global command palette, ATS resume, vCard export and 24 product features",
      "Long-form documentation, Mermaid diagrams and automated CI quality gate",
    ],
    url: REPOSITORY.releaseUrl,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What roles is Ahmed Khaled available for?",
    answer:
      "Ahmed is available for on-site and remote Project Engineer, Technical Operations, Project Coordination, Site Engineering and Project Controls roles. The portfolio is structured around project lifecycle delivery, site supervision, BOQ and cost control, quality assurance and digital workflow automation.",
  },
  {
    question: "Does this website use a backend or a database?",
    answer:
      "No. The portfolio is a static single-page application. Every calculator, simulator, audio engine, filter, theme preference and search interaction runs in the browser. There is no application database, no server-side session and no third-party analytics script.",
  },
  {
    question: "How is the contact form handled?",
    answer:
      "The contact form composes a pre-filled email draft in the visitor's own mail client. No message content is transmitted to or stored by the website. Visitors can also copy the email address or download a vCard directly.",
  },
  {
    question: "Where is the site deployed?",
    answer:
      "The production build is deployed to Cloudflare Pages and served from the global edge network with TLS 1.3, HTTP/3, Brotli compression, immutable asset caching and strict security headers. The repository also documents local and CI deployment workflows.",
  },
  {
    question: "Is the codebase open for review?",
    answer:
      "Yes. The repository is public under the GNU Affero General Public License v3.0. Architecture, deployment, testing, accessibility, performance and security documentation are included so that the implementation can be reviewed and reproduced.",
  },
];
