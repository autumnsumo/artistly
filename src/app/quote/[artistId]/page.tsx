// src/app/quote/[artistId]/page.tsx
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { mockArtists } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artistly - Request Quote",
  description: "Request a quote for an artist.",
};

export default function QuotePage({
  params,
}: {
  params: { artistId: string };
}) {
  const artist = mockArtists.find((a) => a.id === params.artistId);

  if (!artist) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Request Quote for {artist.name}
        </h1>
        <QuoteForm />
      </main>
    </div>
  );
}