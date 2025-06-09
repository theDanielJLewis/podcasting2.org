import { GitHubIcon } from "nextra/icons";
import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  index: {
    title: "Home",
    display: "hidden",
    type: "page",
    theme: {
      toc: false,
      layout: "full",
    },
  },
  documentation: {
    title: "Documentation",
    type: "page",
    href: "/docs",
  },
  apps: {
    title: "Apps",
    type: "page",
    theme: {
      layout: "full",
    },
  },
  "publishing-tools": {
    title: "Publishing Tools",
    type: "page",
    theme: {
      layout: "full",
    },
  },
  podcasters: {
    title: "Podcasting Tools",
    display: "hidden",
    theme: {
      layout: "full",
    },
  },
  docs: {
    title: "Documentation",
    display: "children",
  },
  marketing: {
    title: "Marketing",
    type: "page",
    theme: {
      layout: "full",
    },
  },
  about: {
    title: "About",
    type: "page",
    theme: {
      layout: "full",
    },
  },
};

export default meta;
