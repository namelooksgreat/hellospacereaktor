import React from "react";
import { cn } from "@/lib/utils";

// Badge variants
export type BadgeVariant =
  | "primary" // Blue badge
  | "secondary" // Teal badge
  | "tertiary" // Peach badge
  | "accent" // Cream badge
  | "outline" // Outlined badge
  | "ghost"; // Ghost badge

// Badge sizes
export type BadgeSize = "sm" | "md" | "lg";

// Badge props
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: "default" | "full";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

// Badge component
export const Badge = ({
  variant = "primary",
  size = "md",
  rounded = "default",
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: BadgeProps) => {
  // Variant styles
  const variantStyles = {
    primary: `bg-corporate-blue/10 text-corporate-blue`,
    secondary: `bg-corporate-teal/10 text-corporate-teal`,
    tertiary: `bg-corporate-peach/10 text-corporate-peach`,
    accent: `bg-corporate-cream/10 text-corporate-blue`,
    outline: `bg-transparent border border-gray-300 text-gray-700`,
    ghost: `bg-gray-100 text-gray-700`,
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-sm px-3 py-1",
  };

  // Rounded styles
  const roundedStyles = {
    default: "rounded-md",
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
      {icon && iconPosition === "left" && (
        <span className="mr-1.5 flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-1.5 flex-shrink-0">{icon}</span>
      )}
    </div>
  );
};

// Status Badge component
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
  // Status styles mapping
  const statusStyles = {
    success: `bg-corporate-teal/10 text-corporate-teal`,
    warning: `bg-corporate-cream/10 text-amber-700`,
    error: `bg-corporate-peach/10 text-corporate-peach`,
    info: `bg-corporate-blue/10 text-corporate-blue`,
    neutral: `bg-gray-100 text-gray-700`,
  };

  // Status indicator
  const StatusIndicator = () => (
    <span
      className={cn(
        "w-2 h-2 rounded-full mr-1.5",
        status === "success" && "bg-corporate-teal",
        status === "warning" && "bg-amber-500",
        status === "error" && "bg-corporate-peach",
        status === "info" && "bg-corporate-blue",
        status === "neutral" && "bg-gray-400",
      )}
    />
  );

  return (
    <Badge
      variant="primary" // This will be overridden
      size={size}
      rounded={rounded}
      className={cn(statusStyles[status], className)}
      icon={<StatusIndicator />}
      iconPosition="left"
      {...props}
    >
      {children}
    </Badge>
  );
};

// Counter Badge component
export interface CounterBadgeProps extends Omit<BadgeProps, "children"> {
  count: number;
  max?: number;
}

export const CounterBadge = ({
  count,
  max = 99,
  variant = "primary",
  size = "sm",
  rounded = "full",
  className,
  ...props
}: CounterBadgeProps) => {
  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <Badge
      variant={variant}
      size={size}
      rounded={rounded}
      className={cn("min-w-[1.5rem] text-center justify-center", className)}
      {...props}
    >
      {displayCount}
    </Badge>
  );
};
