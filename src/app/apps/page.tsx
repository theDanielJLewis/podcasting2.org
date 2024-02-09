import Apps from "@/components/Apps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Apps - Podcasting 2.0",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default async function AppsPage() {
  const response = await fetch("https://podcastindex.org/api/apps");
  let apps: PodcastIndexApps[] = await response.json();
  apps = apps.filter((app) => app.appType.includes("podcast player"));

  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1>Enjoy Podcasting 2.0 with a modern podcast app!</h1>
        <span>
          Your favorite podcasts are better in a Podcasting 2.0 app, letting you
          show your support, see dynamic content, engage in the community, and
          more!
        </span>
      </div>
      <Apps apps={apps} />
    </>
  );
}
