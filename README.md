This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

## Creating or editing content

All page content (that's not pulled in remotely) is stored in `.mdx` Markdown files in the `/content` folder. Each MDX file uses Front Matter YAML at the top of the file for extra control and metadata.

MDX files should be named and placed in the `/content` folder or subfolder for their intended access URL. For example, "How to Add Podcast Recommendations with Podroll" is in `/content/docs/guides/how-to-add-podcast-recommendations-with-podroll.mdx` and publicly accessible at `https://podcasting2.org/docs/guides/how-to-add-podcast-recommendations-with-podroll`.

## Suggesting improvements

For issues related only to Podcasting2.org, [report an issue here](https://github.com/theDanielJLewis/podcasting2.org/issues).

For suggesting new content or features, please [start a discussion](https://github.com/theDanielJLewis/podcasting2.org/discussions) or fork this project and submit a pull request!

[Correct app information here](https://github.com/Podcastindex-org/web-ui/blob/master/server/data/apps.json) (this might change in the future), and [discuss the Podcast Namespace here](https://github.com/Podcastindex-org/podcast-namespace/discussions).

## Maintainers

Podcasting2.org (the website) is led and maintained by Daniel J. Lewis and James Cridland, while Podcasting 2.0 as an innovation and much larger "brand" is led by Adam Curry and Dave Jones and maintained and built upon by a growing community of podcasters, developers, hosting providers, and even some advertisers and audience members.
