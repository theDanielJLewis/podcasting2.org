import { Metadata } from "next";
import { getApps } from "@/data/apps";
import { AppsGrid } from "@/components/AppsGrid";
import { HeroHeader } from "@/components/ui/HeroHeader";

export const metadata: Metadata = {
  title: "Podcast Hosting and Tools - Podcasting 2.0",
  description:
    "Podcasting hosting providers and publishing tools that support Podcasting 2.0.",
};

export default async function PublishingToolsPage() {
  let apps = await getApps();
  apps = apps.filter((app) => app.appType.includes("hosting"));

  return (
    <>
      <HeroHeader>
        <h1>Upgrade your podcast with Podcasting 2.0 services!</h1>
        <span>
          The best way to use Podcasting 2.0 features is with a modern
          publishing or hosting tool.
        </span>
      </HeroHeader>
      <AppsGrid apps={apps} />
    </>
  );
}
