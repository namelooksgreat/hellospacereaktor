import React from "react";
import { cn } from "@/lib/utils";
import LoadingSpinner from "./loading-spinner";

interface LoadingOverlayProps {
  className?: string;
  message?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  spinnerSize?: "sm" | "md" | "lg" | "xl";
  spinnerColor?: "default" | "teal" | "peach" | "blue" | "cream" | "white";
  blur?: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  className,
  message,
  isLoading = true,
  children,
  spinnerSize = "lg",
  spinnerColor = "teal",
  blur = true,
}) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="relative">
      {children && <div className={blur ? "blur-sm" : ""}>{children}</div>}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-corporate-blue/50 backdrop-blur-sm z-50",
          className,
        )}
      >
        <LoadingSpinner size={spinnerSize} color={spinnerColor} />
        {message && (
          <p className="mt-4 text-white font-medium text-center px-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;
