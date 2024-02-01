"use client";
import { IoBrowsers } from "react-icons/io5";
import { SiAndroid, SiApple } from "react-icons/si";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import _ from "lodash";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Apps({ apps }: { apps: any[] }) {
  apps = apps.sort(
    (a, b) => b.supportedElements.length - a.supportedElements.length,
  );
  apps = apps.filter((app) => app.appType.includes("app"));
  const platforms = _.uniq(apps.map((app) => app.platforms).flat());
  const [appsList, setAppsList] = useState(apps);

  function filterApps({ field, value }: { field: string; value: string }) {
    const filteredApps = apps.filter((app) => app[field].includes(value));
    setAppsList(filteredApps);
  }

  return (
    <>
      {" "}
      <div className="flex items-center gap-4 pb-4">
        <Select
          onValueChange={(v) => filterApps({ field: "platforms", value: v })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Pick your platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((platform: any) => (
              <SelectItem value={platform} key={platform}>
                {platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {appsList.map((app) => (
          <div key={app.appName}>
            <Image
              src={"https://podcastindex.org/api/images/" + app.appIconUrl}
              alt={app.appName + " icon"}
              width={100}
              height={100}
              className="rounded-3xl"
            />
            <h3>{app.appName}</h3>
            {/* {app.supportedElements.map((element: any) => (
              <>{element.elementName}</>
            ))} */}
          </div>
        ))}
      </div>
    </>
  );
}
