import React from "react";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import { colors } from "../core/colors";

// Button variants
export type ButtonVariant =
  | "primary" // Main CTA - Blue
  | "secondary" // Secondary CTA - Teal
  | "tertiary" // Tertiary CTA - Peach
  | "outline" // Outlined button
  | "ghost" // Ghost button
  | "link"; // Link button

// Button sizes
export type ButtonSize = "sm" | "md" | "lg" | "xl";

// Button props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: "default" | "full";
  className?: string;
  children: React.ReactNode;
}

// Button component
export const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  rounded = "default",
  className,
  children,
  ...props
}: ButtonProps) => {
  // Variant styles
  const variantStyles = {
    primary:
      "bg-corporate-blue hover:bg-blue-600 text-white shadow-md shadow-corporate-blue/20",
    secondary:
      "bg-corporate-teal hover:bg-teal-500 text-white shadow-md shadow-corporate-teal/20",
    tertiary:
      "bg-corporate-peach hover:bg-peach-400 text-gray-900 shadow-md shadow-corporate-peach/20",
    outline:
      "border border-gray-300 hover:border-corporate-blue text-corporate-blue hover:text-blue-600 hover:bg-blue-50",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    link: "text-corporate-blue hover:text-blue-600 underline underline-offset-2 p-0 h-auto shadow-none",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 h-8",
    md: "text-base px-4 py-2 h-10",
    lg: "text-lg px-6 py-3 h-12",
    xl: "text-xl px-8 py-4 h-14",
  };

  // Rounded styles
  const roundedStyles = {
    default: "rounded-md",
    full: "rounded-full",
  };

  // Loading indicator
  const LoadingSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <ShadcnButton
      className={cn(
        // Base styles
        "font-medium inline-flex items-center justify-center transition-all duration-300",
        // Variant styles
        variantStyles[variant],
        // Size styles
        sizeStyles[size],
        // Rounded styles
        roundedStyles[rounded],
        // Full width
        fullWidth && "w-full",
        // Disabled state
        props.disabled && "opacity-50 cursor-not-allowed",
        // Custom className
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </ShadcnButton>
  );
};

// Gradient Button component
export interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  hoverAnimation?: boolean;
}

export const GradientButton = ({
  gradientFrom = colors.corporate.blue,
  gradientTo = colors.blue[600],
  hoverAnimation = true,
  className,
  children,
  ...props
}: GradientButtonProps) => {
  return (
    <Button
      className={cn("relative overflow-hidden group", className)}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {props.leftIcon && <span className="mr-2">{props.leftIcon}</span>}
        {children}
        {props.rightIcon && <span className="ml-2">{props.rightIcon}</span>}
      </span>
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          hoverAnimation &&
            "-translate-x-full group-hover:translate-x-full transition-transform duration-700",
        )}
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      />
    </Button>
  );
};

// Icon Button component
export interface IconButtonProps
  extends Omit<ButtonProps, "leftIcon" | "rightIcon"> {
  icon: React.ReactNode;
  ariaLabel: string;
}

export const IconButton = ({
  icon,
  ariaLabel,
  className,
  ...props
}: IconButtonProps) => {
  // Size styles for icon buttons
  const iconSizeStyles = {
    sm: "p-1.5 h-8 w-8",
    md: "p-2 h-10 w-10",
    lg: "p-2.5 h-12 w-12",
    xl: "p-3 h-14 w-14",
  };

  return (
    <Button
      className={cn(
        "flex items-center justify-center",
        iconSizeStyles[props.size || "md"],
        className,
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </Button>
  );
};
