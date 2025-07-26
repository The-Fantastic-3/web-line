import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen flex-col">
      <Head />
      <main className="container mx-auto max-w-7xl flex-grow px-6">
        {children}
      </main>
    </div>
  );
}
