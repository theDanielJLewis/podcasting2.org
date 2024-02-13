import { cn } from "@/lib/utils";

export function HeroHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-40 flex-col justify-center text-xl lg:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
}
