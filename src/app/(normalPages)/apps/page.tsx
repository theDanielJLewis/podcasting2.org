import { Metadata } from "next";
import { getApps } from "@/data/apps";
import { AppsGrid } from "@/components/AppsGrid";
import { HeroHeader } from "@/components/ui/HeroHeader";

export const metadata: Metadata = {
  title: "Podcast Apps - Podcasting 2.0",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default async function AppsPage() {
  let apps = await getApps();
  apps = apps.filter((app) => app.appType.includes("podcast player"));

  return (
    <>
      <HeroHeader>
        <h1>Enjoy Podcasting 2.0 with a modern podcast app!</h1>
        <span>
          Your favorite podcasts are better in a Podcasting 2.0 app, letting you
          show your support, see dynamic content, engage in the community, and
          more!
        </span>
      </HeroHeader>
      <AppsGrid apps={apps} />
    </>
  );
}
