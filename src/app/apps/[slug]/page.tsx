import { Badge } from "@/components/ui/badge";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { MyCodeBlock } from "@/components/ui/MyCodeBlock";
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
      app.appName.toLowerCase().replace(" ", "") === params.slug.toLowerCase(),
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
        <p>
          Available on:{" "}
          {app.platforms.map((platform) => (
            <Badge variant="secondary" className="m-0.5" key={platform}>
              {platform}
            </Badge>
          ))}
        </p>
        <p>
          Supported features:{" "}
          {app.supportedElements.map((element) => (
            <Badge
              variant="secondary"
              className="m-0.5"
              key={element.elementName}
            >
              {element.elementName}
            </Badge>
          ))}
        </p>
        <Link href={app.appUrl} target="_blank">
          <Button>Visit website</Button>
        </Link>
      </div>
    </>
  );
}
