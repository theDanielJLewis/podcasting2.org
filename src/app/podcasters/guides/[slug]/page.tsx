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
  if (!tag || tag.instructions === undefined) {
    return notFound();
  }

  return {
    title: `${tag.instructions.title} - Podcasting 2.0`,
  };
}

export default function SingleTag({ params }: { params: { slug: string } }) {
  const tag: NamespaceTag | undefined = podcastNamespaceTags.find(
    (tag) => tag.slug.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag || tag.instructions === undefined) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1>{tag.instructions.title}</h1>
      </div>

      <div className="mb-8">
        <Markdown>{tag.instructions.content}</Markdown>
      </div>
    </>
  );
}
