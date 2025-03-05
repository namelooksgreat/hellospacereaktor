import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "default" | "teal" | "peach" | "blue" | "cream" | "white";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className,
  size = "md",
  color = "default",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  const colorClasses = {
    default: "text-corporate-blue",
    teal: "text-corporate-teal",
    peach: "text-corporate-peach",
    blue: "text-corporate-blue",
    cream: "text-corporate-cream",
    white: "text-white",
  };

  return (
    <Loader2
      className={cn(
        "animate-spin",
        sizeClasses[size],
        colorClasses[color],
        className,
      )}
    />
  );
};

export default LoadingSpinner;
