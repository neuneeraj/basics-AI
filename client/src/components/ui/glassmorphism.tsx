import React from "react";
import "../../styles/glassmorphism.css";

interface GlassmorphismProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  horizontalEffect?: boolean;
}

export const Glassmorphism: React.FC<GlassmorphismProps> = ({
  children,
  className = "",
  fullWidth = false,
  horizontalEffect = true,
}) => {
  return (
    <div
      className={`${
        fullWidth ? "w-full" : "max-w-7xl mx-auto"
      } rounded-2xl transition-all duration-500 glassmorphism-light dark:glassmorphism-dark ${
        horizontalEffect ? "horizontal-glass" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
