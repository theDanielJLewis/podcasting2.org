import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { Footer as NextraFooter } from "nextra-theme-docs";
export function Footer() {
  return (
    <NextraFooter className="flex bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div>
        Website built by{" "}
        <Link
          href="https://theaudacitytopodcast.com/"
          target="_blank"
          className="text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
        >
          Daniel J. Lewis
        </Link>
        <br />
        All content is licensed under{" "}
        <Link
          href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className="inline-block text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
        >
          CC BY 4.0
          <Image
            width="12"
            height="12"
            className="ml-1 inline-block h-3 align-baseline"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt="Creative Commons"
          />
          <Image
            width="12"
            height="12"
            className="ml-1 inline-block h-3 align-baseline"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt="Attribution 4.0 International"
          />
        </Link>
      </div>
      <div className="ml-auto">
        <ul>
          <li>
            <Link
              href="/about"
              className="text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://podcastindex.org"
              target="_blank"
              className="text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
            >
              Podcast Index
            </Link>
          </li>
          <li>
            <Link
              href="https://podcastindex.social"
              target="_blank"
              className="text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
            >
              Mastodon Community
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/thedanieljlewis/podcasting2.org"
              target="_blank"
              className="text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
            >
              Contribute to this site
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/podcastindex-org/podcast-namespace"
              target="_blank"
              className="text-slate-950 transition-all hover:underline dark:text-slate-300 dark:hover:text-slate-300"
            >
              Contribute to the Podcast Namespace
            </Link>
          </li>
        </ul>
      </div>
    </NextraFooter>
  );
}
