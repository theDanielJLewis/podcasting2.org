import { Metadata } from "next";
import Link from "next/link";
import { MyCode } from "@/components/ui/MyCode";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { podcastNamespaceTag } from "@/data/podcastNamespaceTags";
import { guides } from "@/data/guides";
import { ItemNav } from "@/components/ItemNav";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Add Podcast Recommendations with Podroll - Podcasting 2.0",
  description:
    "Learn how to recommend other podcasts through your own with the Podcasting 2.0 Podroll tag.",
};

export default function ChaptersGuide() {
  const tag = podcastNamespaceTag.podroll;
  guides.forEach((guide) => {
    guide.label = guide.title;
  });
  const currentGuide = guides.find((guide) => guide.tagSlug === "podroll");

  return (
    <>
      <ItemNav current={currentGuide} items={guides} />
      <HeroHeader>
        <h1>How to Add Podcast Recommendations with Podroll</h1>
        <span>
          Powered by <MyCode text={tag.tag} language="xml" />
        </span>
      </HeroHeader>

      <div className="mb-8">
        <p>
          People discover new podcasts best through recommendations from people
          they trust. You can use the <MyCode text={tag.tag} language="xml" />{" "}
          to add recommend other podcasts your audience might enjoy. These can
          be your own or someone else&rsquo;s!
        </p>
        <p>
          Podcasting 2.0 apps can use your Podroll to show your podcast
          recommendations to your audience.
        </p>

        <p>Here is how to add your own podcast recommendations.</p>

        <ol>
          <li>
            Find the podcasts you want to recommend, either through your
            podcast-publishing tool or manually find the GUIDs by{" "}
            <a href="https://podnews.net">searching for the podcasts here</a>.
          </li>
          <li>
            Add these podcast GUIDs to your Podroll/recommendations list, or{" "}
            <Link href={`/podcast-namespace/tags/podroll`}>
              adapt the RSS code from here
            </Link>
            .
          </li>
          <li>
            Confirm your choices or paste the full code block into your
            podcast&rsquo;s RSS feed before any{" "}
            <MyCode text="<item>" language="xml" /> tags.
          </li>
          <li>
            <strong>Publish your changes!</strong>
          </li>
        </ol>

        <Link href={`/podcast-namespace/tags/${tag.slug}`}>
          <Button>Read the technical details</Button>
        </Link>
      </div>
      <ItemNav current={currentGuide} items={guides} />
    </>
  );
}
