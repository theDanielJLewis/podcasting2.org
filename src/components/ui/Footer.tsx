import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
export function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div className="container mx-auto flex items-center p-4">
        <div>
          Created by Daniel J. Lewis and James Cridland. All content is licensed
          under{" "}
          <a
            href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            className="inline-block"
          >
            CC BY 4.0
            <Image
              className="ml-1 inline-block h-3 align-baseline"
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
              alt="Creative Commons"
            />
            <Image
              className="ml-1 inline-block h-3 align-baseline"
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
              alt="Attribution 4.0 International"
            />
          </a>
        </div>
        <Link
          href="https://github.com/thedanieljlewis/podcasting2.org"
          className="ml-auto text-slate-600 dark:text-slate-400"
        >
          <SiGithub aria-label="GitHub" />
        </Link>
      </div>
    </footer>
  );
}
