import Image from "next/image";
import Link from "next/link";

export default function AppsGridSmall({ apps }: { apps: PodcastIndexApps[] }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {apps.map((app) => (
        <Link
          href={`/apps/${app.appName.toLowerCase().replaceAll(" ", "")}`}
          key={app.appName}
          className="flex items-center gap-2 rounded-md p-2 text-muted-foreground transition-all hover:bg-muted"
        >
          <div className="w-1/4">
            <Image
              src={`https://podcastindex.org/api/images/${app.appIconUrl}`}
              alt={app.appName}
              width={48}
              height={48}
              className="rounded-md"
            />
          </div>
          <div className="w-3/4">{app.appName}</div>
        </Link>
      ))}
    </div>
  );
}
