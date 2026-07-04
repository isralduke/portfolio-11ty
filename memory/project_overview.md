---
name: project-overview
description: "High-level overview of the portfolio-11ty repo — stack, structure, and active vs. stub content"
metadata: 
  node_type: memory
  type: project
  originSessionId: a4a52b44-867b-4e17-96e2-d1f424dc271f
---

Isral Duke's personal portfolio site at isralduke.com. Built with Eleventy v2.0.1 + Nunjucks, Bootstrap 5.3.2, SCSS → PostCSS. Output goes to `docs/` for GitHub Pages deployment.

**Key directories**:
- `src/_data/` — JSON files for all resume-type content (experience, skills, certs, talks, apps, references)
- `src/_layouts/` — Nunjucks page layouts (base, home, project, resume, page)
- `src/_includes/` — Reusable partials and SVG icons
- `src/product-design/` — Active markdown case studies collected via "productDesign" tag
- `src/brand-design/` — 44+ stub directories, mostly empty, scaffolded for future content
- `src/styles/` — SCSS source (custom `--id-` CSS variables + Bootstrap utilities)

**Build**: `npm start` for dev (hot reload), `npm run build` for production (Sass → Eleventy → PostCSS minify).

**Accessibility**: Major focus — semantic HTML, ARIA, skip-to-content, DHS Trusted Tester certified.

**Why:** This is the user's own portfolio — changes should reflect professional quality and accessibility standards.
**How to apply:** When suggesting changes, prioritize semantic HTML, accessibility, and clean design. The brand-design section is a growth area — be ready to help populate it.
