# Nikhil Jain — portfolio

A responsive portfolio for [Nikhil Jain](https://github.com/nikhils23j), built with React, TypeScript and Vite. The homepage has a short project selection and a section on experience and working style; `/projects` contains the full catalog and fact-checked earlier coursework.

## Local development

```bash
npm install
npm run dev
npm run build
```

The site uses transform and opacity transitions for entrance and hover motion, and respects `prefers-reduced-motion`. Project filters run locally. The GitHub card reads the public GitHub Users API for the current repository count; the rest of the card remains useful if the API is unavailable.

## Content and visual sources

- Experience, education, contact details and Sniff.in claims were checked against Nikhil's master résumé and evidence library on 13 November 2026. The résumé download is the one-page SDE variant from that library.
- Each project card links to its public repository. The descriptions and result labels were checked against the repositories' READMEs and saved evaluation results. Scope notes distinguish local prototypes, synthetic data, simulations and live k3s testing.
- The project images are optimized WebP copies of charts or screenshots generated from those repositories. The Sniff.in card uses its public app icon.
- The portraits and graduation image came from Nikhil's supplied `/Users/nikhil/Downloads/webimages` folder and were converted to WebP without metadata.

The portfolio intentionally does not claim production deployment for local experiments or independent implementation of pair-programmed projects. See each repository for methodology and limitations.
