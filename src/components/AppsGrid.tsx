"use server";
import { getApps } from "@/data/apps";
import { AppsGridItems } from "@/components/AppsGridItems";

export async function AppsGrid({ appType }: { appType?: string }) {
  let apps = await getApps();
  if (appType) apps = apps.filter((app) => app.appType.includes(appType));

  return <AppsGridItems apps={apps} />;
}
