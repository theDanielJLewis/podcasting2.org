import podcastNamespaceTags from "@/data/podcastNamespaceTags.json";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";

export default function SingleTag({ params }: { params: { slug: string } }) {
  const tag = podcastNamespaceTags.find(
    (tag) => tag.label.toLowerCase() === params.slug.toLowerCase(),
  );
  if (!tag) {
    return notFound();
  }

  console.log(tag);

  return (
    <>
      <div className="flex flex-col justify-center py-16 text-xl lg:py-36">
        <h1>{tag.label}</h1>
        <span>{tag.description.short}</span>
      </div>

      <div className="py-18 flex flex-col justify-center lg:py-36"></div>
      <Markdown>{tag.description.long}</Markdown>

      <h2>Examples</h2>
    </>
  );
}
