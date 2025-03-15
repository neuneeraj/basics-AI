import React from "react";
import { Glassmorphism } from "@/components/ui/glassmorphism";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <Glassmorphism className="px-6 py-10 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            AI &amp; ML Resources
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Discover helpful resources to accelerate your learning journey in artificial intelligence and machine learning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Resource {index + 1}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  This is a placeholder for Resource {index + 1} description. Here you'll find valuable information to enhance your understanding.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center mt-2"
                >
                  Access resource
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </Glassmorphism>
      </div>
    </div>
  );
}