import Link from "next/link";

export function TableOfContents({ items }: { items: any[] }) {
  return (
    <div className="shrink p-4">
      {items.map((item) => (
        <Link href={"#" + item.name} className="block" key={item.name}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
