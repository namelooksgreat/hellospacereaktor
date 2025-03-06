import React from "react";
import { cn } from "@/lib/utils";

// CTA section variants
export type CTASectionVariant =
  | "primary" // Blue background
  | "secondary" // Teal background
  | "tertiary" // Peach background
  | "light" // Light background
  | "dark"; // Dark background

// CTA section props
export interface CTASectionProps {
  variant?: CTASectionVariant;
  title: string;
  description?: string;
  primaryCta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
  image?: React.ReactNode;
  imagePosition?: "right" | "left" | "background";
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// CTA section component
export const CTASection = ({
  variant = "primary",
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imagePosition = "right",
  centered = false,
  className,
  children,
  ...props
}: CTASectionProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white",
    secondary: "bg-corporate-teal text-white",
    tertiary: "bg-corporate-peach text-gray-900",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-corporate-dark text-white",
  };

  // Background gradient styles
  const gradientStyles = {
    primary:
      "bg-gradient-to-r from-corporate-blue via-corporate-blue/90 to-corporate-blue/80",
    secondary:
      "bg-gradient-to-r from-corporate-teal via-corporate-teal/90 to-corporate-teal/80",
    tertiary:
      "bg-gradient-to-r from-corporate-peach via-corporate-peach/90 to-corporate-peach/80",
    light: "bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50",
    dark: "bg-gradient-to-r from-corporate-dark via-corporate-dark/90 to-corporate-dark/80",
  };

  // Render the appropriate CTA section based on imagePosition
  if (imagePosition === "background") {
    return (
      <BackgroundImageCTASection
        variant={variant}
        title={title}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={image}
        centered={centered}
        className={className}
        {...props}
      >
        {children}
      </BackgroundImageCTASection>
    );
  }

  return (
    <section
      className={cn(
        "py-16 md:py-24 overflow-hidden",
        centered ? gradientStyles[variant] : variantStyles[variant],
        className,
      )}
      {...props}
    >
      {/* Abstract background elements for gradient version */}
      {centered && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-3xl animate-pulse duration-3000" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-white/20 to-white/5 blur-3xl animate-pulse duration-2000" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {centered ? (
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h2>
            {description && (
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                {primaryCta && primaryCta}
                {secondaryCta && secondaryCta}
              </div>
            )}
            {children}
          </div>
        ) : (
          <div
            className={cn(
              "grid grid-cols-1 gap-12 items-center",
              image && "lg:grid-cols-2",
              image &&
                imagePosition === "left" &&
                "lg:flex-row-reverse lg:[grid-template-areas:'image_content']",
            )}
          >
            {/* Text content */}
            <div
              className={cn(
                "max-w-xl",
                imagePosition === "left" ? "lg:[grid-area:content]" : "",
              )}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {title}
              </h2>
              {description && (
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  {description}
                </p>
              )}
              {(primaryCta || secondaryCta) && (
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {primaryCta && primaryCta}
                  {secondaryCta && secondaryCta}
                </div>
              )}
              {children}
            </div>

            {/* Image */}
            {image && (
              <div
                className={cn(
                  "hidden lg:block",
                  imagePosition === "left" ? "lg:[grid-area:image]" : "",
                )}
              >
                {image}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

// Background Image CTA Section
const BackgroundImageCTASection = ({
  variant = "primary",
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  centered = true,
  className,
  children,
  ...props
}: CTASectionProps) => {
  // Overlay styles
  const overlayStyles = {
    primary: "bg-corporate-blue/75",
    secondary: "bg-corporate-teal/75",
    tertiary: "bg-corporate-peach/75",
    light: "bg-white/75",
    dark: "bg-corporate-dark/75",
  };

  // Text color styles
  const textColorStyles = {
    primary: "text-white",
    secondary: "text-white",
    tertiary: "text-gray-900",
    light: "text-gray-900",
    dark: "text-white",
  };

  return (
    <section
      className={cn(
        "relative py-20 md:py-32 overflow-hidden",
        textColorStyles[variant],
        className,
      )}
      {...props}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {image ? (
          <div className="w-full h-full">{image}</div>
        ) : (
          <div className="w-full h-full bg-corporate-blue"></div>
        )}
        <div className={cn("absolute inset-0", overlayStyles[variant])}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn("max-w-3xl", centered ? "mx-auto text-center" : "ml-0")}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 mb-8",
                centered && "justify-center",
              )}
            >
              {primaryCta && primaryCta}
              {secondaryCta && secondaryCta}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

// Simple CTA section props
export interface SimpleCTASectionProps {
  title: string;
  description?: string;
  cta: React.ReactNode;
  variant?: CTASectionVariant;
  className?: string;
}

// Simple CTA section component
export const SimpleCTASection = ({
  title,
  description,
  cta,
  variant = "primary",
  className,
  ...props
}: SimpleCTASectionProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white",
    secondary: "bg-corporate-teal text-white",
    tertiary: "bg-corporate-peach text-gray-900",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-corporate-dark text-white",
  };

  return (
    <section
      className={cn("py-12 md:py-16", variantStyles[variant], className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            {description && <p className="opacity-90">{description}</p>}
          </div>
          <div className="flex-shrink-0">{cta}</div>
        </div>
      </div>
    </section>
  );
};
