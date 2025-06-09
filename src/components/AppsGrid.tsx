"use server";
import { getApps } from "@/data/apps";
import { AppsGridLgItems } from "@/components/AppsGridLgItems";
import { AppsGridSmItems } from "./AppsGridSmItems";

export async function AppsGrid({
  types,
  notTypes,
  tags,
  size = "lg",
}: {
  types?: string | string[];
  notTypes?: string | string[];
  tags?: string[];
  size?: "sm" | "md" | "lg";
}) {
  let apps = await getApps();
  if (types) {
    const typesArray = Array.isArray(types) ? types : [types];
    apps = apps.filter((app) =>
      typesArray.some((type) => app.appType.includes(type)),
    );
  }
  if (notTypes) {
    const notTypesArray = Array.isArray(notTypes) ? notTypes : [notTypes];
    apps = apps.filter((app) =>
      notTypesArray.every((type) => !app.appType.includes(type)),
    );
  }
  if (tags)
    apps = apps.filter((app) =>
      app.supportedElements.some((element) =>
        tags.includes(element.elementName.toLowerCase()),
      ),
    );

  if (!apps.length) return <>No support, yet.</>;

  switch (size) {
    case "sm":
      return <AppsGridSmItems apps={apps} />;
      break;

    case "md":
      return <AppsGridLgItems apps={apps} />;
      break;

    case "lg":
      return <AppsGridLgItems apps={apps} />;
      break;

    default:
      return <AppsGridLgItems apps={apps} />;

      break;
  }
}
