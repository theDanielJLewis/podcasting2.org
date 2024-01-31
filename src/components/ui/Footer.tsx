export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <div className="container mx-auto p-4">
        Created by Daniel J. Lewis and James Cridland. All content is licensed
        under{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className="inline-block"
        >
          CC BY 4.0
          <img
            className="h-3 ml-1 align-baseline inline-block"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          />
          <img
            className="h-3 ml-1 align-baseline inline-block"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          />
        </a>
      </div>
    </footer>
  );
}
