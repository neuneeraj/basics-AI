import React from "react";
import { Brain, ChartLine, CircuitBoard } from "lucide-react";
import { Glassmorphism } from "../ui/glassmorphism";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI Fundamentals",
      description: "Learn the core concepts and building blocks of artificial intelligence.",
      link: "#",
    },
    {
      icon: <ChartLine className="w-8 h-8 text-blue-500" />,
      title: "Machine Learning",
      description:
        "Discover how algorithms learn from data and make intelligent predictions.",
      link: "#",
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-blue-500" />,
      title: "Neural Networks",
      description: "Explore the brain-inspired computing systems behind deep learning.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <Glassmorphism className="px-6 py-10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Explore AI & ML Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Explore more
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
    </section>
  );
};
