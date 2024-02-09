import Apps from "@/components/Apps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Hosting and Tools - Podcasting 2.0",
  description:
    "Podcasting hosting providers and publishing tools that support Podcasting 2.0.",
};

export default async function PublishingToolsPage() {
  const response = await fetch("https://podcastindex.org/api/apps");
  let apps: PodcastIndexApps[] = await response.json();
  apps = apps.filter((app) => app.appType.includes("hosting"));

  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1>Upgrade your podcast with Podcasting 2.0 services!</h1>
        <span>
          The best way to use Podcasting 2.0 features is with a modern
          publishing or hosting tool.
        </span>
      </div>
      <Apps apps={apps} />
    </>
  );
}
