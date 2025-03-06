import React from "react";
import { cn } from "@/lib/utils";

// Badge variants
export type BadgeVariant =
  | "primary" // Blue badge
  | "secondary" // Teal badge
  | "tertiary" // Peach badge
  | "outline" // Outlined badge
  | "ghost"; // Ghost badge

// Badge sizes
export type BadgeSize = "sm" | "md" | "lg";

// Badge props
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: "default" | "full";
  className?: string;
  children: React.ReactNode;
}

// Badge component
export const Badge = ({
  variant = "primary",
  size = "md",
  rounded = "full",
  className,
  children,
  ...props
}: BadgeProps) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue/10 text-corporate-blue",
    secondary: "bg-corporate-teal/10 text-corporate-teal",
    tertiary: "bg-corporate-peach/10 text-corporate-peach",
    outline: "bg-transparent border border-gray-300 text-gray-700",
    ghost: "bg-gray-100 text-gray-700",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1",
  };

  // Rounded styles
  const roundedStyles = {
    default: "rounded",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center font-medium",
        variantStyles[variant],
        sizeStyles[size],
        roundedStyles[rounded],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Status badge component
export interface StatusBadgeProps extends Omit<BadgeProps, "variant"> {
  status: "success" | "warning" | "error" | "info" | "neutral";
}

export const StatusBadge = ({
  status,
  size = "md",
  rounded = "full",
  className,
  children,
  ...props
}: StatusBadgeProps) => {
  // Status styles
  const statusStyles = {
    success: "bg-corporate-teal/10 text-corporate-teal",
    warning: "bg-corporate-peach/10 text-corporate-peach",
    error: "bg-red-100 text-red-700",
    info: "bg-corporate-blue/10 text-corporate-blue",
    neutral: "bg-gray-100 text-gray-700",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1",
  };

  // Rounded styles
  const roundedStyles = {
    default: "rounded",
    full: "rounded-full",
  };

  // Dot size styles
  const dotSizeStyles = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center font-medium",
        statusStyles[status],
        sizeStyles[size],
        roundedStyles[rounded],
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "rounded-full mr-1.5",
          dotSizeStyles[size],
          status === "success" && "bg-corporate-teal",
          status === "warning" && "bg-corporate-peach",
          status === "error" && "bg-red-500",
          status === "info" && "bg-corporate-blue",
          status === "neutral" && "bg-gray-500",
        )}
      />
      {children}
    </div>
  );
};

// Counter badge component
export interface CounterBadgeProps extends Omit<BadgeProps, "children"> {
  count: number;
  max?: number;
}

export const CounterBadge = ({
  count,
  max = 99,
  variant = "primary",
  size = "md",
  rounded = "full",
  className,
  ...props
}: CounterBadgeProps) => {
  // Format count with max
  const formattedCount = count > max ? `${max}+` : count.toString();

  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white",
    secondary: "bg-corporate-teal text-white",
    tertiary: "bg-corporate-peach text-white",
    outline: "bg-transparent border border-gray-300 text-gray-700",
    ghost: "bg-gray-100 text-gray-700",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs min-w-[1.25rem] h-5",
    md: "text-sm min-w-[1.5rem] h-6",
    lg: "text-base min-w-[1.75rem] h-7",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-medium px-1",
        variantStyles[variant],
        sizeStyles[size],
        "rounded-full",
        className,
      )}
      {...props}
    >
      {formattedCount}
    </div>
  );
};
