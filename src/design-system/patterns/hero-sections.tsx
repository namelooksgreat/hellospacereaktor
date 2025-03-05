import React from "react";
import { cn } from "@/lib/utils";

// Hero section variants
export type HeroVariant =
  | "primary" // Blue background
  | "secondary" // Teal background
  | "tertiary" // Peach background
  | "light" // Light background
  | "dark"; // Dark background

// Hero section props
export interface HeroSectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: HeroVariant;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
  image?: React.ReactNode;
  imagePosition?: "right" | "left";
  overlay?: boolean;
  pattern?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// Hero section component
export const HeroSection = ({
  variant = "primary",
  title,
  subtitle,
  cta,
  secondaryCta,
  image,
  imagePosition = "right",
  overlay = false,
  pattern = false,
  className,
  children,
  ...props
}: HeroSectionProps) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white",
    secondary: "bg-corporate-teal text-white",
    tertiary: "bg-corporate-peach text-gray-900",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-corporate-dark text-white",
  };

  // Overlay styles
  const overlayStyles = {
    primary: "bg-corporate-blue/60",
    secondary: "bg-corporate-teal/60",
    tertiary: "bg-corporate-peach/60",
    light: "bg-white/60",
    dark: "bg-corporate-dark/80",
  };

  // Pattern styles
  const patternStyles = {
    primary: "bg-grid-white/[0.02]",
    secondary: "bg-grid-white/[0.02]",
    tertiary: "bg-grid-dark/[0.02]",
    light: "bg-grid-dark/[0.02]",
    dark: "bg-grid-white/[0.02]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-white/20 to-white/5 blur-3xl" />

        {/* Overlay */}
        {overlay && (
          <div className={cn("absolute inset-0", overlayStyles[variant])} />
        )}

        {/* Pattern */}
        {pattern && (
          <div
            className={cn(
              "absolute inset-0 bg-[length:30px_30px]",
              patternStyles[variant],
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 gap-12 items-center",
            image && "lg:grid-cols-2",
            image && imagePosition === "left" && "lg:flex-row-reverse",
          )}
        >
          {/* Text content */}
          <div className="max-w-3xl">
            {typeof title === "string" ? (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {title}
              </h1>
            ) : (
              title
            )}

            {subtitle && typeof subtitle === "string" ? (
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {subtitle}
              </p>
            ) : (
              subtitle
            )}

            {(cta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {cta && cta}
                {secondaryCta && secondaryCta}
              </div>
            )}

            {children}
          </div>

          {/* Image */}
          {image && <div className="hidden lg:block">{image}</div>}
        </div>
      </div>
    </div>
  );
};

// Centered hero section props
export interface CenteredHeroSectionProps
  extends Omit<HeroSectionProps, "imagePosition"> {
  maxWidth?: string;
}

// Centered hero section component
export const CenteredHeroSection = ({
  variant = "primary",
  title,
  subtitle,
  cta,
  secondaryCta,
  image,
  overlay = false,
  pattern = false,
  maxWidth = "max-w-4xl",
  className,
  children,
  ...props
}: CenteredHeroSectionProps) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white",
    secondary: "bg-corporate-teal text-white",
    tertiary: "bg-corporate-peach text-gray-900",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-corporate-dark text-white",
  };

  // Overlay styles
  const overlayStyles = {
    primary: "bg-corporate-blue/60",
    secondary: "bg-corporate-teal/60",
    tertiary: "bg-corporate-peach/60",
    light: "bg-white/60",
    dark: "bg-corporate-dark/80",
  };

  // Pattern styles
  const patternStyles = {
    primary: "bg-grid-white/[0.02]",
    secondary: "bg-grid-white/[0.02]",
    tertiary: "bg-grid-dark/[0.02]",
    light: "bg-grid-dark/[0.02]",
    dark: "bg-grid-white/[0.02]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-white/20 to-white/5 blur-3xl" />

        {/* Overlay */}
        {overlay && (
          <div className={cn("absolute inset-0", overlayStyles[variant])} />
        )}

        {/* Pattern */}
        {pattern && (
          <div
            className={cn(
              "absolute inset-0 bg-[length:30px_30px]",
              patternStyles[variant],
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={cn("mx-auto", maxWidth)}>
          {/* Title */}
          {typeof title === "string" ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              {title}
            </h1>
          ) : (
            title
          )}

          {/* Subtitle */}
          {subtitle && typeof subtitle === "string" ? (
            <p className="text-xl opacity-90 mb-8 leading-relaxed mx-auto max-w-3xl">
              {subtitle}
            </p>
          ) : (
            subtitle
          )}

          {/* CTAs */}
          {(cta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              {cta && cta}
              {secondaryCta && secondaryCta}
            </div>
          )}

          {/* Additional content */}
          {children}

          {/* Image */}
          {image && <div className="mt-12">{image}</div>}
        </div>
      </div>
    </div>
  );
};

// Split hero section component
export const SplitHeroSection = ({
  variant = "primary",
  title,
  subtitle,
  cta,
  secondaryCta,
  image,
  imagePosition = "right",
  overlay = false,
  pattern = false,
  className,
  children,
  ...props
}: HeroSectionProps) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white",
    secondary: "bg-corporate-teal text-white",
    tertiary: "bg-corporate-peach text-gray-900",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-corporate-dark text-white",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Content side */}
        <div
          className={cn(
            "flex items-center justify-center p-8 md:p-12 lg:p-16",
            imagePosition === "left" ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div className="max-w-xl">
            {typeof title === "string" ? (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                {title}
              </h1>
            ) : (
              title
            )}

            {subtitle && typeof subtitle === "string" ? (
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                {subtitle}
              </p>
            ) : (
              subtitle
            )}

            {(cta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {cta && cta}
                {secondaryCta && secondaryCta}
              </div>
            )}

            {children}
          </div>
        </div>

        {/* Image side */}
        <div
          className={cn(
            "relative w-full min-h-[300px] lg:min-h-full",
            imagePosition === "left" ? "lg:order-1" : "lg:order-2",
          )}
        >
          {image ? (
            <div className="absolute inset-0 w-full h-full">{image}</div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/80 to-corporate-teal/80" />
          )}
        </div>
      </div>
    </div>
  );
};

// Space-themed hero section
export const SpaceThemeHeroSection = ({
  title,
  subtitle,
  cta,
  secondaryCta,
  className,
  children,
  ...props
}: Omit<
  HeroSectionProps,
  "variant" | "image" | "imagePosition" | "overlay" | "pattern"
>) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-[#0a0a2e] via-[#1a1a4a] to-[#0f0f35] text-white",
        className,
      )}
      {...props}
    >
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {/* This would be implemented with actual stars in a real component */}
        <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-30" />
      </div>

      {/* Animated space elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Planet */}
        <div className="absolute -top-20 right-[15%] opacity-20">
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-corporate-teal via-blue-500 to-corporate-blue animate-float">
            <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.3)] blur-[2px] transform rotate-45"></div>
          </div>
        </div>

        {/* Comet */}
        <div className="absolute top-[15%] right-[20%] z-0 animate-comet">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-white to-transparent transform -rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        {typeof title === "string" ? (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            {title}
          </h1>
        ) : (
          title
        )}

        {/* Subtitle */}
        {subtitle && typeof subtitle === "string" ? (
          <p className="text-xl opacity-90 mb-8 leading-relaxed mx-auto max-w-3xl">
            {subtitle}
          </p>
        ) : (
          subtitle
        )}

        {/* CTAs */}
        {(cta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {cta && cta}
            {secondaryCta && secondaryCta}
          </div>
        )}

        {/* Additional content */}
        {children}
      </div>
    </div>
  );
};
