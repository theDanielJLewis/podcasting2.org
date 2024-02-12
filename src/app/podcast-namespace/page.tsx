import { Metadata } from "next";
import { podcastNamespaceTags } from "@/data/podcastNamespaceTags";
import Link from "next/link";
import { NamespaceTag } from "@/components/NamespaceTag";
import _ from "lodash";

export const metadata: Metadata = {
  title: "Podcast Namespace - Podcasting 2.0",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function PodcastNamespacePage() {
  const tags = _.sortBy(podcastNamespaceTags, "popular");
  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1 className="text-4xl">Podcast Namespace</h1>
        <code>
          &lt;rss version=&quot;2.0&quot;
          xmlns:podcast=&quot;https://podcastindex.org/namespace/1.0&quot;&gt;
        </code>
      </div>

      <p>
        Since the{" "}
        <a href="https://blogs.harvard.edu/lydondev/2003/07/09/spoken-word-a-few-good-bloggers/"  target="_blank">
          first podcast
        </a>{" "}
        in 2003, podcasting has been evolving.
      </p>

      <p>
        The open podcast ecosystem is powered by RSS feeds. RSS (&ldquo;really
        simple syndication&rdquo;) can be extended with a
        &ldquo;namespace&rdquo;, a set of new tags that enable new features.
        Apple added{" "}
        <a href="https://podcasters.apple.com/support/823-podcast-requirements"  target="_blank">
          their own iTunes podcast namespace in 2005
        </a>
        , which allowed podcasters to specify things like podcast artwork,
        categories and other elements. Other namespaces have also been proposed;
        but in 2020, a new, collaborative, podcast namespace was first worked on
        by a wide number of interested people, aided and encouraged by Adam
        Curry and Dave Jones from{" "}
        <a href="https://podcastindex.org/"  target="_blank">The Podcast Index</a>.
      </p>

      <p>
        <strong>
          The new podcast namespace is a set of new tags that are 100% backwards
          compatible with existing podcast feeds.
        </strong>{" "}
        Like the Apple iTunes podcast namespace, the new podcast namespace adds
        additional features, like transcripts, locations, alternate audio files,
        and many more benefits for everyone involved in the open podcast
        ecosystem. You can spot these tags by looking for those that start{" "}
        <code className="language-plaintext highlighter-rouge">podcast:</code>{" "}
        in the RSS feed.
      </p>

      <p>
        Individual tags from the new podcast namespace are now supported by a
        growing number of{" "}
        <Link href="/publishing-tools">
          podcast publishing tools and hosting providers
        </Link>{" "}
        and <Link href="/apps">podcast apps</Link>.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag) => (
          <NamespaceTag tag={tag} key={tag.label} />
        ))}
      </div>
    </>
  );
}
