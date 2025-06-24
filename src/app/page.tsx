// src/app/page.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Artistly - Home",
  description: "Discover top-performing artists for your events.",
};

export default function Home() {
  const categories = ["Singers", "Dancers", "Speakers", "Musicians", "Actors", "Comedians", "Magicians"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Welcome to Artistly
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
          Connect with singers, dancers, speakers, musicians, actors, comedians, and magicians for your events.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link
              href={`/artists?category=${category.toLowerCase()}`}
              key={category}
              className="block"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {category}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
                  Explore top {category.toLowerCase()} for your events.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}