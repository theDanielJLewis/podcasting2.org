export async function getApps(): Promise<PodcastIndexApps[]> {
  const response = await fetch("https://podcastindex.org/api/apps", {
    next: { revalidate: 60 * 60, tags: ["apps"] },
    headers: {
      "User-Agent": "podcasting2.org",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch apps: ${response.status} ${response.statusText}. ${errorText}`,
    );
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    throw new Error(
      `Expected JSON but got ${contentType}. Response: ${text.substring(0, 200)}`,
    );
  }

  let apps = await response.json();
  apps = apps.sort((a: PodcastIndexApps, b: PodcastIndexApps) =>
    a.appName.localeCompare(b.appName),
  );
  return apps as PodcastIndexApps[];
}
