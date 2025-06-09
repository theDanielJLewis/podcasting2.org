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

export function AppsGridSmItems({ apps }: { apps: PodcastIndexApps[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function GridItem({ app }: { app: any }) {
    return (
      <div className="text-muted-foreground hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md p-2 transition-all">
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
      </div>
    );
  }

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {apps.map((app) => (
        <div key={app.appName}>
          {isDesktop ? (
            <Dialog>
              <DialogTrigger>
                <GridItem app={app} />
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
                          <Link
                            key={element.elementName}
                            href={`/podcast-namespace/tags/${element.elementName.toLowerCase().replaceAll(" ", "")}`}
                          >
                            <Badge className="m-0.5" key={element.elementName}>
                              {element.elementName}
                            </Badge>
                          </Link>
                        ))}
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <DialogFooter className="flex sm:justify-center">
                  <Link href={app.appUrl} target="_blank">
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
                <GridItem app={app} />
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
                          <Link
                            key={element.elementName}
                            href={`/podcast-namespace/tags/${element.elementName.toLowerCase().replaceAll(" ", "")}`}
                          >
                            <Badge className="m-0.5" key={element.elementName}>
                              {element.elementName}
                            </Badge>
                          </Link>
                        ))}
                      </p>
                    </DrawerDescription>
                  </DrawerHeader>
                </div>
                <DrawerFooter>
                  <Link href={app.appUrl} target="_blank">
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
  );
}
