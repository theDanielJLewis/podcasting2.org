import { cn } from "@/lib/utils";

export function Article({ children, className, ...props }) {
  return (
    <article
      {...props}
      className={cn("prose dark:prose-invert max-w-none", className)}
    >
      {children}
    </article>
  );
}
