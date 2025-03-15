import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Settings } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

type SearchEngine = "basics-ai" | "google" | "yahoo" | "bing" | "duckduckgo";

interface SearchEngineOption {
  id: SearchEngine;
  name: string;
  searchUrl: string;
}

const searchEngines: SearchEngineOption[] = [
  {
    id: "basics-ai",
    name: "Basics-AI.com",
    searchUrl: "https://basics-ai.com/search?q="
  },
  {
    id: "google",
    name: "Google",
    searchUrl: "https://www.google.com/search?q="
  },
  {
    id: "yahoo",
    name: "Yahoo",
    searchUrl: "https://search.yahoo.com/search?p="
  },
  {
    id: "bing",
    name: "Bing",
    searchUrl: "https://www.bing.com/search?q="
  },
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    searchUrl: "https://duckduckgo.com/?q="
  }
];

export const PremiumSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState<SearchEngineOption>(searchEngines[0]);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`${selectedEngine.searchUrl}${encodeURIComponent(query)}`, "_blank");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectSearchEngine = (engine: SearchEngineOption) => {
    setSelectedEngine(engine);
    setIsDropdownOpen(false);
    
    // Focus back on the search input after selection
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div 
        className={`relative flex items-center transition-all duration-500 ease-in-out
          ${theme === "dark" ? "glassmorphism-dark" : "glassmorphism-light"}
          ${isFocused ? "search-bar-focus" : ""}
          rounded-full p-1 pr-2 overflow-hidden shadow-lg`}
      >
        {/* Search icon */}
        <div className="flex-shrink-0 pl-3 pr-2">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        {/* Search input */}
        <form onSubmit={handleSearch} className="flex flex-grow items-center">
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter a keyword to analyze..."
            className={`flex-grow bg-transparent border-none outline-none py-3 px-2 text-base
              ${theme === "dark" ? "text-gray-200 placeholder-gray-400" : "text-gray-700 placeholder-gray-500"}`}
          />
          
          {/* Search engine selector button */}
          <div className="relative mr-3" ref={dropdownRef}>
            <button
              type="button"
              onClick={toggleDropdown}
              className={`flex items-center justify-center h-8 w-8 rounded-full
                ${theme === "dark" ? "bg-gray-700/50 hover:bg-gray-600/50" : "bg-gray-200/50 hover:bg-gray-300/50"}
                transition-all duration-200`}
            >
              <Settings className="h-4 w-4 text-gray-500" />
            </button>
            
            {/* Dropdown for search engines */}
            {isDropdownOpen && (
              <div 
                className={`absolute right-0 mt-2 w-56 rounded-lg shadow-lg z-10 overflow-hidden
                  ${theme === "dark" ? "glassmorphism-dark" : "glassmorphism-light"}
                  backdrop-blur-lg`}
              >
                <div className="p-2">
                  <div className="px-2 pt-2 pb-1 text-xs font-medium uppercase tracking-wider text-center border-b border-gray-500/20 mb-1">
                    SEARCH REFINEMENT
                  </div>
                  
                  <div className="p-2 space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                        </svg>
                      </span>
                      Search Engine
                    </div>
                    
                    <div className="space-y-1">
                      {searchEngines.map((engine) => (
                        <button
                          key={engine.id}
                          type="button"
                          onClick={() => selectSearchEngine(engine)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md flex items-center justify-between
                            ${selectedEngine.id === engine.id 
                              ? theme === "dark" 
                                ? "bg-blue-600/20 text-blue-400" 
                                : "bg-blue-100 text-blue-700"
                              : theme === "dark"
                                ? "hover:bg-gray-700/40 text-gray-300"
                                : "hover:bg-gray-200/60 text-gray-700"
                            }
                            transition-colors duration-150`}
                        >
                          {engine.name}
                          {selectedEngine.id === engine.id && (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Submit button with gradient */}
          <button
            type="submit"
            className={`button-shine relative rounded-full px-6 py-2.5 text-sm font-medium text-white
              transition-all duration-300 ease-in-out search-button-gradient
              hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] active:shadow-inner`}
          >
            <span className="relative z-10">Analyze</span>
          </button>
        </form>
      </div>
    </div>
  );
};