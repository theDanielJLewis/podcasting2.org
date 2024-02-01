import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import podcastNamespaceTags from "@/data/podcastNamespaceTags.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast Namespace",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function PodcastNamespacePage() {
  return (
    <>
      <h1 className="text-4xl">Podcast Namespace</h1>
      <section>
        <h1 id="the-new-podcast-namespace">The new podcast namespace</h1>
        <p>
          <strong>
            <code>
              &lt;rss version="2.0"
              xmlns:podcast="https://podcastindex.org/namespace/1.0"&gt;
            </code>
          </strong>
        </p>

        <p>
          Since the{" "}
          <a href="https://blogs.harvard.edu/lydondev/2003/07/09/spoken-word-a-few-good-bloggers/">
            first podcast
          </a>{" "}
          in 2003, podcasting has been evolving.
        </p>

        <p>
          The open podcast ecosystem is powered by RSS feeds. RSS (&ldquo;really
          simple syndication&rdquo;) can be extended with a
          &ldquo;namespace&rdquo;, a set of new tags that enable new features.
          Apple added{" "}
          <a href="https://podcasters.apple.com/support/823-podcast-requirements">
            their own iTunes podcast namespace in 2005
          </a>
          , which allowed podcasters to specify things like podcast artwork,
          categories and other elements. Other namespaces have also been
          proposed; but in 2020, a new, collaborative, podcast namespace was
          first worked on by a wide number of interested people, aided and
          encouraged by Adam Curry and Dave Jones from{" "}
          <a href="https://podcastindex.org/">The Podcast Index</a>.
        </p>

        <p>
          <strong>
            The new podcast namespace is a set of new tags that are 100%
            backwards compatible with existing podcast feeds.
          </strong>{" "}
          Like the Apple iTunes podcast namespace, the new podcast namespace
          adds additional features, like transcripts, locations, alternate audio
          files, and many more benefits for everyone involved in the open
          podcast ecosystem. You can spot these tags by looking for those that
          start{" "}
          <code className="language-plaintext highlighter-rouge">podcast:</code>{" "}
          in the RSS feed.
        </p>

        <p>
          Individual tags from the new podcast namespace are now supported by a
          growing number of{" "}
          <a href="https://podcastindex.org/apps?appTypes=hosting">
            podcast hosting companies
          </a>{" "}
          and{" "}
          <a href="https://podcastindex.org/apps?appTypes=app">podcast apps</a>.
        </p>

        <h2 id="-all-the-base-tags">
          <i className="pi pi-podcasting20certifiedbadge"></i> All the base tags
        </h2>

        <p>
          From{" "}
          <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md">
            the specification document
          </a>
          :
        </p>

        {podcastNamespaceTags.map((tag) => (
          <>
            <h2>
              <code>&lt;{tag.name}&gt;</code>{" "}
              {tag.level.map((level) => (
                <Badge variant="secondary">{level}</Badge>
              ))}
            </h2>
            <p>{tag.description}</p>
            <p>
              <Link href={tag.documentationUrl}>Documentation</Link>
              {tag.exampleUrl && (
                <>
                  {" "}
                  | <Link href={tag.exampleUrl}>Example</Link>
                </>
              )}
            </p>
          </>
        ))}
      </section>
    </>
  );
}
