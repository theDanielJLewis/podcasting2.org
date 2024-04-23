import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Menu } from "lucide-react";
import { MainNav } from "../MainNav";
import { Podcasting20 } from "../icons/podcasting20";

export function Header() {
  return (
    <header className="bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400">
      <div className="container mx-auto flex gap-4 p-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold transition-all hover:text-primary"
        >
          <Podcasting20 className="size-6" />
          Podcasting 2.0
        </Link>
        <MainNav className="ml-auto hidden md:flex" />
        <Sheet>
          <SheetTrigger className="ml-auto text-primary group-hover:text-primary-foreground md:hidden">
            <Menu className="text-xl" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full overflow-y-auto bg-slate-100 p-4 dark:bg-slate-900"
          >
            <MainNav className="flex-col" mobile={true} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
