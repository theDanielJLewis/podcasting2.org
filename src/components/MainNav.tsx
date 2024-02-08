import { cn } from "@/lib/utils";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

export function MainNav({
  className,
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  const links = [
    { href: "/about", label: "Why?" },
    { href: "/apps", label: "Apps" },
    { href: "/publishing-tools", label: "Publishing/Hosting" },
    { href: "/podcast-namespace", label: "Podcast Namespace" },
    { href: "/resources", label: "Resources" },
  ];
  return (
    <ul className={cn("flex gap-4", className)}>
      {mobile && (
        <li>
          <Link href="/" className="transition-all hover:text-primary">
            Home
          </Link>
        </li>
      )}
      {links.map(({ href, label }) => (
        <li key={href}>
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
        </li>
      ))}
    </ul>
  );
}
