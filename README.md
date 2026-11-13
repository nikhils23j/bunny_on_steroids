# Nikhil Jain — portfolio

A responsive portfolio for [Nikhil Jain](https://github.com/nikhils23j), built with React, TypeScript and Vite. The homepage offers a project glimpse, and its navigation links directly to GitHub; `/projects` has the full catalog, `/about` adds personal and work context, and `/blogs` holds technical writing.

## Local development

```bash
npm install
npm run dev
npm run build
```

The site uses transform and opacity transitions for entrance and hover motion, and respects `prefers-reduced-motion`. The three project domain links jump to their sections.

## Add a blog post

Add one entry to `src/blogs.ts` with a unique `slug`, title, summary, image and `blocks`. The blog index and article route render from that data automatically. Add its URL to `public/sitemap.xml` before deploying. Keep claims linked to the repository and label local or synthetic measurements clearly.

## Publish updates

The live Vercel project is `nikhilj22iitk` in the `sniffin` scope. From this repository, publish a production build with `npx vercel@latest deploy --prod --yes --scope sniffin`. The project does not have GitHub auto-deployment yet: Vercel requires a GitHub login connection on the account before `vercel git connect` can link this repository.

## Content and visual sources

- Experience, education, contact details and Sniff.in claims were checked against Nikhil's master résumé and evidence library on 13 November 2026. The résumé download is the one-page SDE variant from that library.
- Project cards link to their public repositories, except the Sniff.in main card, which links to its deployed website and offers a separate source link. The descriptions and result labels were checked against the repositories' READMEs and saved evaluation results. Scope notes distinguish local prototypes, synthetic data, simulations and live k3s testing.
- Most project images are optimized WebP copies of charts or screenshots generated from their repositories.
- The Sniff.in project card uses Nikhil's supplied festive illustration, with the existing public app icon as a corner logo. Its main card link opens the live website and a separate link opens the source repository.
- The portraits and graduation image came from Nikhil's supplied `/Users/nikhil/Downloads/webimages` folder and were converted to WebP without metadata.
- The Samsung team photo is an optimized copy of `public/lovable-uploads/22.jpg` from the original version of this GitHub repository, as requested by Nikhil.
- The Squarepoint team outing photo came from Nikhil's supplied `IMG_9929.HEIC` and was resized and converted to WebP without metadata.
- The GPU Direct TCP cover is an optimized copy of Nikhil's supplied technical diagram. Its card identifies the shared course prototype and its single hardware testbed.
- The IIT Kanpur minors certificate is an optimized copy of Nikhil's supplied `IMG_7721.heic`. Its three minor titles match the certificate. Course names were supplied by Nikhil; Linux Kernel Programming and the GPU Direct TCP course-project connection were confirmed by him in this chat.
- The technical posts are based on the linked repositories' READMEs and recorded results. "What I am learning next" describes questions to explore, not completed work.

The portfolio intentionally does not claim production deployment for local experiments or independent implementation of pair-programmed projects. See each repository for methodology and limitations.
