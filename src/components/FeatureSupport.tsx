import { AppsGrid } from "./AppsGrid";

export function FeatureSupport({ tags }: { tags: string[] }) {
  return (
    <>
      <h2 className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-8 x:text-2xl">
        Feature support
      </h2>
      <h3 className="mt-4 text-lg font-bold" id="fs-podcast-apps">Podcast apps</h3>
      <AppsGrid types="podcast player" tags={tags} size="sm" />
      <h3 className="mt-4 text-lg font-bold" id="fs-tools">Publishing/hosting tools</h3>
      <AppsGrid types="hosting" tags={tags} size="sm" />
      <h3 className="mt-4 text-lg font-bold" id="fs-miscellaneous">Miscellaneous</h3>
      <AppsGrid
        notTypes={["hosting", "podcast player"]}
        tags={tags}
        size="sm"
      />
    </>
  );
}
