"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";
import { ArtistCard } from "@/components/ArtistCard";
import { useArtists } from "@/lib/ArtistContext";
import { useSearchParams } from "next/navigation";
import FilterBlock from "@/components/FilterBlock"

export function ArtistsClient() {
  const artists = useArtists();
  const [filter, setFilter] = useState({ category: "all" });
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      if (["Singer", "Dancer", "Speaker", "Musician", "Actor", "Comedian", "Magician"].includes(normalizedCategory)) {
        setFilter({ category: normalizedCategory });
      }
    }
  }, [searchParams]);

  const filteredArtists =
    filter.category === "all"
      ? artists
      : artists.filter((artist) => artist.category === filter.category);

  return (
    <div className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Our Artists
      </h1>
      <Suspense fallback={<div className="text-gray-700 dark:text-gray-300">Loading filters...</div>}>
        <FilterBlock filter={filter} setFilter={setFilter} />
      </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">
            No artists found for this category.
          </p>
        )}
      </div>
    </div>
  );
}