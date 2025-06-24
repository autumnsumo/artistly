// src/components/ArtistCard.tsx
"use client";

import { memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Artist } from "@/lib/types";
import Image from "next/image";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = memo(({ artist }: ArtistCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {artist.image && (
        <Image
          src={artist.image}
          alt={`${artist.name}'s profile`}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{artist.name}</h2>
      <p className="text-gray-600 dark:text-gray-400">{artist.category}</p>
      <p className="text-gray-600 dark:text-gray-400">{artist.location}</p>
      <p className="text-gray-600 dark:text-gray-400">{artist.priceRange}</p>
      <Link href={`/quote/${artist.id}`} passHref>
        <Button
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
          aria-label={`Request a quote for ${artist.name}`}
        >
          Request Quote
        </Button>
      </Link>
    </div>
  );
});

ArtistCard.displayName = "ArtistCard";

export { ArtistCard };