# Frequently Asked Questions

## Recruiters and Clients

### What roles is Ahmed Khaled available for?

On-site and remote Project Engineer, Technical Operations, Project Coordination, Site Engineering and Project Controls roles. The portfolio focuses on project lifecycle delivery, site supervision, BOQ and cost control, quality assurance and digital workflow automation.

### Where is Ahmed based?

Egypt. The portfolio is open to on-site and remote opportunities.

### What is the 100% completion rate?

It refers to the owner's independent technical deliverables, which were taken from scope definition through to client sign-off. It is a track-record statement, not a claim about every project in the construction industry.

### Can I download a resume?

Yes. Use the Resume action in the hero, navbar, bottom dock or command palette. The resume modal is print-friendly and designed for A4 output.

### How do I contact Ahmed?

Use the contact section to open a pre-filled email draft, copy the email address or download a vCard. The website does not store messages.

### Is the LinkedIn profile current?

The LinkedIn link is the public professional channel referenced by the portfolio. Verify the current profile before relying on specific dates or credentials.

---

## Technical Reviewers

### Is this a static site?

Yes. It is a React single-page application built with Vite and deployed as static files. There is no application server or database.

### Does the site use analytics?

No. There are no analytics scripts, advertising pixels or tracking cookies. Preferences are stored only in `localStorage`.

### Why is the contact form a mailto draft?

A mailto draft keeps the architecture serverless and avoids storing personal data. The trade-off is that it depends on the visitor having a configured mail client.

### What happens if WebGL is unavailable?

The site remains fully usable. The 3D background is a progressive enhancement and falls back to a static visual treatment.

### What happens if audio is blocked?

Browsers require a user gesture before audio can start. The audio studio starts only after Play is pressed.

### Is the service worker safe?

It is a small, same-origin cache with network-first navigation. It does not intercept cross-origin requests. The cache version is explicit so releases can replace stale caches.

### Why is the bundle relatively large?

The initial release ships React, Motion, Three.js, icons and the complete application in one bundle. Code splitting is the next performance milestone.

### How is the site deployed?

Cloudflare Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for the full operational guide.

### Can I reuse the code?

The project is licensed under the GNU Affero General Public License v3.0. Review the license before reuse.

### How do I report a security issue?

Follow the responsible disclosure process in [SECURITY.md](../SECURITY.md). Do not open a public issue for a vulnerability.

---

## Content and Documentation

### Where is the architecture documented?

See [ARCHITECTURE.md](../ARCHITECTURE.md) for system context, component architecture, state, rendering, audio, deployment and decision records.

### Where are the features documented?

See [FEATURES.md](FEATURES.md) for the 24-feature matrix and interaction model.

### Where is the release history?

See [CHANGELOG.md](../CHANGELOG.md) and the GitHub Releases page.

### How do I run the project locally?

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

### How do I verify the project?

```bash
npm run verify
```

This runs TypeScript, the unit tests and the production build.
