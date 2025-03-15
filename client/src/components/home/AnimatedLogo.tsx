import React, { useEffect, useState } from "react";
import { Brain } from "lucide-react";

export const AnimatedLogo: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<"circuit" | "brain">("circuit");
  const [bounceState, setBounceState] = useState<"none" | "up" | "down">("none");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const animationCycle = () => {
      // Start with subtle down bounce
      setBounceState("down");
      
      // After small delay, transition to upward bounce
      setTimeout(() => {
        setBounceState("up");
        // Add pulse effect just before transition
        setPulse(true);
        
        setTimeout(() => {
          setPulse(false);
        }, 300);
      }, 400);
      
      // Switch icons when bouncing up for smoothest effect
      setTimeout(() => {
        setActiveIcon((prev) => (prev === "circuit" ? "brain" : "circuit"));
        
        // Small bounce down after switch
        setTimeout(() => {
          setBounceState("down");
          
          // Return to neutral position
          setTimeout(() => {
            setBounceState("none");
          }, 400);
        }, 400);
      }, 800);
    };

    // Run animation every 3 seconds (show each icon for ~2.5s)
    const intervalId = setInterval(animationCycle, 3000);

    // Start first cycle
    animationCycle();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Get bounce animation class based on current state
  const getBounceClass = () => {
    switch (bounceState) {
      case "up":
        return "logo-bounce-up";
      case "down":
        return "logo-bounce-down";
      default:
        return "";
    }
  };

  return (
    <div className="relative h-24 w-24 mx-auto">
      <div 
        className={`absolute inset-0 transition-transform duration-500 ${pulse ? 'scale-110 opacity-30' : 'scale-100 opacity-0'}`}
        style={{ 
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
          borderRadius: '50%'
        }}
      />
      <div className={`relative h-full w-full bounce-transition ${getBounceClass()}`}>
        {/* Circuit Icon - Closely matching the provided circuit board image */}
        <div
          className={`absolute inset-0 flex items-center justify-center text-blue-500 ultra-smooth-transition
            ${activeIcon === "circuit" 
              ? "opacity-100 transform scale-100" 
              : "opacity-0 transform scale-97 pointer-events-none"}`}
        >
          <svg 
            viewBox="0 0 240 240" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full"
          >
            {/* Central circle - the main feature of the logo */}
            <circle 
              cx="120" 
              cy="120" 
              r="40" 
              stroke="currentColor" 
              strokeWidth="6" 
              fill="none" 
            />
            
            {/* Horizontal connections */}
            <line x1="20" y1="120" x2="80" y2="120" stroke="currentColor" strokeWidth="5" />
            <line x1="160" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="5" />
            
            {/* Vertical connections */}
            <line x1="120" y1="20" x2="120" y2="80" stroke="currentColor" strokeWidth="5" />
            <line x1="120" y1="160" x2="120" y2="220" stroke="currentColor" strokeWidth="5" />
            
            {/* Diagonal lines at 45 degrees - top left */}
            <line x1="48" y1="48" x2="90" y2="90" stroke="currentColor" strokeWidth="5" />
            <line x1="35" y1="70" x2="70" y2="95" stroke="currentColor" strokeWidth="5" />
            
            {/* Diagonal lines - top right */}
            <line x1="192" y1="48" x2="150" y2="90" stroke="currentColor" strokeWidth="5" />
            <line x1="205" y1="70" x2="170" y2="95" stroke="currentColor" strokeWidth="5" />
            
            {/* Diagonal lines - bottom left */}
            <line x1="48" y1="192" x2="90" y2="150" stroke="currentColor" strokeWidth="5" />
            <line x1="35" y1="170" x2="70" y2="145" stroke="currentColor" strokeWidth="5" />
            
            {/* Diagonal lines - bottom right */}
            <line x1="192" y1="192" x2="150" y2="150" stroke="currentColor" strokeWidth="5" />
            <line x1="205" y1="170" x2="170" y2="145" stroke="currentColor" strokeWidth="5" />
            
            {/* Additional connections to match the example image */}
            <line x1="60" y1="60" x2="60" y2="20" stroke="currentColor" strokeWidth="5" />
            <line x1="180" y1="60" x2="180" y2="20" stroke="currentColor" strokeWidth="5" />
            <line x1="60" y1="180" x2="60" y2="220" stroke="currentColor" strokeWidth="5" />
            <line x1="180" y1="180" x2="180" y2="220" stroke="currentColor" strokeWidth="5" />
            
            {/* Endpoint dots/circles - cardinal directions - 3x larger */}
            <circle cx="20" cy="120" r="15" fill="currentColor" />
            <circle cx="220" cy="120" r="15" fill="currentColor" />
            <circle cx="120" cy="20" r="15" fill="currentColor" />
            <circle cx="120" cy="220" r="15" fill="currentColor" />
            
            {/* Endpoint dots - corner points - 3x larger */}
            <circle cx="48" cy="48" r="15" fill="currentColor" />
            <circle cx="192" cy="48" r="15" fill="currentColor" />
            <circle cx="48" cy="192" r="15" fill="currentColor" />
            <circle cx="192" cy="192" r="15" fill="currentColor" />
            
            {/* Additional endpoint dots to match example image - 3x larger */}
            <circle cx="60" cy="20" r="12" fill="currentColor" />
            <circle cx="180" cy="20" r="12" fill="currentColor" />
            <circle cx="60" cy="220" r="12" fill="currentColor" />
            <circle cx="180" cy="220" r="12" fill="currentColor" />
            <circle cx="35" cy="70" r="12" fill="currentColor" />
            <circle cx="205" cy="70" r="12" fill="currentColor" />
            <circle cx="35" cy="170" r="12" fill="currentColor" />
            <circle cx="205" cy="170" r="12" fill="currentColor" />
            
            {/* Add subtle glowing effect to circuit nodes */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feFlood floodColor="#3b82f6" floodOpacity="0.5" result="glowColor"/>
                <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                <feMerge>
                  <feMergeNode in="softGlow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Applying glow effect to central circle */}
            <circle 
              cx="120" 
              cy="120" 
              r="44" 
              fill="none" 
              stroke="rgba(59, 130, 246, 0.3)" 
              strokeWidth="4"
              filter="url(#glow)" 
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
          <div className="relative">
            <Brain className="w-full h-full filter drop-shadow-lg" strokeWidth={1.5} />
            {/* Subtle glow effect around brain icon */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
                borderRadius: '50%',
                transform: 'scale(1.2)',
                filter: 'blur(8px)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};