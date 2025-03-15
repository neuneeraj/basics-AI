import React from "react";
import { Glassmorphism } from "../ui/glassmorphism";

export const NewsletterSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission in a real implementation
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <Glassmorphism className="max-w-3xl mx-auto px-6 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Stay Updated with AI Advancements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Subscribe to our newsletter for the latest insights, tutorials, and news in AI and
            machine learning.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </Glassmorphism>
      </div>
    </section>
  );
};
