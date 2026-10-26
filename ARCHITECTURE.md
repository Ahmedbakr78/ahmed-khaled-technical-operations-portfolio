# Architecture Whitepaper

## Ahmed Khaled — Technical Operations Portfolio

**Version:** 1.0.0  
**Status:** Production  
**Deployment:** Cloudflare Pages  
**Repository:** [Ahmedbakr78/ahmed-khaled-technical-operations-portfolio](https://github.com/Ahmedbakr78/ahmed-khaled-technical-operations-portfolio)

This whitepaper documents how the portfolio is structured as an engineering system. It covers the runtime architecture, component boundaries, state model, rendering and audio pipelines, the project lifecycle simulator, delivery controls, security posture and the decisions that keep the application static, private and reproducible.

---

## 1. Design Goals

The application is intentionally not a generic template. It is a professional engineering artefact with five explicit goals.

| Goal | Design decision | Verification |
|:---|:---|:---|
| Fast first render | Static Vite bundle, no backend, preconnected fonts | Build output and Lighthouse review |
| Privacy by default | No analytics, cookies, remote APIs or session storage | Source review and network inspection |
| Deterministic content | One typed dataset drives every section | TypeScript checks and unit tests |
| Operational credibility | Project lifecycle simulator, QC gates, BOQ flow and RFI workflow | Manual QA matrix |
| Reproducible delivery | Documented build, CI quality gate and Cloudflare deployment | CI workflow and deployment guide |

### Non-goals

- Server-side authentication or private dashboards.
- Storing visitor messages in a database.
- Tracking, advertising or behavioural analytics.
- Multi-tenant content management.
- Replacing a full project controls platform such as Primavera or MS Project.

---

## 2. System Context

```mermaid
C4Context
    title System context — Ahmed Khaled portfolio

    Person(visitor, "Recruiter / Client", "Reviews experience, projects, credentials and engineering approach")
    Person(engineer, "Engineer / Reviewer", "Inspects architecture, source code, tests and deployment model")

    System(portfolio, "Portfolio SPA", "React 19 static application served from Cloudflare Pages")

    System_Ext(github, "GitHub", "Source, issues, releases and documentation")
    System_Ext(cloudflare, "Cloudflare Pages", "Global edge delivery, TLS and security headers")
    System_Ext(mail, "Visitor mail client", "Receives the pre-filled contact draft")
    System_Ext(fonts, "Google Fonts", "Bodoni Moda, Plus Jakarta Sans and JetBrains Mono")

    Rel(visitor, portfolio, "Browses sections, runs simulator, downloads resume and vCard")
    Rel(engineer, github, "Reviews code, docs, tests and release notes")
    Rel(portfolio, cloudflare, "Deployed as an immutable static bundle")
    Rel(portfolio, fonts, "Loads typography with preconnect")
    Rel(portfolio, mail, "Opens a mailto draft; no message is stored")
    Rel(visitor, github, "Optionally stars or opens an issue")
```

The portfolio has no application server. The only runtime dependencies are the static host, the visitor's browser, Google Fonts and the visitor's mail client.

---

## 3. Container and Component Architecture

```mermaid
flowchart TB
    subgraph Browser["Visitor browser"]
        direction TB
        HTML["index.html<br/>SEO · JSON-LD · manifest · noscript"]
        App["App.tsx<br/>theme · background · modal orchestration · scrollspy"]

        subgraph Sections["Portfolio sections"]
            Hero["HeroSection"]
            About["AboutSection"]
            Experience["ExperienceTimeline"]
            Projects["ProjectsSection"]
            Simulator["PipelineSimulator"]
            Certs["CertificationsSection"]
            Skills["SkillsSection"]
            Articles["ArticlesSection"]
            Docs["DocumentationSection"]
            Contact["ContactSection"]
            Footer["Footer"]
        end

        subgraph Overlays["Overlay surfaces"]
            Nav["Navbar + mobile slidebar"]
            Dock["BottomDock"]
            Controls["AccountControlsModal"]
            Resume["ResumeModal"]
            Vibe["ProjectVibeModal"]
            Palette["CommandPalette"]
        end

        subgraph Engines["Client-side engines"]
            Three["ThreeBackground<br/>WebGL / Three.js"]
            Audio["vibeAudioEngine<br/>Web Audio API"]
            Logic["portfolioLogic<br/>filters · metrics · formatting"]
            Data["portfolioData<br/>single typed dataset"]
        end

        subgraph Persistence["Local persistence"]
            LS["localStorage<br/>theme · background · silent mode"]
            SW["Service worker<br/>asset cache · offline shell"]
        end
    end

    HTML --> App
    App --> Sections
    App --> Overlays
    App --> Three
    App --> Audio
    Sections --> Data
    Sections --> Logic
    Overlays --> Data
    Overlays --> Audio
    App --> LS
    HTML --> SW
```

### Component responsibilities

| Component | Responsibility | State ownership |
|:---|:---|:---|
| `App.tsx` | Global theme, background style, silent mode, modal routing, scrollspy, audio mix | Global UI state |
| `Navbar.tsx` | Desktop pill navigation, mobile slidebar, Dynamic Island audio controller | Local open/scroll state |
| `HeroSection.tsx` | Identity, availability, direct channels, key metrics | None |
| `AboutSection.tsx` | Engineering philosophy, competencies, workflow blueprints, training and roadmap | Active blueprint tab |
| `ExperienceTimeline.tsx` | Professional experience and achievements | None |
| `ProjectsSection.tsx` | Deliverable cards, filtering, search and project blueprint modal | Filter and search |
| `PipelineSimulator.tsx` | Five-stage lifecycle simulation, QC audit, telemetry and audit query | Simulation state |
| `CertificationsSection.tsx` | Credential explorer and category filters | Filter state |
| `SkillsSection.tsx` | Six-domain competency matrix | None |
| `ArticlesSection.tsx` | Long-form engineering articles and reader modal | Selected article |
| `DocumentationSection.tsx` | Repository, release, documentation and recruiter FAQ hub | Open FAQ |
| `ContactSection.tsx` | Contact channels, vCard and mailto draft | Form state |
| `ThreeBackground.tsx` | Autonomous WebGL background with rendering presets | Animation state |
| `CommandPalette.tsx` | Keyboard-first search and actions | Query state |
| `vibeAudioEngine.ts` | Procedural 84-sound mixer | Audio graph state |

---

## 4. Runtime Data Flow

```mermaid
sequenceDiagram
    autonumber
    participant U as Visitor
    participant A as App.tsx
    participant S as Section component
    participant D as portfolioData
    participant L as portfolioLogic
    participant P as localStorage
    participant W as Web APIs

    U->>A: Open the site
    A->>P: Read theme, background style, silent mode
    P-->>A: Persisted preferences
    A->>W: Request WebGL and Web Audio availability
    A->>S: Render sections with typed data
    S->>D: Read profile, projects, credentials, articles, docs
    U->>S: Search or filter
    S->>L: filterProjects / filterCertifications
    L-->>S: Deterministic result set
    U->>A: Toggle theme
    A->>P: Persist theme
    A-->>U: Update DOM classes and CSS variables
    U->>S: Open article or project blueprint
    S-->>U: Render modal from the same dataset
    U->>S: Submit contact form
    S->>W: Open mailto draft in the visitor's client
```

There is no remote data fetch after the initial asset load. Content changes are made in `src/data/portfolioData.ts`, checked by TypeScript and shipped in the next build.

---

## 5. State Model

```mermaid
stateDiagram-v2
    [*] --> Boot
    Boot --> ThemeHydration: read localStorage
    ThemeHydration --> Idle
    Idle --> ThemeChanged: toggle theme
    Idle --> BackgroundChanged: choose 3D preset
    Idle --> SilentMode: toggle reduced navigation motion
    Idle --> PaletteOpen: Ctrl/Cmd + K
    PaletteOpen --> Idle: close or execute command
    Idle --> ControlsOpen: open control center
    ControlsOpen --> Idle: close
    Idle --> ResumeOpen: open resume
    ResumeOpen --> Idle: close or print
    Idle --> VibeOpen: open sound studio
    VibeOpen --> Idle: close
    Idle --> ArticleOpen: select article
    ArticleOpen --> Idle: close
    Idle --> SimulatorRunning: scroll to simulator
    SimulatorRunning --> SimulatorPaused: pause
    SimulatorPaused --> SimulatorRunning: resume
    ThemeChanged --> Idle
    BackgroundChanged --> Idle
    SilentMode --> Idle
```

### Persisted keys

| Key | Type | Purpose |
|:---|:---|:---|
| `portfolio-theme` | `"dark" \| "light"` | Onyx Dark or Minimal White |
| `portfolio-bg-style` | `"constellation" \| "wave" \| "grid" \| "polyhedra" \| "minimal"` | Three.js rendering preset |
| `portfolio-silent-mode` | `"true" \| "false"` | Instant navigation instead of smooth scrolling |

No personal data, contact form content or audio state is persisted.

---

## 6. Section and Navigation Map

```mermaid
flowchart LR
    Hero["01 Hero"] --> About["02 About"]
    About --> Experience["03 Experience"]
    Experience --> Projects["04 Projects"]
    Projects --> Simulator["05 Simulator"]
    Simulator --> Certs["06 Certifications"]
    Certs --> Skills["07 Skills"]
    Skills --> Articles["08 Articles"]
    Articles --> Docs["09 Documentation & Releases"]
    Docs --> Contact["10 Contact"]
    Contact --> Footer["Footer"]
```

The navbar, bottom dock and scrollspy share the same section identifiers. The command palette can jump directly to any registered section, open the simulator, download the resume or switch theme.

---

## 7. Project Lifecycle Simulator

The simulator is a deterministic, client-side state machine that demonstrates how a project moves from scope definition to handover.

```mermaid
stateDiagram-v2
    [*] --> ScopeAndWBS
    ScopeAndWBS --> SiteSurveyAndBOQ
    SiteSurveyAndBOQ --> SiteExecution
    SiteExecution --> QualityAndRFI
    QualityAndRFI --> ClientHandover
    ClientHandover --> ScopeAndWBS: next cycle
    QualityAndRFI --> QCAudit: simulate audit
    QCAudit --> QualityAndRFI: audit complete
```

| Stage | Displayed controls | Engineering meaning |
|:---|:---|:---|
| 1. Scope & WBS | Completion, deliverables, schedule | Scope baseline and work packages |
| 2. Site Survey & BOQ | Quantity take-offs, cost baseline | Measurement and pricing |
| 3. Site Execution | Daily logs, subcontractor alignment | Field coordination |
| 4. Quality & RFI | QC score, RFI approvals | Inspection and technical closure |
| 5. Client Handover | 100% completion, sign-off | Closeout and acceptance |

The simulator uses local timers and state only. It does not call an API, write to storage or claim to be a live project system.

---

## 8. Three.js Rendering Pipeline

```mermaid
flowchart TD
    Mount["ThreeBackground mounts"] --> Detect["Detect WebGL capability"]
    Detect -->|Supported| Scene["Create scene, camera, renderer"]
    Detect -->|Unsupported| Fallback["Static CSS gradient fallback"]
    Scene --> Geometry["Build geometry preset"]
    Geometry --> Material["Monochrome line / point material"]
    Material --> Animate["requestAnimationFrame loop"]
    Animate --> Resize["Resize observer and pixel-ratio clamp"]
    Resize --> Animate
    Animate --> Visibility["Pause or reduce work when hidden"]
    Visibility --> Cleanup["Dispose geometry, material, renderer on unmount"]
```

### Rendering controls

- Five presets: constellation, flowing wave, architectural grid, wireframe polyhedra and minimal.
- Monochrome palette to preserve the editorial design language.
- Device pixel ratio is clamped to protect high-DPI mobile devices.
- Animation pauses when the document is hidden.
- Geometry and materials are disposed on unmount to prevent GPU memory leaks.

---

## 9. Web Audio Engine

```mermaid
flowchart LR
    User["User gesture"] --> Init["Create AudioContext"]
    Init --> Graph["Per-sound oscillator / noise source"]
    Graph --> Gain["Per-sound gain node"]
    Gain --> Master["Master gain"]
    Master --> Compressor["Dynamics compressor"]
    Compressor --> Destination["Audio destination"]
    Master --> Analyser["Analyser node"]
    Analyser --> Visualizer["Dynamic Island equalizer"]
```

### Audio design rules

1. Audio starts only after an explicit user gesture, in line with browser autoplay policies.
2. Each of the 84 sounds is generated procedurally; no external audio assets are downloaded.
3. Sounds are mixed through independent gain nodes so multiple layers can coexist.
4. A master gain and compressor protect the listener from clipping.
5. The engine can stop all nodes, clear the mix and rebuild a preset without reloading the page.
6. Audio state is session-only and is not persisted.

---

## 10. Command Palette Interaction

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant K as Keyboard listener
    participant P as CommandPalette
    participant A as App
    participant S as Target section

    U->>K: Ctrl/Cmd + K
    K->>P: Open palette
    U->>P: Type a query
    P->>P: Filter projects, credentials and articles
    U->>P: Select a result
    P->>A: Execute action or navigate
    A->>S: scrollIntoView
    P->>P: Close palette
```

The palette is an accessibility and productivity feature, not a hidden router. All destinations are real sections or modal actions.

---

## 11. SEO, PWA and Edge Delivery

```mermaid
flowchart TD
    Commit["Commit to main"] --> Build["Vite production build"]
    Build --> Dist["dist/ static bundle"]
    Dist --> Deploy["Wrangler Pages deploy"]
    Deploy --> Edge["Cloudflare global edge"]
    Edge --> HTML["index.html with canonical, OG, Twitter and JSON-LD"]
    Edge --> Assets["Hashed JS / CSS with immutable cache"]
    Edge --> Headers["Security and cache headers from _headers"]
    Edge --> SW["Service worker registration in production"]
    SW --> Offline["Cached shell and previously visited assets"]
```

### Search and social metadata

- Canonical URL and Open Graph URL.
- 1200x630 social image with descriptive alt text.
- Twitter `summary_large_image` card.
- JSON-LD graph for `Person`, `WebSite` and `ProfilePage`.
- `robots.txt` and a single-URL `sitemap.xml`.
- Web app manifest with 192px and 512px icons plus shortcuts.

### Service worker policy

- Navigation requests use network-first with an offline shell fallback.
- Same-origin static assets use cache-first after the first fetch.
- The cache version is explicit; activation removes stale caches.
- Cross-origin requests are not intercepted.
- The service worker is registered only in production builds.

---

## 12. Security and Privacy Model

```mermaid
flowchart TB
    Visitor["Visitor browser"] --> Static["Static HTML / JS / CSS"]
    Static --> Local["localStorage preferences"]
    Static --> Mail["mailto draft"]
    Static -.->|No requests| API["No application API"]
    Static -.->|No scripts| Analytics["No analytics"]
    Static -.->|No cookies| Cookies["No tracking cookies"]
    Edge["Cloudflare edge"] --> Headers["CSP · HSTS-ready · nosniff · frame deny · referrer policy"]
    Headers --> Static
```

### Trust boundaries

| Boundary | Control |
|:---|:---|
| Browser to static host | HTTPS, TLS 1.3, HTTP/3, strict headers |
| Application to third parties | Only Google Fonts is loaded; no analytics or API calls |
| Contact flow | The browser opens the visitor's mail client; the site never receives the message |
| Local persistence | Preferences only; no personal data |
| Supply chain | Lockfile, Dependabot, CI, pinned GitHub Actions |

The contact email shown in the portfolio is a public contact channel, not a secret. No credentials, API keys or private tokens are required to build or run the application.

---

## 13. Testing and Quality Strategy

```mermaid
flowchart LR
    Edit["Source edit"] --> Typecheck["tsc --noEmit"]
    Typecheck --> Unit["10 deterministic unit tests"]
    Unit --> Build["Vite production build"]
    Build --> Manual["Manual QA matrix"]
    Manual --> Deploy["Cloudflare Pages deployment"]
    Deploy --> Smoke["Live smoke check"]
```

### Automated checks

- TypeScript strict compilation.
- Ten unit tests covering filters, statistics, credential formatting, scrollbar metrics, schema generation and motion variants.
- Production build must succeed.
- CI uploads the build artifact for inspection.

### Manual checks

- Both themes at desktop and mobile widths.
- Keyboard navigation and command palette.
- Simulator controls and QC audit.
- Audio play, pause, preset and volume.
- 3D preset switching and reduced-motion behaviour.
- Contact draft, vCard download and resume print.
- SEO metadata and social preview.
- Offline shell after first load.

Detailed procedures are in [Testing](docs/TESTING.md).

---

## 14. Deployment Topology

```mermaid
flowchart TB
    Dev["Developer workstation"] -->|git push| GitHub["GitHub repository"]
    GitHub -->|CI: typecheck · test · build| Artifact["Verified dist artifact"]
    Artifact -->|wrangler pages deploy| Pages["Cloudflare Pages project"]
    Pages --> PoP1["Edge PoP: Europe"]
    Pages --> PoP2["Edge PoP: Middle East / Africa"]
    Pages --> PoP3["Edge PoP: Americas"]
    Pages --> PoP4["Edge PoP: Asia Pacific"]
    PoP1 --> Visitor["Visitor"]
    PoP2 --> Visitor
    PoP3 --> Visitor
    PoP4 --> Visitor
```

The production URL is:

**https://ahmed-khaled-technical-operations-portfolio.pages.dev**

Cloudflare Pages enforces the project name format: lowercase letters, numbers and hyphens. The requested display title "Ahmed Khaled — Technical Operations Portfolio" is therefore represented by the slug above. The human-readable title is used in the page `<title>`, Open Graph metadata and repository description.

---

## 15. Architecture Decision Records

| ID | Decision | Rationale | Trade-off |
|:---|:---|:---|:---|
| ADR-001 | Static SPA over SSR | Zero backend, low operating cost, strong privacy | No server-side personalisation |
| ADR-002 | Single typed data module | One source of truth, easy review, deterministic rendering | Content edits require a rebuild |
| ADR-003 | React 19 + Vite 8 | Fast iteration and modern concurrent rendering | Large client bundle requires monitoring |
| ADR-004 | Tailwind CSS v4 | Consistent design tokens and rapid UI composition | Utility-heavy markup |
| ADR-005 | Three.js background | Distinctive visual identity without image assets | GPU cost on low-end devices |
| ADR-006 | Procedural Web Audio | 84 sounds with no audio downloads | Audio quality is intentionally synthetic |
| ADR-007 | localStorage for preferences | Simple, private, no account system | Preferences do not follow the visitor across devices |
| ADR-008 | Cloudflare Pages | Global edge, free TLS, simple immutable deploys | Platform-specific deployment configuration |
| ADR-009 | No analytics | Privacy and trust | No built-in visitor behaviour metrics |
| ADR-010 | Mailto contact flow | No server, no stored messages | Depends on the visitor having a mail client |

---

## 16. Extending the System

### Adding a section

1. Add the component under `src/components/`.
2. Add the section identifier to the scrollspy list in `App.tsx`.
3. Add the navigation item to `Navbar.tsx` and optionally `BottomDock.tsx`.
4. Add a command palette action if the section is a primary destination.
5. Add the section to the README feature map and `docs/FEATURES.md`.
6. Run `npm run verify`.
7. Update the changelog and release notes.

### Adding a project, credential or article

1. Edit the typed collection in `src/data/portfolioData.ts`.
2. Keep identifiers unique and stable.
3. Add tags that are useful for search.
4. Verify the card layout at 320px, 768px and 1440px.
5. Run the quality gate.

### Adding a new 3D preset

1. Extend `BackgroundStyle` in `ThreeBackground.tsx`.
2. Add geometry and material setup for the preset.
3. Dispose all GPU resources on switch and unmount.
4. Add the option to `AccountControlsModal.tsx`.
5. Verify frame time and memory on a mobile viewport.

---

## 17. Known Constraints and Future Work

| Constraint | Current state | Planned direction |
|:---|:---|:---|
| Client bundle size | About 1.1 MB raw / 299 KB gzip | Route-level code splitting and deferred modal chunks |
| Automated browser tests | Manual QA matrix | Add Playwright smoke tests for core journeys |
| Contact form | Mailto draft | Optional serverless endpoint with spam protection if required |
| Content workflow | Typed source file | Optional MDX or CMS adapter without changing the UI contract |
| Analytics | None by design | Privacy-preserving aggregate metrics only if explicitly requested |
| Accessibility audit | Manual and keyboard review | Automated axe checks and formal WCAG 2.2 AA review |

---

## 18. Related Documentation

- [README](README.md) — executive overview and complete repository guide
- [Deployment](docs/DEPLOYMENT.md) — Cloudflare Pages operations
- [Features](docs/FEATURES.md) — 24-product capability matrix
- [Design System](docs/DESIGN_SYSTEM.md) — visual language and components
- [Testing](docs/TESTING.md) — automated and manual quality gates
- [Accessibility](docs/ACCESSIBILITY.md) — keyboard, motion and contrast standards
- [Performance](docs/PERFORMANCE.md) — budgets and optimization roadmap
- [SEO](docs/SEO.md) — metadata, structured data and social previews
- [Security](SECURITY.md) — trust model and disclosure policy
- [Changelog](CHANGELOG.md) — release history
