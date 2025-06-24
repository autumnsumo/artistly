// src/app/artists/page.tsx
// Server Component for artist listing page metadata
import type { Metadata } from "next";
import { ArtistsClient } from "@/components/ArtistsClient";

export const metadata: Metadata = {
  title: "Artistly - Artists",
  description: "Browse and filter performing artists.",
};

export default function ArtistsPage() {
  return <ArtistsClient />;
}