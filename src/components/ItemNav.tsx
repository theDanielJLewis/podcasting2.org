import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ItemNav({ current, items }: { current: any; items: any[] }) {
  const currentIndex = items.findIndex((item) => item === current);
  const prevItem = items[currentIndex - 1];
  const nextItem = items[currentIndex + 1];

  return (
    <div className="flex justify-between">
      <div>
        {prevItem && (
          <Link
            href={prevItem.href || prevItem.slug}
            className="center flex gap-2"
          >
            <ArrowLeft />
            {prevItem.label}
          </Link>
        )}
      </div>
      <div>
        {nextItem && (
          <Link
            href={nextItem.href || nextItem.slug}
            className="center flex gap-2"
          >
            {nextItem.label}
            <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
