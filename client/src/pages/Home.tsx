import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { LatestContentSection } from "@/components/home/LatestContentSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />
      <FeaturesSection />
      <LatestContentSection />
      <NewsletterSection />
    </div>
  );
}
