import { Metadata } from "next";
import Link from "next/link";
import { MyCode } from "@/components/ui/MyCode";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { podcastNamespaceTag } from "@/data/podcastNamespaceTags";
import { guides } from "@/data/guides";
import { ItemNav } from "@/components/ItemNav";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "How to Add Super Chapters to Your Podcast - Podcasting 2.0",
};

export default function ChaptersGuide() {
  const tag = podcastNamespaceTag.chapters;
  guides.forEach((guide) => {
    guide.label = guide.title;
  });
  const currentGuide = guides.find((guide) => guide.tagSlug === "chapters");

  return (
    <>
      <ItemNav current={currentGuide} items={guides} />
      <HeroHeader>
        <h1>How to Add Super Chapters to Your Podcast</h1>
        <span>
          Powered by <MyCode text={tag.tag} language="xml" />
        </span>
      </HeroHeader>

      <div className="mb-8">
        <p>
          Although chapters have existed in podcasting since almost the
          beginning, there could only be embedded in the media file, were
          limited in functionality, and could only be updated by replacing the
          media file (which would not cause an update for audiences who already
          downloaded the episode).
        </p>
        <p>
          Podcasting 2.0&rsquo;s &ldquo;super chapters&rdquo; extend the
          chapters to include more and smarter ways to engage your audience
          while they play your episodes.
        </p>

        <p>
          Super chapters are saved in a separate JSON-format file for each
          episode.
        </p>

        <p>Here is how to add the super chapters to your episodes.</p>

        <ol>
          <li>
            <strong>Create your chapters</strong> with a chapter editor (see
            below) or by manually writing the JSON file.
          </li>
          <li>
            <strong>Upload the JSON episode metadata file</strong> to your
            podcast-hosting provider or a file-hosting service (preferrably a
            CDN). Make sure the file is publicly accessible.
          </li>
          <li>
            <strong>Add the URL for your metadata file with chapters</strong> to
            your episode&rsquo;s chapters field, or in the{" "}
            <MyCode text="<podcast:chapters>" language="xml" /> tag in your RSS
            feed. (Skip this step if your podcast-hosting provider does this for
            you.)
          </li>
          <li>
            <strong>Publish your episode!</strong>
          </li>
        </ol>

        <Link href={`/podcast-namespace/tags/${tag.slug}`}>
          <Button>Read the technical details</Button>
        </Link>

        <h2>Tools for creating podcast chapters</h2>
        <ul>
          <li>
            <a href="https://hindenburg.com/" target="_blank">
              Hindenburg
            </a>
          </li>
          <li>
            <a href="https://chaptersapp.com/" target="_blank">
              Chapters App
            </a>
          </li>
        </ul>
      </div>
      <ItemNav current={currentGuide} items={guides} />
    </>
  );
}
