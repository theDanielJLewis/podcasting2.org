import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PHProvider, PostHogPageview } from "@/components/PHProvider";
import { Suspense } from "react";
import { Head } from "nextra/components";
import { cn } from "@/lib/utils";
import "nextra-theme-docs/style.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Podcasting 2.0",
  other: {
    "impact-site-verification": "4bb7d67c-561a-49de-89d0-1d9366368d6a",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      // suppressHydrationWarning
      className={cn(poppins.className, "transition-colors")}
    >
      <Head
        // ... Your additional head options
        color={{
          hue: 0,
          saturation: 100,
          lightness: {
            light: 42,
            dark: 62,
          },
        }}
        // backgroundColor={{
        //   light: "#00ad",
        //   dark: "#f00",
        // }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body>
          {/* <Layout
            banner={banner}
            navbar={navbar}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/thedanieljlewis/podcasting2.org/tree/master"
            footer={footer}
            // ... Your additional layout options
          > */}
          {children}
          {/* </Layout> */}
        </body>
      </PHProvider>
    </html>
  );
}
