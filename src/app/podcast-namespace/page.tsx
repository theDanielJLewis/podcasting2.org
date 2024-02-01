import { Metadata } from "next";

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

        <h2>
          <code>&lt;podcast:alternateEnclosure&gt;</code>
        </h2>
        <ul>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#alternate-enclosure">
              podcast:alternateEnclosure
            </a>{" "}
            - different bitrates, video versions, etc
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#block">
              podcast:block
            </a>{" "}
            - creator requests not to be included in a directory
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#chapters">
              podcast:chapters
            </a>{" "}
            - independently editable chapters
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#episode">
              podcast:episode
            </a>{" "}
            - episode numbers and names
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#funding">
              podcast:funding
            </a>{" "}
            - links to donate or fund a show
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#guid">
              podcast:guid
            </a>{" "}
            - a unique, global identifier for a podcast
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#images">
              podcast:images
            </a>{" "}
            - multiple image resources for podcasts
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#license">
              podcast:license
            </a>{" "}
            - define the license applied to a podcast
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#live-item">
              podcast:liveItem
            </a>{" "}
            - deliver live shows to apps
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#location">
              podcast:location
            </a>{" "}
            - &ldquo;where &rdquo;s this podcast about?”
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#locked">
              podcast:locked
            </a>{" "}
            - require permission to import a feed
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#medium">
              podcast:medium
            </a>{" "}
            - a description of the type of content in a feed
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#person">
              podcast:person
            </a>{" "}
            - credits for hosts and guests
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#season">
              podcast:season
            </a>{" "}
            - named seasons/series
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#social-interact">
              podcast:socialInteract
            </a>{" "}
            - comments for podcast episodes
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#soundbite">
              podcast:soundbite
            </a>{" "}
            - suggested clips
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#trailer">
              podcast:trailer
            </a>{" "}
            - specify a trailer (per season)
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#transcript">
              podcast:transcript
            </a>{" "}
            - captions and transcripts for podcasts
          </li>
          <li>
            <a href="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md#value">
              podcast:value
            </a>{" "}
            - a payment layer for podcasts
          </li>
        </ul>

        <h2 id="this-website">This website</h2>

        <p>
          This website will be a place to give full examples of how to use the
          new podcast namespace tags. It is editable by the community; and you
          will also be able to use this to{" "}
          <a href="https://github.com/jamescridland/podcastnamespace.org/discussions">
            ask questions
          </a>{" "}
          about implementation.
        </p>

        <h3 id="examples">Examples</h3>
        <ul>
          <li>
            <a href="https://podcastnamespace.org/tag/funding">
              podcast:funding
            </a>
            , a way to link to donation payment links for your podcast
          </li>
          <li>
            <a href="https://podcastnamespace.org/tag/guid">podcast:guid</a>,
            unique, global identifier for a podcast
          </li>
          <li>
            <a href="https://podcastnamespace.org/tag/person">podcast:person</a>
            , credits for hosts, guests and others
          </li>
          <li>
            <a href="https://podcastnamespace.org/tag/transcript">
              podcast:transcript
            </a>
            , closed-captions and transcripts for podcasts
          </li>
          <li>
            <a href="https://podcastnamespace.org/tag/value">podcast:value</a> -
            a payment layer for podcasts
          </li>
        </ul>

        <p>
          It’s edited by James Cridland, the Editor of{" "}
          <a href="https://podnews.net">Podnews</a>; but anyone can submit their
          edits to make this resource better, using the Github link in the
          bottom left. Alternatively, please contact James at james@crid.land
        </p>
      </section>
    </>
  );
}
