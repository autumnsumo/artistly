// src/app/layout.tsx
// Root layout for the application with theme support and artist context
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ArtistProvider } from "@/lib/ArtistContext";
import { ClientLayout } from "@/components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description: "Connect event planners with top-performing artists.",
  openGraph: {
    title: "Artistly",
    description: "Book singers, dancers, speakers, and DJs for your events.",
    url: "https://artistly-demo.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          <ArtistProvider>
            <ClientLayout>{children}</ClientLayout>
          </ArtistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}