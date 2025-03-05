import React from "react";
import { Rocket, Star, Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  className?: string;
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  className,
  message = "Yükleniyor...",
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-corporate-blue via-corporate-blue/95 to-corporate-blue/90 text-white",
        className,
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl" />
        <div className="absolute top-[20%] left-[15%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-corporate-blue/10 to-corporate-peach/10 blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with animation */}
        <div className="mb-8 relative">
          <div className="absolute -inset-6 rounded-full bg-corporate-teal/10 animate-pulse duration-2000" />
          <img
            src="/Hellospace-Logo-Site.png"
            alt="Hellospace"
            className="h-20 w-auto animate-float"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Loading spinner */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full bg-corporate-peach/10 animate-pulse duration-3000" />
          <div className="relative">
            <Loader2 className="h-12 w-12 text-corporate-teal animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-corporate-peach animate-pulse" />
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-corporate-cream text-lg font-medium mb-2">
          {message}
        </p>
        <p className="text-corporate-cream/70 text-sm max-w-xs text-center">
          Uzay yolculuğunuz başlıyor, lütfen bekleyin...
        </p>

        {/* Animated elements */}
        <div className="absolute top-1/4 right-1/4">
          <Star
            className="h-6 w-6 text-corporate-peach/40 animate-float"
            style={{ animationDuration: "4s", animationDelay: "0.5s" }}
          />
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <Sparkles
            className="h-8 w-8 text-corporate-teal/40 animate-float"
            style={{ animationDuration: "5s", animationDelay: "1s" }}
          />
        </div>
        <div className="absolute top-1/3 left-1/4">
          <Rocket
            className="h-7 w-7 text-corporate-cream/40 animate-float"
            style={{ animationDuration: "4.5s", animationDelay: "0.7s" }}
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 md:w-80">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-corporate-teal via-corporate-peach to-corporate-teal rounded-full animate-progress" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
