import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasting 2.0 for developers",
  // description: 'Podcasting 2.0 is for podcasters!',
};

export default function DevelopersPage() {
  return (
    <>
      <h1 className="text-4xl">Podcasting 2.0 is for developers!</h1>
    </>
  );
}
