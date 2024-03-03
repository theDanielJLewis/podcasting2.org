import { HeroHeader } from "@/components/ui/HeroHeader";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help market Podcasting 2.0",
  description:
    "Resources and help for you to market Podcasting 2.0",
};

export default function MarketingPage() {
  return (
    <>
      <HeroHeader>
        <h1>Tell the world about Podcasting 2.0</h1>
        <span>
      New podcast features and apps will only grow if we tell the world about them - and, if you have a podcast, you can help!
        </span>
      </HeroHeader>
      <h2>Audio trailers and IDs</h2>
      <p>
        Please feel free to use these ID’s in your show.
        If you have room to credit the voice talent,
        please do so in the show notes or the show credits.
        You can also thank them with a boost to <pre>mattcundill@getalby.com</pre></p>
  <p><audio controls src="https://podcasting2.org/audio/cundill-promo.mp3"></audio><br>
  Male Voice: <a href="https://www.mattcundillvoice.com/">Matt Cundill</a><p>

    <p><audio controls src="https://podcasting2.org/audio/ivison-promo.mp3"></audio><br>
  Female Voice: <a href="https://www.ivisonvoice.com/">Mary Anne Ivision</a><p>

      <p>
        Podcasting 2.0 changes that by finally bringing fresh innovation to
        podcasting&rsquo;s core technology of RSS. We do this through the
        Podcast Namespace: a new standard for RSS feeds that bring multiple
        benefits for audiences, podcasters, and developers.
      </p>

      <h2>And...</h2>
      <ol className="list-decimal pl-8">
        <li>
          Encourage your audience to{" "}
          <Link href="/apps">get a better podcast app</Link>
        </li>
       <li>
          Or, pick a podcast app you like, and promote it! Its developer will thank you.
        </li>
      </ol>
    </>
  );
}
