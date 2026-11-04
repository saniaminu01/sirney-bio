# SIRNEY

A personal Web3 creator website for SIRNEY (@sirserney1): profile, social links, a featured community card (CryptoSquadDAO), and placeholder sections for research, writing, projects and community contributions.

Built with [Arc Studio](https://studio.arc.io)

## Tech stack

- Vite, React, TypeScript
- Tailwind CSS
- Lucide icons

## Editing content

All profile details, links, the community card and the content sections are in `src/data/profile.ts`. To use your own photo, put it in `public/` (for example `public/profile.jpg`) and set `image: '/profile.jpg'` in that file.

## Development

Prerequisites: [Bun](https://bun.sh) (or Node 20+ with npm).

```bash
bun install
bun run dev        # start the dev server
bun run build      # production build into dist/
bun run preview    # preview the production build
bun run check      # lint and typecheck
```

### Environment variables

None.

## Deploy to Vercel

1. Push this project to GitHub (`https://github.com/saniaminu01/sirney-bio`).
2. In Vercel choose **Add New > Project**, import the repository, keep the detected Vite settings, and click **Deploy**.
