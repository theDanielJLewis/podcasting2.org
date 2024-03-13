import { HeroHeader } from "@/components/ui/HeroHeader";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcasting 2.0 for podcasters",
  description:
    "Learn why podcasters should care about Podcasting 2.0 and how to get started.",
};

export default function PodcastersPage() {
  return (
    <>
      <HeroHeader>
        <h1>Podcasting 2.0 is for podcasters!</h1>
        <span>
          Podcasts deserve an open, independent podcasting ecosystem. 
          Podcasting 2.0 was created to preserve, protect, and <em>extend</em>{" "}
          that ecosystem.
        </span>
      </HeroHeader>
      <h2>Upgrade your podcast</h2>
      <p>
        Every good podcast starts with an RSS feed - the foundation for open podcasting.
        But, open podcast feeds have lacked innovation for years: much of the innovation
        that podcasting has seen recently has been from large corporations building new
        tools for their enclosed ecosystems - which don&rsquo;t benefit open podcasting, and
        make it harder for podcasters to get the best for their listeners on all platforms.
      </p>
      <p>
        Podcasting 2.0 changes that by finally bringing fresh innovation to
        podcasting&rsquo;s core technology of RSS. RSS has always been able to be extended
        to add new features; and through a new "namespace" - a set of standard features for
        RSS - we can bring multiple benefits for audiences, podcasters, and developers.
      </p>
      <h3>Podcast Namespace benefits</h3>
      <ul className="list-disc pl-8">
        <li>Add transcripts that the creator controls, adding accessibility for all</li>
        <li>
          Add and edit interactive chapters—<em>without</em> re-uploading your
          media file
        </li>
        <li>Earn money directly from your audience</li>
        <li>Engage through comments accessible across multiple apps</li>
        <li>
          Expose more information about your podcast, like people, location, and
          more
        </li>
        <li>Lock your podcast against theft</li>
        <li>Notify your audience when you&rsquo;re live-streaming</li>
        <li>Deliver new episodes more quickly to your podcast followers</li>
        <li>Protect your podcast from censorship and deplatforming</li>
      </ul>
      <h2>How to get started</h2>
      <ol className="list-decimal pl-8">
        <li>
          Ensure your podcast is in the Podcast Index. 
          <Link href="https://podcastindex.org/add" target="_blank">
            Add your podcast if it&rsquo;s not included
          </Link>
          . The Podcast Index in the podcast directory used by most new
          podcast apps, and this will ensure your podcast is easy to find.
        </li>
        <li>
          Check with your podcast hosting company, or your RSS publishing tool,
          whether it supports Podcasting 2.0 features from the{" "}
          <Link href="/podcast-namespace">new podcast namespace</Link>. You
          might even want to switch providers in order to get the new features
          you're interested in using.
        </li>
        <li>
          Prepare your podcast to receive streaming Bitcoin/Satoshis and
          Boostagrams through &ldquo;Value 4 Value.&rdquo;{" "}
          <a href="https://value4value.info/" target="_blank">
            Here&rsquo;s a guide
          </a>
          .
        </li>
        <li>
          Encourage your audience to{" "}
          <Link href="/apps">get a better podcast app</Link> - or promote the one you like best.
        </li>
        <li>
          Run some{" "}
          <Link href="/marketing">idents about Podcasting 2.0</Link> in your show.
        </li>
        <li>
          <a href="https://podcastindex.social/invite/hfcQYbjq" target="_blank">
            Participate in PodcastIndex.social
          </a>, a social network for podcasters at the cutting edge, to share your ideas and feedback.
        </li>
        <li>
          Go deeper with our <Link href="/developers">developer resources</Link>
          .
        </li>
      </ol>
    </>
  );
}
