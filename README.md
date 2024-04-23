This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**IMPORTANT: Please make changes only in the `dev` branch, even in your own fork.**

After you have forked and cloned this repository to your own computer, here's how to get things running locally for testing and contributing.

Step 1: Install a JavaScript package manager: NPM is the most universal, but you can also opt for Yarn, PNPM, or Bun if you know why you want them.

Step 2: Install all the dependencies this project requires:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Step 3: start the localhost development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Step 4: [open http://localhost:3000](http://localhost:3000) in your browser to see the site running on your computer.

Step 5: Any edits you make will refresh and show in the browser almost immediately, and this localhost dev environment compiles each page as you load it (and thus the slower load times).

### Primer on React with Next.js

As a Next.js project using the modern App Router, URL structure is folder-based within the `/src/app` folder. Every static page will have a `page.tsx` file within a subfolder of `/src/app` that matches the URL path. For example, the source for `podcasting2.org/about` is `/src/app/about/page.tsx`.

Within each `page.tsx` is a bunch of React code, but the important part is inside the `return`. Here, the contents will look mostly like normal HTML, but using `className` instead of `class`. Technically, each "HTML tag" is actually a React component. And when you see a capitalized component, like `<HeroHeader>`, that is embedded from either a separate package or from the `/src/components` folder.

We use [Tailwind](https://tailwindcss.com/) for CSS styling. But if you're not comfortable with any of that, please make it clear in your pull request that you did _not_ include any styling, and we'll fix it.

The more complicated parts are the dynamically generated pages. Those are in a folder with square brackets. For example, `/src/app/apps/[slug]/page.tsx` replaces `[slug]` and dynamically populates the content from the relevant file in `/src/data`.

## Suggesting improvements

Please [report an issue](https://github.com/theDanielJLewis/podcasting2.org/issues) if you find problems in or have suggestions for any specific content or functionality already on Podcasting2.org.

For suggesting new content or features, please [start a discussion](https://github.com/theDanielJLewis/podcasting2.org/discussions).

## Data sources

Currently, all Podcast Namespace information is pulled from `/src/data/podcastNamespaceTags.ts`. That file is essentially JSON format, but put into a JavaScript constant with TypeScript to help with validation.

Currently, all information about apps is fetched from [the Podcast Index repo](https://github.com/Podcastindex-org/web-ui/blob/master/server/data/apps.json) and is cached for 1 hour. This data will eventually move to come from canipodcast.com.

## Maintainers

Podcasting2.org is led and maintained by Daniel J. Lewis and James Cridland, while Podcasting 2.0 as an innovation and much larger brand is led by Adam Curry and Dave Jones and maintained and built upon by a growing community of podcasters, developers, hosting providers, and even some advertisers and audience members.
