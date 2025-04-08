import { Badge } from "@/components/ui/badge";
import {
  podcastNamespaceTag,
  podcastNamespaceTags,
} from "@/data/podcastNamespaceTags";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { MyCodeBlock } from "@/components/ui/MyCodeBlock";
import { Metadata } from "next";
import Link from "next/link";
import { MyCode } from "@/components/ui/MyCode";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { guides } from "@/data/guides";
import { ItemNav } from "@/components/ItemNav";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Add Transcripts to Your Podcast - Podcasting 2.0",
  description:
    "Learn how to add Podcasting 2.0 transcripts to your podcast episodes for better accessibility and SEO.",
};

export default function TranscriptsGuide() {
  const tag = podcastNamespaceTag.transcript;
  guides.forEach((guide) => {
    guide.label = guide.title;
  });
  const currentGuide = guides.find((guide) => guide.tagSlug === "transcript");

  return (
    <>
      <ItemNav current={currentGuide} items={guides} />
      <HeroHeader>
        <h1>How to Add Transcripts to Your Podcast</h1>
        <span>
          Powered by <MyCode text={tag.tag} language="xml" />
        </span>
      </HeroHeader>

      <div className="mb-8">
        <p>
          Podcasting 2.0 transcripts require two parts: a transcript file (one
          per language for each episode) and the{" "}
          <MyCode text="<podcast:transcript>" language="xml" />
          tag in the episode in your RSS feed.
        </p>
        <ol>
          <li>
            <strong>
              Create and edit a transcript file for your podcast episode(s)
            </strong>
            . SRT or VTT are the best file formats for this. These are easiest
            to produce with a transcription service or AI-powered app. (See
            below for tools.)
          </li>
          <li>
            <strong>Upload the transcript file</strong> to your podcast-hosting
            provider or a file-hosting service (preferrably a CDN). Make sure
            the file is publicly accessible.
          </li>
          <li>
            <strong>Add the URL for your transcript file</strong> to your
            episode&rsquo;s transcript field, or in the{" "}
            <MyCode text="<podcast:transcript>" language="xml" /> tag in your
            RSS feed. (Skip this step if your podcast-hosting provider does this
            for you.)
          </li>
          <li>
            <strong>Publish your episode!</strong>
          </li>
        </ol>

        <Link href={`/podcast-namespace/tags/${tag.slug}`}>
          <Button>Read the technical details</Button>
        </Link>

        <h2>Tools for generating transcripts</h2>
        <ul>
          <li>
            <a href="https://www.descript.com/" target="_blank">
              Descript
            </a>
          </li>
          <li>
            <a href="https://otter.ai/" target="_blank">
              Otter
            </a>
          </li>
          <li>
            <a href="https://macwhisper.com/" target="_blank">
              MacWhisper
            </a>
          </li>
          <li>
            <a href="https://castmagic.io/" target="_blank">
              CastMagic
            </a>
          </li>
        </ul>
      </div>
      <ItemNav current={currentGuide} items={guides} />
    </>
  );
}
