import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
export function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div className="container mx-auto flex p-4 lg:px-8">
        <div>
          Podcasting2.org created by{" "}
          <Link
            href="https://theaudacitytopodcast.com/"
            className="transition-all hover:text-slate-300"
          >
            Daniel J. Lewis
          </Link>{" "}
          and{" "}
          <Link
            href="https://podnews.net"
            className="transition-all hover:text-slate-300"
          >
            James Cridland
          </Link>
          .
          <br />
          All content is licensed under{" "}
          <Link
            href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            className="inline-block transition-all hover:text-slate-300"
          >
            CC BY 4.0
            <img
              className="ml-1 inline-block h-3 align-baseline"
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
              alt="Creative Commons"
            />
            <img
              className="ml-1 inline-block h-3 align-baseline"
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
              alt="Attribution 4.0 International"
            />
          </Link>
        </div>
        <div className="ml-auto">
          <ul>
            <li>
              <Link
                href="/about"
                className="transition-all hover:text-slate-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://podcastindex.org"
                className="transition-all hover:text-slate-300"
              >
                Podcast Index
              </Link>
            </li>
            <li>
              <Link
                href="https://podcastindex.social"
                className="transition-all hover:text-slate-300"
              >
                Mastodon Community
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/thedanieljlewis/podcasting2.org"
                className="transition-all hover:text-slate-300"
              >
                Contribute on GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
