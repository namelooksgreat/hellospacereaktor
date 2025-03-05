import React from "react";
import { cn } from "@/lib/utils";
import { Button, GradientButton } from "../components/buttons";
import { Card } from "../components/cards";

// CTA section variants
export type CTASectionVariant =
  | "default" // Default CTA with title, description and button
  | "split" // Split CTA with image and content
  | "card" // Card CTA with background
  | "banner" // Banner CTA that spans full width
  | "minimal"; // Minimal CTA with simple layout

// CTA section props
export interface CTASectionProps {
  variant?: CTASectionVariant;
  title: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}

// CTA section component
export const CTASection = ({
  variant = "default",
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "CTA image",
  backgroundColor,
  textColor,
  className,
  children,
  ...props
}: CTASectionProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Render the appropriate CTA section variant
  switch (variant) {
    case "split":
      return (
        <SplitCTASection
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          image={image}
          imageAlt={imageAlt}
          backgroundColor={backgroundColor}
          textColor={textColor}
          className={className}
          {...props}
        >
          {children}
        </SplitCTASection>
      );
    case "card":
      return (
        <CardCTASection
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          backgroundColor={backgroundColor}
          textColor={textColor}
          className={className}
          {...props}
        >
          {children}
        </CardCTASection>
      );
    case "banner":
      return (
        <BannerCTASection
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          backgroundColor={backgroundColor}
          textColor={textColor}
          className={className}
          {...props}
        >
          {children}
        </BannerCTASection>
      );
    case "minimal":
      return (
        <MinimalCTASection
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          backgroundColor={backgroundColor}
          textColor={textColor}
          className={className}
          {...props}
        >
          {children}
        </MinimalCTASection>
      );
    default:
      return (
        <DefaultCTASection
          title={title}
          description={description}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          backgroundColor={backgroundColor}
          textColor={textColor}
          className={className}
          {...props}
        >
          {children}
        </DefaultCTASection>
      );
  }
};

// Default CTA Section
const DefaultCTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundColor = "bg-corporate-blue",
  textColor = "text-white",
  className,
  children,
  ...props
}: CTASectionProps) => {
  return (
    <section
      className={cn("py-16 md:py-24", backgroundColor, textColor, className)}
      {...props}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          {description && (
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button
                variant="secondary"
                size="lg"
                rounded="full"
                className="shadow-lg shadow-corporate-teal/20"
              >
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                rounded="full"
                className="border-white/30 hover:bg-white/10 text-white"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

// Split CTA Section
const SplitCTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "CTA image",
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  className,
  children,
  ...props
}: CTASectionProps) => {
  return (
    <section
      className={cn("py-16 md:py-24", backgroundColor, textColor, className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            {description && (
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button variant="primary" size="lg" rounded="full">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" size="lg" rounded="full">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
            {children}
          </div>
          <div>
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            ) : (
              <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Card CTA Section
const CardCTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-900",
  className,
  children,
  ...props
}: CTASectionProps) => {
  return (
    <section
      className={cn("py-16 md:py-24", backgroundColor, textColor, className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            {description && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <GradientButton size="lg" rounded="full">
                  {primaryCta.text}
                </GradientButton>
              )}
              {secondaryCta && (
                <Button variant="outline" size="lg" rounded="full">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
            {children}
          </div>
        </Card>
      </div>
    </section>
  );
};

// Banner CTA Section
const BannerCTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundColor = "bg-corporate-blue",
  textColor = "text-white",
  className,
  children,
  ...props
}: CTASectionProps) => {
  return (
    <section
      className={cn("py-12", backgroundColor, textColor, className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {description && <p className="opacity-90 mt-2">{description}</p>}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Button variant="secondary" size="lg" rounded="full">
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                rounded="full"
                className="border-white/30 hover:bg-white/10 text-white"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

// Minimal CTA Section
const MinimalCTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  className,
  children,
  ...props
}: CTASectionProps) => {
  return (
    <section
      className={cn("py-12", backgroundColor, textColor, className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          {description && <p className="text-gray-600 mb-6">{description}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button variant="primary" rounded="full">
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button variant="outline" rounded="full">
                {secondaryCta.text}
              </Button>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
