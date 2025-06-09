import { getApps } from "@/data/apps";
import Image from "next/image";
import Link from "next/link";

export async function AppsGridSmall({
  appType,
  tags,
}: {
  appType?: string;
  tags?: string[];
}) {
  let apps = await getApps();
  if (appType) apps = apps.filter((app) => app.appType.includes(appType));
  console.log(tags);
  if (tags)
    apps = apps.filter((app) =>
      app.supportedElements.some((element) =>
        tags.includes(element.elementName.toLowerCase()),
      ),
    );

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {apps.map((app) => (
        <Link
          href={`/apps/${app.appName.toLowerCase().replaceAll(" ", "")}`}
          key={app.appName}
          className="text-muted-foreground hover:bg-muted flex items-center gap-2 rounded-md p-2 transition-all"
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
