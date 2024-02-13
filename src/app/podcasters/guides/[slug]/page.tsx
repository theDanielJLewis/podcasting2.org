import { Badge } from "@/components/ui/badge";
import { podcastNamespaceTags } from "@/data/podcastNamespaceTags";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { MyCodeBlock } from "@/components/ui/MyCodeBlock";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tag: NamespaceTag | undefined = podcastNamespaceTags.find(
    (tag) => tag.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag || tag.guide === undefined) {
    return notFound();
  }

  return {
    title: `${tag.guide.title} - Podcasting 2.0`,
  };
}

export default function SingleTag({ params }: { params: { slug: string } }) {
  const tag: NamespaceTag | undefined = podcastNamespaceTags.find(
    (tag) => tag.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag || tag.guide === undefined) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1>{tag.guide.title}</h1>
      </div>

      <div className="mb-8">
        <Markdown>{tag.guide.content}</Markdown>
      </div>
    </>
  );
}
