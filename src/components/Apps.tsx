"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@custom-react-hooks/all";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Apps({ apps }: { apps: PodcastIndexApps[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  apps = apps.sort(
    (a, b) => b.supportedElements.length - a.supportedElements.length,
  );
  const platforms = _.uniq(apps.map((app) => app.platforms).flat());
  const [appsList, setAppsList] = useState(apps);

  function filterApps({ field, value }: { field: string; value: string }) {
    const filteredApps = apps.filter((app: any) => app[field].includes(value));
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
          <SelectContent position="item-aligned">
            {platforms.map((platform: any) => (
              <SelectItem value={platform} key={platform}>
                {platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={() => {
            setAppsList(apps);
          }}
          size={"sm"}
        >
          Reset filter
        </Button>
        <div className="ml-auto">(Sorted by most features)</div>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {appsList.map((app) => (
          <div key={app.appName}>
            {isDesktop ? (
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={
                      "https://podcastindex.org/api/images/" + app.appIconUrl
                    }
                    alt={app.appName + " icon"}
                    width={200}
                    height={200}
                    className="rounded-3xl"
                  />
                  <h3>{app.appName}</h3>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex items-start gap-4">
                    <Image
                      src={
                        "https://podcastindex.org/api/images/" + app.appIconUrl
                      }
                      alt={app.appName + " icon"}
                      width={200}
                      height={200}
                      className="rounded-3xl"
                    />

                    <DialogHeader>
                      <DialogTitle>{app.appName}</DialogTitle>
                      <DialogDescription>
                        <p>
                          Available on:{" "}
                          {app.platforms.map((platform) => (
                            <Badge
                              variant="secondary"
                              className="m-0.5"
                              key={platform}
                            >
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
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                  <DialogFooter className="flex sm:justify-center">
                    <Link href={app.appUrl}>
                      <Button>Visit website</Button>
                    </Link>
                    <DialogClose>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <Drawer>
                <DrawerTrigger>
                  <Image
                    src={
                      "https://podcastindex.org/api/images/" + app.appIconUrl
                    }
                    alt={app.appName + " icon"}
                    width={200}
                    height={200}
                    className="rounded-3xl"
                  />
                  <h3>{app.appName}</h3>
                </DrawerTrigger>
                <DrawerContent className="px-4">
                  <div className="flex flex-col items-center pt-4 sm:flex-row sm:items-start">
                    <Image
                      src={
                        "https://podcastindex.org/api/images/" + app.appIconUrl
                      }
                      alt={app.appName + " icon"}
                      width={200}
                      height={200}
                      className="rounded-3xl"
                    />

                    <DrawerHeader>
                      <DrawerTitle className="mt-0">{app.appName}</DrawerTitle>
                      <DrawerDescription>
                        <p>
                          Available on:{" "}
                          {app.platforms.map((platform) => (
                            <Badge
                              variant="secondary"
                              className="m-0.5"
                              key={platform}
                            >
                              {platform}
                            </Badge>
                          ))}{" "}
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
                          ))}{" "}
                        </p>
                      </DrawerDescription>
                    </DrawerHeader>
                  </div>
                  <DrawerFooter>
                    <Link href={app.appUrl}>
                      <Button className="w-full">Visit website</Button>
                    </Link>
                    <DrawerClose>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
