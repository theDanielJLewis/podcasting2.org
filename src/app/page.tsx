import Image from "next/image";
import type { Metadata } from "next";
import {
  AudioLines,
  Code,
  Headphones,
  Lightbulb,
  Mic,
  MonitorSmartphone,
  MonitorUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroHeader } from "@/components/ui/HeroHeader";

export const metadata: Metadata = {
  title:
    "Podcasting 2.0 - Making podcasts better for audiences, podcasters, and developers",
  description:
    "Learn about the podcast innovations and features of Podcasting 2.0, and how to upgrade your podcast for modern benefits.",
};

export default function Home() {
  return (
    <>
      <HeroHeader className="lg:h-96">
        <h1>
          <span className="font-bold">Podcasting 2.0</span>
          <br />
          <br />
          Making podcasting better for audiences, podcasters, and developers
        </h1>
      </HeroHeader>
      <div className="mb-16 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-start py-3">
          <Headphones size={48} />
          <h2 className="my-3 text-2xl">For audiences</h2>
          <p>
            Enjoy richer listening and viewing experiences! Podcasting 2.0 lets
            you follow, engage with, support, and share podcasts more easily.
          </p>
          <Link href="/apps" className="mt-auto">
            <Button>Find a better app!</Button>
          </Link>
          {/* <LinkContainer to="/apps">
              <Button>Try a better podcast app!</Button>
            </LinkContainer> */}
        </div>
        <div className="flex flex-col items-start py-3">
          <Mic size={48} />

          <h2 className="my-3 text-2xl">For podcasters</h2>
          <p>
            Podcasting 2.0 offers the new Podcast Namespace to improve your
            podcast, grow your audience, and even monetize your show!
          </p>
          <Link href="/podcasters" className="mt-auto">
            <Button>Upgrade my podcast!</Button>
          </Link>

          {/* <LinkContainer to="/podcasters">
              <Button>Upgrade to Podcasting 2.0!</Button>
            </LinkContainer> */}
        </div>
        <div className="flex flex-col items-start py-3">
          <Code size={48} />

          <h2 className="my-3 text-2xl">For developers</h2>
          <p>
            Integrate an open, inclusive, always-free podcast catalog API and
            add Podcasting 2.0 features to your app. Make finding, following,
            and funding podcasts easier for your users!
          </p>
          <Link href="/podcast-namespace" className="mt-auto">
            <Button>Add the Podcast Namespace!</Button>
          </Link>
          {/* <LinkContainer to="/developers">
              <Button>Put Podcasting 2.0 in your app!</Button>
            </LinkContainer> */}
        </div>
        {/* <div className="col-span-full flex flex-col items-start py-3">
            <Lightbulb size={48} />

            <h2 className="my-3 text-2xl">For anyone with ideas</h2>
            <p>
              Integrate an open, inclusive, always-free podcast catalog API and
              add Podcasting 2.0 features to your app. Make finding, following,
              and funding podcasts easier for your users!
            </p>
            <Button className="mt-auto">Get involved!</Button>
          </div> */}
      </div>
      <div className="mb-16 grid md:grid-cols-3 md:gap-8 ">
        <div className="w-12 md:col-span-1 md:w-auto">
          <AudioLines className="h-full w-full md:opacity-50" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl">What does Podcasting 2.0 offer?</h2>
          <p>
            Podcasting 2.0 is a set of new features and standards that make
            podcasting better for everyone.
          </p>
          <p>
            Since RSS (&ldquo;really simple syndication&rdquo;) is the core
            technology that makes podcasting possible, Podcasting 2.0 extends
            this standard with new RSS tags to enable new features.
          </p>
          <p>
            Some of these new features (like the{" "}
            <code>&lt;podcast:podroll&gt;</code> tag for recommending other
            podcasts) can be added to podcast feeds simply by adding the
            appropriate RSS tags. Many publishing tools and hosting providers
            make this as simple as filling in additional field.
          </p>
          <p>
            Other features (like using <code>&lt;podcast:value&gt;</code> to
            accept &ldquo;boostagrams&rdquo; and streaming payments) require
            additional tools and a few more initial steps.
          </p>
        </div>
      </div>
      <div className="mb-16 grid md:grid-cols-3 md:gap-8 ">
        <div className="w-12 md:col-span-1 md:w-auto">
          <MonitorSmartphone className="h-full w-full opacity-50" />
        </div>

        <div className="md:col-span-2">
          <h2>Where does Podcasting 2.0 work?</h2>
          <p>
            Podcasting 2.0 already has various levels of support from{" "}
            <Link href="/apps">
              independent modern podcast apps to Apple Podcasts
            </Link>
            !
          </p>
          <p>
            To take advantage of Podcasting 2.0 today,{" "}
            <Link href="/publishing-tools">
              check which features your hosting provider or publishing tool
              supports
            </Link>
            , or consider switching to one of these providers or tools.
          </p>
        </div>
      </div>
      <div className="mb-16 grid md:grid-cols-3 md:gap-8 ">
        <div className="w-12 md:col-span-1 md:w-auto">
          <MonitorUp className="h-full w-full opacity-50" />
        </div>
        <div className="md:col-span-2">
          <h2>How to upgrade to Podcasting 2.0</h2>
          <p>
            Getting the most from Podcasting 2.0 can be summed up with these two
            steps:
          </p>
          <ol className="mb-8 list-decimal pl-8">
            <li>
              Start implementing the Podcasting 2.0 features in your own
              podcast. <Link href="/guides">Visit our guides for help</Link>.
            </li>
            <li>
              Encourage your audience to{" "}
              <Link
                href="/apps"
                className="text-amber-600 transition-all hover:text-amber-700 hover:underline dark:text-amber-400 dark:hover:text-amber-500"
              >
                try a better podcast app from Podcasting2.org/apps
              </Link>
              .
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
