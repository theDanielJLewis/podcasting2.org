import Apps from "@/components/Apps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasting 2.0 for audiences",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default async function AudiencesPage() {
  const response = await fetch("https://podcastindex.org/api/apps");
  const apps = await response.json();

  return (
    <>
      <div className="flex flex-col justify-center py-24 text-xl lg:py-60">
        <h1>Enjoy Podcasting 2.0 with a modern podcast app!</h1>
        <p>
          Your favorite podcasts are better in a Podcasting 2.0 app, letting you
          show your support, see dynamic content, engage in the community, and
          more!
        </p>
      </div>
      <Apps apps={apps} />
    </>
  );
}
