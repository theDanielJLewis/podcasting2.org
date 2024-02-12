This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the packages with npm, yarn, pnpm, or bun:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then [open http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Open Sans, a custom Google Font.

## Suggesting improvements

Please [report an issue](https://github.com/theDanielJLewis/podcasting2.org/issues) if you find problems in or have suggestions for any specific content or functionality already on Podcasting2.org.

For suggesting new content or features, please [start a discussion](https://github.com/theDanielJLewis/podcasting2.org/discussions).

## Project structure

As a Next.js project, this website relies on a folder-based structure for URL structure. All pages will be generated from a `page.tsx` file and will appear in a folder under `/src/app/` based on its path.

For example, `podcasting2.org/about` is generated from `/src/app/about/page.tsx`.

Currently, all Podcast Namespace information is pulled from `/src/data/podcastNamespaceTags.ts`, while information from apps is fetched from [the Podcast Index repo](https://github.com/Podcastindex-org/web-ui/blob/master/server/data/apps.json).
