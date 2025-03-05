import React from "react";
import { cn } from "@/lib/utils";

// Card variants
export type CardVariant =
  | "default" // Default card
  | "primary" // Primary branded card
  | "secondary" // Secondary branded card
  | "tertiary" // Tertiary branded card
  | "outline" // Outlined card
  | "ghost" // Ghost card
  | "split" // Split card for form layouts
  | "card" // Card form layout
  | "floating" // Floating form layout
  | "compact"; // Compact form layout

// Card sizes
export type CardSize = "sm" | "md" | "lg";

// Card props
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  hover?: boolean;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Card component
export const Card = ({
  variant = "default",
  size = "md",
  hover = false,
  interactive = false,
  className,
  children,
  ...props
}: CardProps) => {
  // Variant styles
  const variantStyles = {
    default: "bg-white border border-gray-200 shadow-sm",
    primary: "bg-white border border-corporate-blue/20 shadow-sm",
    secondary: "bg-white border border-corporate-teal/20 shadow-sm",
    tertiary: "bg-white border border-corporate-peach/20 shadow-sm",
    outline: "bg-transparent border border-gray-300",
    ghost: "bg-gray-50 border border-transparent",
  };

  // Size styles
  const sizeStyles = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  // Hover styles
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    : "";

  // Interactive styles
  const interactiveStyles = interactive ? "cursor-pointer" : "";

  return (
    <div
      className={cn(
        "rounded-xl",
        variantStyles[variant],
        sizeStyles[size],
        hoverStyles,
        interactiveStyles,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>
      {children}
    </div>
  );
};

// Card Title component
export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle = ({
  className,
  children,
  ...props
}: CardTitleProps) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

// Card Description component
export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription = ({
  className,
  children,
  ...props
}: CardDescriptionProps) => {
  return (
    <p className={cn("text-sm text-gray-500", className)} {...props}>
      {children}
    </p>
  );
};

// Card Content component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

// Card Footer component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter = ({
  className,
  children,
  ...props
}: CardFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center mt-4 pt-4 border-t border-gray-200",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Feature Card component
export interface FeatureCardProps extends CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  action,
  variant = "default",
  size = "md",
  hover = true,
  interactive = false,
  className,
  ...props
}: FeatureCardProps) => {
  // Icon background styles based on variant
  const iconBgStyles = {
    default: "bg-gray-100",
    primary: "bg-corporate-blue/10",
    secondary: "bg-corporate-teal/10",
    tertiary: "bg-corporate-peach/10",
    outline: "bg-gray-100",
    ghost: "bg-gray-200",
  };

  // Icon text styles based on variant
  const iconTextStyles = {
    default: "text-gray-700",
    primary: "text-corporate-blue",
    secondary: "text-corporate-teal",
    tertiary: "text-corporate-peach",
    outline: "text-gray-700",
    ghost: "text-gray-700",
  };

  return (
    <Card
      variant={variant}
      size={size}
      hover={hover}
      interactive={interactive}
      className={className}
      {...props}
    >
      {icon && (
        <div className="mb-4">
          <div
            className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center",
              iconBgStyles[variant],
              iconTextStyles[variant],
            )}
          >
            {icon}
          </div>
        </div>
      )}
      <CardTitle className="mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {action && <div className="mt-4">{action}</div>}
    </Card>
  );
};

// Stat Card component
export interface StatCardProps extends CardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    trend: "up" | "down" | "neutral";
  };
  icon?: React.ReactNode;
}

export const StatCard = ({
  title,
  value,
  change,
  icon,
  variant = "default",
  size = "md",
  hover = false,
  className,
  ...props
}: StatCardProps) => {
  // Trend color styles
  const trendStyles = {
    up: "text-corporate-teal",
    down: "text-corporate-peach",
    neutral: "text-gray-500",
  };

  return (
    <Card
      variant={variant}
      size={size}
      hover={hover}
      className={className}
      {...props}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {change && (
            <p
              className={cn(
                "text-sm mt-1 flex items-center",
                trendStyles[change.trend],
              )}
            >
              {change.trend === "up" && "↑"}
              {change.trend === "down" && "↓"}
              {change.trend === "neutral" && "→"}
              <span className="ml-1">{change.value}</span>
            </p>
          )}
        </div>
        {icon && (
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              variant === "primary" &&
                "bg-corporate-blue/10 text-corporate-blue",
              variant === "secondary" &&
                "bg-corporate-teal/10 text-corporate-teal",
              variant === "tertiary" &&
                "bg-corporate-peach/10 text-corporate-peach",
              variant === "default" && "bg-gray-100 text-gray-700",
              variant === "outline" && "bg-gray-100 text-gray-700",
              variant === "ghost" && "bg-gray-200 text-gray-700",
            )}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
