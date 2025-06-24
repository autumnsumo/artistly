// src/lib/ArtistContext.tsx
// Provides global access to artist data using React Context
"use client";
import { createContext, useContext } from "react";
import { mockArtists, Artist } from "@/lib/data";

const ArtistContext = createContext<Artist[]>(mockArtists);

export const useArtists = () => useContext(ArtistContext);

export function ArtistProvider({ children }: { children: React.ReactNode }) {
  return <ArtistContext.Provider value={mockArtists}>{children}</ArtistContext.Provider>;
}