import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "../ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Glassmorphism } from "../ui/glassmorphism";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => {
    return location === path;
  };

  // Generate nav link classes based on active state
  const getNavLinkClass = (path: string) => {
    return `nav-link text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all px-1 py-1 ${isActive(path) ? "active" : ""}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 py-3 px-4 md:px-6 transition-all duration-300">
      <Glassmorphism className="py-3 px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-blue-500 dark:text-blue-400 font-bold text-2xl hover:scale-105 transition-transform">
            <span className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors">basics-AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            <Link href="/topics" className={getNavLinkClass("/topics")}>
              Topics
            </Link>
            <Link href="/resources" className={getNavLinkClass("/resources")}>
              Resources
            </Link>
            <Link href="/about" className={getNavLinkClass("/about")}>
              About
            </Link>
          </div>

          <div className="flex items-center">
            <ThemeToggle />

            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={getNavLinkClass("/")}>
                Home
              </Link>
              <Link href="/topics" className={getNavLinkClass("/topics")}>
                Topics
              </Link>
              <Link href="/resources" className={getNavLinkClass("/resources")}>
                Resources
              </Link>
              <Link href="/about" className={getNavLinkClass("/about")}>
                About
              </Link>
            </nav>
          </div>
        )}
      </Glassmorphism>
    </header>
  );
};
