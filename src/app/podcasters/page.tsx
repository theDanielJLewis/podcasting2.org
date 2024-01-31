import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Podcasting 2.0 for podcasters',
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function PodcastersPage() {
  return (
    <>
      <h1 className="text-4xl">Podcasting 2.0 is for podcasters!</h1>
    </>
  );
}
