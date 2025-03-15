import React, { useState } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "../ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Glassmorphism } from "../ui/glassmorphism";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 py-3 px-4 md:px-6 transition-all duration-300">
      <Glassmorphism className="py-3 px-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center text-blue-500 dark:text-blue-400 font-bold text-2xl">
              basics-AI
            </a>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
            </Link>
            <Link href="/topics">
              <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Topics
              </a>
            </Link>
            <Link href="/resources">
              <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Resources
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                About
              </a>
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
              <Link href="/">
                <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Home
                </a>
              </Link>
              <Link href="/topics">
                <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Topics
                </a>
              </Link>
              <Link href="/resources">
                <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Resources
                </a>
              </Link>
              <Link href="/about">
                <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
              </Link>
            </nav>
          </div>
        )}
      </Glassmorphism>
    </header>
  );
};
