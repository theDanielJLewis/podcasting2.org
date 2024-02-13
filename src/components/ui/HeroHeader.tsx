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
        "flex flex-col justify-center py-8 text-xl lg:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
}
