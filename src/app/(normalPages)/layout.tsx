export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex shrink grow overflow-hidden bg-gradient-to-br from-blue-50 to-transparent text-slate-800 dark:bg-slate-900 dark:from-blue-950/50 dark:text-slate-100">
      <main className="container mx-auto p-4 lg:px-8">{children}</main>
    </div>
  );
}
