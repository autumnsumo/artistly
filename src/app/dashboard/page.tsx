// src/app/dashboard/page.tsx
// Renders the manager dashboard with a table of artist submissions
import { mockArtists } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DashboardTable } from "@/components/DashboardTable";

export const metadata = {
  title: "Artistly - Manager Dashboard",
  description: "View and manage artist submissions.",
};

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Manager Dashboard
        </h1>
        <DashboardTable artists={mockArtists} />
      </main>
      <Footer />
    </div>
  );
}