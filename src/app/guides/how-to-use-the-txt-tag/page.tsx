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
  title: "How to Use the Podcast TXT tag - Podcasting 2.0",
  description:
    "Learn what the Podcasting 2.0 TXT tag does and when you might need it.",
};

export default function TranscriptsGuide() {
  const tag = podcastNamespaceTag.txt;
  guides.forEach((guide) => {
    guide.label = guide.title;
  });
  const currentGuide = guides.find((guide) => guide.tagSlug === "txt");

  return (
    <>
      <ItemNav current={currentGuide} items={guides} />
      <HeroHeader>
        <h1>How to Use the TXT tag</h1>
        <span>
          Powered by <MyCode text={tag.tag} language="xml" />
        </span>
      </HeroHeader>

      <div className="mb-8">
        <p>
          The TXT tag is a versitle tag that can hold any kind of text. This is
          ideal for any kind of ownership verification an app or service might
          require. For example, transferring ownership of a podcast from one
          Apple account to another, or claiming your podcast on a new platform.
        </p>
        <p>
          You can put <em>any</em> text between{" "}
          <MyCode text="<podcast:txt>" language="xml" /> and{" "}
          <MyCode text="</podcast:txt>" language="xml" />.
        </p>

        <ol>
          <li>
            <strong>Copy the special text</strong> you are given by the app or
            service you are trying to use.
          </li>
          <li>
            <strong>
              Paste the special text into your publishing tool&rsquo;s TXT field
            </strong>
            or manually insert it into the code, like{" "}
            <MyCode
              text="<podcast:txt>SPECIAL_TEXT_HERE</podcast:txt>"
              language="xml"
            />
          </li>
          <li>
            <strong>Enter the &ldquo;purpose&rdquo; if necessary</strong>
            either in your publishing tool or update your code like this{" "}
            <MyCode
              text={`<podcast:txt purpose="PURPOSE_HERE">SPECIAL_TEXT_HERE</podcast:txt>`}
              language="xml"
            />
          </li>
          <li>
            <strong>Save your changes or paste the code</strong> before the
            first <MyCode text="<item>" language="xml" /> in your RSS feed.
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
