import React from "react";
import { Glassmorphism } from "@/components/ui/glassmorphism";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <Glassmorphism className="px-6 py-10 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About basics-AI
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Welcome to basics-AI, your trusted resource for understanding the fundamentals of Artificial Intelligence and Machine Learning. Our mission is to make AI concepts accessible to everyone, regardless of their technical background.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2023, basics-AI has been committed to demystifying complex AI terminology and providing clear, educational content for beginners and professionals alike.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                We believe that understanding AI is crucial in today's rapidly evolving technological landscape. Our team of experts works tirelessly to bring you accurate, up-to-date information on the latest advancements in the field.
              </p>
              
              <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                To create a world where artificial intelligence is understood and accessible to everyone, enabling more people to contribute to and benefit from this transformative technology.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
              
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  Have questions or feedback? We'd love to hear from you!
                </p>
                
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">contact@basics-ai.com</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">(123) 456-7890</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">123 Tech Lane, AI City, Digital Country</span>
                </div>
              </div>
            </div>
          </div>
        </Glassmorphism>
      </div>
    </div>
  );
}