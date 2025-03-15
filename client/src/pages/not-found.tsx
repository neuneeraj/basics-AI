import { AlertCircle } from "lucide-react";
import { Glassmorphism } from "@/components/ui/glassmorphism";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-16">
      <Glassmorphism className="w-full max-w-md mx-4 p-6">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 Page Not Found</h1>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/">
          <a className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
            <span>Return to Home</span>
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </a>
        </Link>
      </Glassmorphism>
    </div>
  );
}
