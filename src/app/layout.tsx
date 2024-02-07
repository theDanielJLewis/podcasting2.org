import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcasting 2.0",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:dark">
      <body
        suppressHydrationWarning={true}
        className={
          openSans.className + " flex min-h-screen flex-col transition-colors"
        }
      >
        <Header />
        <div className="flex shrink grow overflow-hidden text-slate-800 dark:bg-slate-900 dark:text-slate-100">
          <main className="container mx-auto bg-gradient-to-br from-blue-950/50 to-transparent p-4 lg:px-8 ">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
