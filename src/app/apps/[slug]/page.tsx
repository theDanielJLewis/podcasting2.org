import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { getApps } from "@/data/apps";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const apps = await getApps();
  const app: PodcastIndexApps | undefined = apps.find(
    (app: PodcastIndexApps) =>
      app.appName.toLowerCase().replaceAll(" ", "") ===
      params.slug.toLowerCase(),
  );
  if (!app) {
    return notFound();
  }

  return {
    title: `${app.appName} - Podcasting 2.0`,
  };
}

export default async function SingleApp({
  params,
}: {
  params: { slug: string };
}) {
  const apps = await getApps();
  const app: PodcastIndexApps | undefined = apps.find(
    (app: PodcastIndexApps) =>
      app.appName.toLowerCase().replace(" ", "") === params.slug.toLowerCase(),
  );
  if (!app) {
    return notFound();
  }

  return (
    <>
      <div className="lg:py-18 flex flex-col justify-center py-8 text-xl">
        <div className="flex items-center gap-6">
          <Image
            src={"https://podcastindex.org/api/images/" + app.appIconUrl}
            alt={app.appName + " icon"}
            width={150}
            height={150}
            className="rounded-3xl"
          />
          <h1>{app.appName}</h1>
        </div>
      </div>
      <div>
        <div className="mb-8">
          Available on:{" "}
          {app.platforms.map((platform) => (
            <Badge variant="secondary" className="m-0.5" key={platform}>
              {platform}
            </Badge>
          ))}
        </div>
        <div className="mb-8">
          <div className="mb-2">Supported features:</div>
          {app.supportedElements.map((element) => (
            <Link
              href={`/podcast-namespace/tags/${element.elementName.toLowerCase().replaceAll(" ", "")}`}
              key={element.elementName}
            >
              <Badge className="m-0.5" key={element.elementName}>
                {element.elementName}
              </Badge>
            </Link>
          ))}
        </div>
        <div>
          <Link href={app.appUrl} target="_blank">
            <Button>Visit website</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
