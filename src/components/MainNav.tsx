import { cn } from "@/lib/utils";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";
import { guides } from "@/data/guides";

export function MainNav({
  className,
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  let links = [
    { href: "/about", label: "Why?" },
    { href: "/apps", label: "Apps" },
    { href: "/publishing-tools", label: "Publishing/Hosting" },
    { href: "/podcast-namespace", label: "Podcast Namespace" },
    { href: "/guides", label: "Guides" },
  ];

  return (
    <nav className={cn("flex gap-4", className)}>
      {mobile && (
        <div>
          <Link href="/" className="transition-all hover:text-primary">
            Home
          </Link>
        </div>
      )}
      {links.map(({ href, label }) => (
        <div key={href}>
          {mobile ? (
            <SheetClose asChild>
              <Link href={href} className="transition-all hover:text-primary">
                {label}
              </Link>
            </SheetClose>
          ) : (
            <Link href={href} className="transition-all hover:text-primary">
              {label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
