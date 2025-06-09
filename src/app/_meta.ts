import { GitHubIcon } from "nextra/icons";
import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  index: { title: "My Homepage", display: "hidden", type: "page" },
  documentation: {
    title: "Documentation",
    type: "page",
    href: "/docs",
  },
  apps: {
    title: "Apps",
    type: "page",
  },
  "publishing-tools": {
    title: "Publishing Tools",
    type: "page",
  },
  podcasters: {
    title: "Podcasting Tools",
    display: "hidden",
  },
  docs: {
    title: "Documentation",
    display: "children",
  },
  marketing: {
    title: "Marketing",
    type: "page",
  },
  about: {
    title: "About",
    type: "page",
  },
};

export default meta;
