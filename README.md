# MALmetrics - Official Documentation

This repository contains the definitive technical documentation, mathematical models, and user manuals for the **MALmetrics** ecosystem. It serves as the primary knowledge base for understanding the architecture, component hierarchy, and data ingestion processes of the main React application.

**Live Documentation:** [https://Afard-max.github.io/malmetrics-docs/](https://Afard-max.github.io/malmetrics-docs/)
**Primary Application Repository:** [MALmetrics React App](https://github.com/Afard-max/malmetrics)

---

## 🏛️ Documentation Architecture

This knowledge base is engineered using [Docusaurus 3](https://docusaurus.io/), a modern static site generator (SSG) optimized for Markdown-centric documentation.

- **Core Engine:** React 18 & Node.js
- **Content Modeling:** MDX (Markdown + JSX), allowing the embedding of interactive React components directly within text files.
- **Routing:** Deterministic file-system-based routing.
- **Search Integration:** Configured for algorithmic indexing and fast retrieval of technical parameters.

---

## 📂 Structural Topology

The repository follows a strict hierarchical directory structure for content management, accurately reflecting the local development environment:

```text
/
├── .docusaurus/         # Internal Docusaurus build and cache files.
├── blog/                # Directory for blog posts and version changelogs.
├── build/               # Output directory for compiled static production artifacts.
├── docs/                # Core Markdown documentation files (e.g., obtener-client-id.md).
├── src/
│   ├── components/      # Custom React components (e.g., HomepageFeatures).
│   ├── css/             # Global stylesheets and theme variables (custom.css).
│   └── pages/           # Static React routing pages (e.g., index.js).
├── static/              # Direct-access static assets (images, .nojekyll).
├── docusaurus.config.js # Global site configuration and plugin matrix.
└── sidebars.js          # Algorithmic definition of the documentation sidebar menu.
```
