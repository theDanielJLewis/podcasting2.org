import { HeroHeader } from "@/components/ui/HeroHeader";
import { guides } from "@/data/guides";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcasting 2.0 Guides and Resources",
};

export default function GuidesPage() {
  return (
    <>
      <HeroHeader>
        <h1>Podcasting 2.0 Guides and Resources</h1>
        <span>Helping you to use Podcasting 2.0</span>
      </HeroHeader>
      <div>
        <h2>For podcasters</h2>
        <ul>
          {guides.map((guide) => (
            <li key={guide.tagSlug}>
              <Link href={`${guide.href}`}>{guide.title}</Link>
            </li>
          ))}
        </ul>
        <h2>Additional resources</h2>
        <ul>
          <li>
            <Link
              href="https://podcastindex.org/podcast/920666"
              target="_blank"
              className="text-amber-600 transition-all hover:text-amber-700 hover:underline dark:text-amber-400 dark:hover:text-amber-500"
            >
              Listen to Podcasting 2.0 with Adam Curry, Dave Jones, and
              ocassional guests
            </Link>
          </li>
          <li>
            <Link
              href="https://futureofpodcasting.net"
              target="_blank"
              className="text-amber-600 transition-all hover:text-amber-700 hover:underline dark:text-amber-400 dark:hover:text-amber-500"
            >
              Listen to The Future of Podcasting with Dave Jackson and Daniel J.
              Lewis
            </Link>
          </li>
          <li>
            <Link
              href="https://blubrry.com/support/podcasting-2-0-introduction/"
              target="_blank"
              className="text-amber-600 transition-all hover:text-amber-700 hover:underline dark:text-amber-400 dark:hover:text-amber-500"
            >
              Read Blubrry&rsquo;s Podcasting 2.0 guide
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
