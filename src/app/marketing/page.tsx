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
        Please feel free to use these IDs in your show.
        If you have room to credit the voice talent,
        please do so in the show notes or the show credits.
        You can also thank them with a boost to <pre>mattcundill@getalby.com</pre></p>

      <p>
Some jingles here shortly
        <p>

      <h2>Or use your power as a podcaster</h2>
      <ol className="list-decimal pl-8">
        <li>
          Encourage your audience to{" "}
          <Link href="/apps">get a better podcast app</Link>
        </li>
       <li>
          Pick a podcast app you like, and promote it! Its developer will thank you.
        </li>
      </ol>
    </>
  );
}
