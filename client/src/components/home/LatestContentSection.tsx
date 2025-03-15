import React from "react";
import { Glassmorphism } from "../ui/glassmorphism";

interface ContentItem {
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export const LatestContentSection: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1677442135736-747d0bcf1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Machine Learning",
      categoryColor: "blue",
      date: "May 12, 2023",
      title: "Understanding Transformer Models in NLP",
      description:
        "Explore how transformer architecture revolutionized natural language processing and enabled breakthroughs like GPT and BERT.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Deep Learning",
      categoryColor: "green",
      date: "Apr 28, 2023",
      title: "Reinforcement Learning: Beyond the Basics",
      description:
        "Learn advanced reinforcement learning techniques that power systems from game AI to autonomous vehicles.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "AI Applications",
      categoryColor: "purple",
      date: "Apr 15, 2023",
      title: "Edge AI: Intelligence at the Device Level",
      description:
        "Discover how AI is being deployed on edge devices to enable faster, more private, and energy-efficient intelligence.",
      link: "#",
    },
  ];

  const getCategoryClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "green":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "purple":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <Glassmorphism className="px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Latest Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3 flex items-center">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryClasses(
                        item.categoryColor,
                      )}`}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                  >
                    Read more
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
              </div>
            ))}
          </div>
        </Glassmorphism>
      </div>
    </section>
  );
};
