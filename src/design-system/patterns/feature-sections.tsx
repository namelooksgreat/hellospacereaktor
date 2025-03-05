import React from "react";
import { cn } from "@/lib/utils";
import { FeatureCard } from "../components/cards";

// Feature section variants
export type FeatureSectionVariant =
  | "default" // Default feature section with grid layout
  | "alternating" // Alternating feature section with image and text
  | "centered" // Centered feature section with icon grid
  | "minimal"; // Minimal feature section with simple layout

// Feature section props
export interface FeatureSectionProps {
  variant?: FeatureSectionVariant;
  title: string;
  subtitle?: string;
  description?: string;
  features: FeatureItemProps[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  withBackground?: boolean;
  centered?: boolean;
}

// Feature item props
export interface FeatureItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  iconBackground?: string;
}

// Feature section component
export const FeatureSection = ({
  variant = "default",
  title,
  subtitle,
  description,
  features,
  className,
  columns = 3,
  withBackground = false,
  centered = false,
  ...props
}: FeatureSectionProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Render the appropriate feature section variant
  switch (variant) {
    case "alternating":
      return (
        <AlternatingFeatureSection
          title={title}
          subtitle={subtitle}
          description={description}
          features={features}
          className={className}
          withBackground={withBackground}
          centered={centered}
          {...props}
        />
      );
    case "centered":
      return (
        <CenteredFeatureSection
          title={title}
          subtitle={subtitle}
          description={description}
          features={features}
          className={className}
          columns={columns}
          withBackground={withBackground}
          {...props}
        />
      );
    case "minimal":
      return (
        <MinimalFeatureSection
          title={title}
          subtitle={subtitle}
          description={description}
          features={features}
          className={className}
          columns={columns}
          withBackground={withBackground}
          {...props}
        />
      );
    default:
      return (
        <DefaultFeatureSection
          title={title}
          subtitle={subtitle}
          description={description}
          features={features}
          className={className}
          columns={columns}
          withBackground={withBackground}
          centered={centered}
          {...props}
        />
      );
  }
};

// Default Feature Section
const DefaultFeatureSection = ({
  title,
  subtitle,
  description,
  features,
  className,
  columns = 3,
  withBackground = false,
  centered = false,
  ...props
}: FeatureSectionProps) => {
  // Column styles
  const columnStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        withBackground && "bg-gray-50",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "max-w-3xl",
            centered ? "mx-auto text-center" : "mb-12",
          )}
        >
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-corporate-teal mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className={cn("grid gap-8 mt-12", columnStyles[columns])}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            >
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Alternating Feature Section
const AlternatingFeatureSection = ({
  title,
  subtitle,
  description,
  features,
  className,
  withBackground = false,
  centered = false,
  ...props
}: FeatureSectionProps) => {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        withBackground && "bg-gray-50",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "max-w-3xl",
            centered ? "mx-auto text-center" : "mb-12",
          )}
        >
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-corporate-teal mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-24 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "lg:grid-flow-dense",
              )}
            >
              <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                <div className="space-y-4">
                  {feature.icon && (
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center",
                        feature.iconBackground || "bg-corporate-teal/10",
                      )}
                    >
                      <div className="text-corporate-teal">{feature.icon}</div>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className={cn(index % 2 === 1 && "lg:col-start-1")}>
                <div className="bg-gray-200 rounded-xl aspect-video overflow-hidden">
                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image Placeholder
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Centered Feature Section
const CenteredFeatureSection = ({
  title,
  subtitle,
  description,
  features,
  className,
  columns = 3,
  withBackground = false,
  ...props
}: FeatureSectionProps) => {
  // Column styles
  const columnStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        withBackground && "bg-gray-50",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-corporate-teal mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className={cn("grid gap-8", columnStyles[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              {feature.icon && (
                <div
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    feature.iconBackground || "bg-corporate-teal/10",
                  )}
                >
                  <div className="text-corporate-teal">{feature.icon}</div>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Minimal Feature Section
const MinimalFeatureSection = ({
  title,
  subtitle,
  description,
  features,
  className,
  columns = 3,
  withBackground = false,
  ...props
}: FeatureSectionProps) => {
  // Column styles
  const columnStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section
      className={cn("py-16", withBackground && "bg-gray-50", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-corporate-teal mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>

        <div className={cn("grid gap-6", columnStyles[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.icon && (
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0",
                    feature.iconBackground || "bg-corporate-teal/10",
                  )}
                >
                  <div className="text-corporate-teal">{feature.icon}</div>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
