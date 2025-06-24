import { Suspense } from "react";
import { ArtistsClient } from "@/components/ArtistsClient";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artistly - Our Artists",
  description: "Explore our talented artists for your events.",
};

export default function ArtistsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Suspense fallback={<div className="text-gray-700 dark:text-gray-300">Loading artists...</div>}>
        <ArtistsClient />
      </Suspense>
      <Footer />
    </div>
  );
}