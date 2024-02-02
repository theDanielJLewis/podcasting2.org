import Link from "next/link";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

export function NamespaceTag({ tag }: { tag: NamespaceTag }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border-2 border-muted p-4 transition-all hover:bg-muted",
        tag.popular &&
          "border-green-300 bg-green-200 dark:border-green-800 dark:bg-green-900",
      )}
    >
      <h3 className="mt-0 flex items-center gap-2" id={tag.label}>
        {tag.label}
        {tag.popular && (
          <Badge className="bg-green-700 dark:bg-green-300">Popular!</Badge>
        )}
      </h3>
      <p>
        <code>{tag.tag}</code>
      </p>
      <p>{tag.description?.short}</p>
      <Button asChild className="mr-auto mt-auto">
        <Link href={`/podcast-namespace/tags/${tag.slug}`}>Details</Link>
      </Button>
    </div>
  );
}
