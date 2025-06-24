// src/components/Footer.tsx
// Reusable footer component
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </footer>
  );
}