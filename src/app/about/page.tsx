import { Article } from "@/components/ui/Article";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Podcasting 2.0",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function DevelopersPage() {
  return (
    <>
      <HeroHeader>
        <h1>Why we need Podcasting 2.0</h1>
      </HeroHeader>
      <Article className="text-2xl leading-normal">
        <p>
          The mission of Podcasting 2.0 and the Podcast Index is to preserve,
          protect, and extend the open, independent podcasting ecosystem.
        </p>
        <p>
          We do this by providing podcasters with new features for their shows,
          equipping developers with new tools for their apps and services,
          and&mdash;most importantly&mdash;improving the podcast experience for
          audiences.
        </p>
        <p>
          Together, we will grow podcasting to a platform of value-exchange that
          includes developers with podcasters and audiences.
        </p>
      </Article>
    </>
  );
}
