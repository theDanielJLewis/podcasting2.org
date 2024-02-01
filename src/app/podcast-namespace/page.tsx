import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Namespace",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function PodcastNamespacePage() {
  return (
    <>
      <h1 className="text-4xl">Podcast Namespace</h1>
    </>
  );
}
