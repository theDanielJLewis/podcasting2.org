export async function getApps(): Promise<PodcastIndexApps[]> {
  const response = await fetch("https://podcastindex.org/api/apps", {
    // next: { revalidate: 60 * 60 },
  });
  let apps = await response.json();
  apps = apps.sort((a: PodcastIndexApps, b: PodcastIndexApps) =>
    a.appName.localeCompare(b.appName),
  );
  return apps as PodcastIndexApps[];
}
