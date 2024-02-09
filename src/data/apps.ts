export async function getApps(): Promise<PodcastIndexApps[]> {
  const response = await fetch("https://podcastindex.org/api/apps", {
    next: { revalidate: 60 * 60 },
  });
  let apps = await response.json();
  return apps as PodcastIndexApps[];
}
