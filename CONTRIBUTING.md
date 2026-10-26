# Contributing

## Engineering Standards for the Portfolio

Thank you for reviewing the project. This codebase follows strict standards to keep the experience deterministic, type-safe, accessible and privacy-preserving.

---

## 1. Core Principles

1. **Privacy first.** No third-party analytics, advertising pixels, tracking cookies or remote application APIs.
2. **Local-first behaviour.** Calculators, simulators, audio, search and preferences run in the browser.
3. **Strict type safety.** TypeScript must pass `tsc --noEmit` without errors.
4. **Deterministic content.** Public content is sourced from the typed dataset in `src/data/portfolioData.ts`.
5. **Tested logic.** Business logic and calculation changes require unit tests.
6. **Accessible interaction.** Every control must be keyboard reachable and visibly focused.
7. **Professional tone.** No emojis in code, documentation, commit messages or release notes.
8. **Documented change.** User-facing changes update the README, changelog and relevant docs.

---

## 2. Prerequisites

| Tool | Version |
|:---|:---|
| Node.js | 22.x LTS |
| npm | 10.x or newer |
| Git | 2.30 or newer |

The repository includes `.nvmrc` for Node 22 and `package-lock.json` for reproducible installs.

---

## 3. Local Setup

```bash
git clone https://github.com/Ahmedbakr78/ahmed-khaled-technical-operations-portfolio.git
cd ahmed-khaled-technical-operations-portfolio
npm ci
npm run dev
```

The development server runs at `http://localhost:3000`.

---

## 4. Quality Gate

Run the full gate before opening a pull request:

```bash
npm run lint
npm test
npm run build
```

Or:

```bash
npm run verify
```

The gate must pass with zero errors.

---

## 5. Branching and Commits

| Branch | Purpose |
|:---|:---|
| `main` | Production-ready history |
| `feat/<name>` | New feature |
| `fix/<name>` | Defect fix |
| `docs/<name>` | Documentation |
| `perf/<name>` | Performance work |
| `a11y/<name>` | Accessibility work |

Use conventional commit titles:

```text
feat(simulator): add risk review stage
fix(contact): preserve draft state after mailto
docs(deployment): document rollback procedure
test(logic): cover BOQ variance calculation
perf(bundle): defer the audio studio
a11y(nav): improve focus visibility
```

Do not include emojis in commit messages.

---

## 6. Pull Request Checklist

- [ ] The change has a clear scope and rationale.
- [ ] `npm run lint` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] Both themes were checked.
- [ ] Desktop and mobile viewports were checked.
- [ ] Keyboard navigation was checked for new controls.
- [ ] No tracking, remote data calls or new secrets were introduced.
- [ ] Documentation and changelog were updated when needed.
- [ ] No emojis were added to code or documentation.

---

## 7. Content Changes

To add a project, credential or article:

1. Open `src/data/portfolioData.ts`.
2. Add the typed entry with a unique, stable identifier.
3. Keep the copy specific and evidence-oriented.
4. Verify the card and modal layouts at narrow and wide widths.
5. Run the quality gate.

Do not add credentials, metrics or client names that cannot be verified.

---

## 8. Documentation Changes

Documentation lives in the repository root and `docs/`.

- Use Markdown with clear headings.
- Use Mermaid for diagrams.
- Keep tables readable on GitHub.
- Link to the canonical live URL where relevant.
- Do not add marketing claims that are not implemented.

---

## 9. Security and Privacy

- Never commit secrets, tokens or private keys.
- Do not add analytics or tracking without an explicit architectural decision.
- Do not add a remote API call that transmits personal data.
- Report vulnerabilities privately through [SECURITY.md](SECURITY.md).

---

## 10. Code of Conduct

Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Be respectful, specific and constructive.

---

## 11. License

Contributions are accepted under the GNU Affero General Public License v3.0. By contributing, you agree that your work may be distributed under the same license.
