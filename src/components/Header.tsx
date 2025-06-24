// src/components/Header.tsx
// Renders the navigation header with all page links and theme toggle
"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Artists" },
    { href: "/onboard", label: "Onboard" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-0">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Artistly
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={`Go to ${link.label} page`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <Button
          variant="ghost"
          className="md:hidden text-gray-900 dark:text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto flex flex-col space-y-2 py-4 px-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={toggleMenu}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Button
              variant="ghost"
              className="w-full text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                toggleMenu();
              }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <div className="flex items-center">
                  <Sun className="h-5 w-5 mr-2" /> Light Mode
                </div>
              ) : (
                <div className="flex items-center">
                  <Moon className="h-5 w-5 mr-2" /> Dark Mode
                </div>
              )}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}