import React, { useEffect, useState } from "react";
import { Brain } from "lucide-react";

export const AnimatedLogo: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<"circuit" | "brain">("circuit");
  const [animationState, setAnimationState] = useState<"idle" | "transitioning">("idle");

  useEffect(() => {
    const animationCycle = () => {
      // Start smooth transition
      setAnimationState("transitioning");
      
      // Switch icons after fade transition is halfway through for smoothest effect
      setTimeout(() => {
        setActiveIcon((prev) => (prev === "circuit" ? "brain" : "circuit"));
      }, 800); // Switch halfway through the ultra-smooth transition
      
      // End transition after full animation completes
      setTimeout(() => {
        setAnimationState("idle");
      }, 1600);
    };

    // Run animation every 2.8 seconds (show each icon for ~2.3s)
    const intervalId = setInterval(animationCycle, 2800);

    // Start first cycle
    animationCycle();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative h-20 w-20 mx-auto">
      {/* Circuit Icon - Exact match from provided image */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-blue-500 ultra-smooth-transition
          ${activeIcon === "circuit" 
            ? "opacity-100 transform scale-100" 
            : "opacity-0 transform scale-97 pointer-events-none"}`}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
        >
          {/* Square with rounded corners - matched to the provided image */}
          <rect 
            x="12" 
            y="12" 
            width="76" 
            height="76" 
            rx="10" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
          />
          
          {/* Top-left circle */}
          <circle 
            cx="33" 
            cy="33" 
            r="5" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
          />
          
          {/* Bottom-right circle */}
          <circle 
            cx="67" 
            cy="67" 
            r="5" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
          />
          
          {/* Top connection path */}
          <path 
            d="M33 33H50C60 33 67 40 67 50V67" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            strokeLinecap="round"
          />
          
          {/* Bottom connection path */}
          <path 
            d="M67 67H50C40 67 33 60 33 50V33" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brain Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-blue-500 ultra-smooth-transition
          ${activeIcon === "brain" 
            ? "opacity-100 transform scale-100" 
            : "opacity-0 transform scale-97 pointer-events-none"}`}
      >
        <Brain className="w-full h-full" strokeWidth={1.5} />
      </div>
    </div>
  );
};