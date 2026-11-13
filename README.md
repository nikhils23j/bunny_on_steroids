# Nikhil Jain — portfolio

A responsive portfolio for [Nikhil Jain](https://github.com/nikhils23j), built with React, TypeScript and Vite. The homepage offers a project glimpse and a GitHub preview; `/projects` has the full catalog, `/about` adds personal and work context, and `/blogs` holds technical writing.

## Local development

```bash
npm install
npm run dev
npm run build
```

The site uses transform and opacity transitions for entrance and hover motion, and respects `prefers-reduced-motion`. Project filters run locally. The GitHub card reads the public GitHub Users API for the current repository count; the rest of the card remains useful if the API is unavailable.

## Add a blog post

Add one entry to `src/blogs.ts` with a unique `slug`, title, summary, image and `blocks`. The blog index and article route render from that data automatically. Add its URL to `public/sitemap.xml` before deploying. Keep claims linked to the repository and label local or synthetic measurements clearly.

## Content and visual sources

- Experience, education, contact details and Sniff.in claims were checked against Nikhil's master résumé and evidence library on 13 November 2026. The résumé download is the one-page SDE variant from that library.
- Each project card links to its public repository. The descriptions and result labels were checked against the repositories' READMEs and saved evaluation results. Scope notes distinguish local prototypes, synthetic data, simulations and live k3s testing.
- Most project images are optimized WebP copies of charts or screenshots generated from their repositories.
- The Sniff.in project card uses Nikhil's supplied festive illustration, with the existing public app icon as a corner logo. Its main card link opens the live website and a separate link opens the source repository.
- The portraits and graduation image came from Nikhil's supplied `/Users/nikhil/Downloads/webimages` folder and were converted to WebP without metadata.
- The Samsung team photo is an optimized copy of `public/lovable-uploads/22.jpg` from the original version of this GitHub repository, as requested by Nikhil.
- The Squarepoint team outing photo came from Nikhil's supplied `IMG_9929.HEIC` and was resized and converted to WebP without metadata.
- The technical posts are based on the linked repositories' READMEs and recorded results. "What I am learning next" describes questions to explore, not completed work.

The portfolio intentionally does not claim production deployment for local experiments or independent implementation of pair-programmed projects. See each repository for methodology and limitations.
