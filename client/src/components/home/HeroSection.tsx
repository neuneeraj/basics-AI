import React from "react";
import { Link } from "wouter";
import { Glassmorphism } from "../ui/glassmorphism";
import { AnimatedLogo } from "./AnimatedLogo";
import { PremiumSearch } from "../ui/premium-search";

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-20 px-4 md:px-6">
      {/* Premium search bar positioned between header and hero content */}
      <div className="mb-8 relative z-10">
        <PremiumSearch />
      </div>
      
      <div className="container mx-auto text-center">
        <Glassmorphism className="px-6 py-14 mb-8">
          <div className="mb-8 flex justify-center">
            <AnimatedLogo />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-blue-500">Discover the Future</span> of AI &{" "}
            <br className="hidden md:block" />
            Machine Learning
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
            Explore groundbreaking advancements, compelling insights, and practical applications in
            the world of artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/topics" className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full btn-gradient button-shine transition-all duration-300">
              <span className="relative z-10">Explore Topics</span>
            </Link>
            <Link href="/resources" className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full btn-gradient button-shine transition-all duration-300">
              <span className="relative z-10">Resources</span>
            </Link>
          </div>
        </Glassmorphism>
      </div>
    </section>
  );
};
