import React, { useEffect, useState } from "react";
import { Brain } from "lucide-react";

export const AnimatedLogo: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<"circuit" | "brain">("circuit");
  const [animationState, setAnimationState] = useState<"idle" | "fadeOut" | "fadeIn">("idle");

  useEffect(() => {
    // Animation cycle:
    // 1. Stay on one icon for a few seconds
    // 2. Fade out current icon + slight zoom out
    // 3. Switch icons
    // 4. Fade in new icon + slight zoom in
    // 5. Return to idle state
    // 6. Repeat

    const animationCycle = () => {
      // Start fade out
      setAnimationState("fadeOut");
      
      // After fade out, switch icons
      setTimeout(() => {
        setActiveIcon((prev) => (prev === "circuit" ? "brain" : "circuit"));
        setAnimationState("fadeIn");
        
        // After fade in, go back to idle
        setTimeout(() => {
          setAnimationState("idle");
        }, 1000);
      }, 1000);
    };

    // Run animation every 6 seconds
    const intervalId = setInterval(animationCycle, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative h-20 w-20 mx-auto">
      {/* Circuit Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-blue-500 transition-all duration-1000 ease-in-out
          ${activeIcon === "circuit" 
            ? "opacity-100 transform scale-100" 
            : "opacity-0 transform scale-95 pointer-events-none"}
          ${animationState === "fadeOut" && activeIcon === "circuit" ? "opacity-0 transform scale-95" : ""}
          ${animationState === "fadeIn" && activeIcon === "circuit" ? "opacity-100 transform scale-100" : ""}`}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          <rect 
            x="2" 
            y="2" 
            width="20" 
            height="20" 
            rx="3" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
          <circle 
            cx="7" 
            cy="7" 
            r="1.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
          <circle 
            cx="17" 
            cy="17" 
            r="1.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M7 7H12C14.2091 7 16 8.79086 16 11V17" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M17 17H12C9.79086 17 8 15.2091 8 13V7" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Brain Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-blue-500 transition-all duration-1000 ease-in-out
          ${activeIcon === "brain" 
            ? "opacity-100 transform scale-100" 
            : "opacity-0 transform scale-95 pointer-events-none"}
          ${animationState === "fadeOut" && activeIcon === "brain" ? "opacity-0 transform scale-95" : ""}
          ${animationState === "fadeIn" && activeIcon === "brain" ? "opacity-100 transform scale-100" : ""}`}
      >
        <Brain className="w-full h-full" />
      </div>
    </div>
  );
};