import { Metadata } from "next";
import { getApps } from "@/data/apps";
import { AppsGrid } from "@/components/AppsGrid";

export const metadata: Metadata = {
  title: "Podcast Apps - Podcasting 2.0",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default async function AppsPage() {
  let apps = await getApps();
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
      <AppsGrid apps={apps} />
    </>
  );
}
