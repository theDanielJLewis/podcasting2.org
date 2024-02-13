import { HeroHeader } from "@/components/ui/HeroHeader";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcasting 2.0 Resources",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default async function ResourcesPage() {
  return (
    <>
      <HeroHeader>
        <h1>Resources for learning more about Podcasting 2.0</h1>
      </HeroHeader>
      <div>
        <ul className="list-disc pl-4">
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
