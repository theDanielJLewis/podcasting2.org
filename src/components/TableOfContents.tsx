import Link from "next/link";

export function TableOfContents({
  items,
  path,
}: {
  items: any[];
  path: string;
}) {
  return (
    <div className="shrink p-4">
      {items.map((item) => (
        <Link href={path + item.slug} className="block" key={item.name}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
