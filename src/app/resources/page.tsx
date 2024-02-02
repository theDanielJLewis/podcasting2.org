import Link from "next/link";

export default async function ResourcesPage() {
  return (
    <>
      <div className="py-18 flex flex-col justify-center lg:py-36">
        <h1>Resources for learning more about Podcasting 2.0</h1>
      </div>
      <div>
        <ul className="list-disc pl-4">
          <li>
            <Link href="https://podcastindex.org/podcast/920666">
              Listen to Podcasting 2.0 with Adam Curry, Dave Jones, and
              ocassional guests
            </Link>
          </li>
          <li>
            <Link href="https://futureofpodcasting.net">
              Listen to The Future of Podcasting with Dave Jackson and Daniel J.
              Lewis
            </Link>
          </li>
          <li>
            <Link href="https://blubrry.com/support/podcasting-2-0-introduction/">
              Read Blubrry's Podcasting 2.0 guide
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
