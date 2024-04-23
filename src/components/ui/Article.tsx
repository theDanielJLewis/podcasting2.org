import { cn } from "@/lib/utils";

export function Article({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className: string;
  props?: any;
}) {
  return (
    <article
      {...props}
      className={cn("prose max-w-none dark:prose-invert", className)}
    >
      {children}
    </article>
  );
}
