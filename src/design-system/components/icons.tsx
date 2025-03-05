import React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

// Icon sizes
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Icon variants
export type IconVariant =
  | "primary" // Blue icon
  | "secondary" // Teal icon
  | "tertiary" // Peach icon
  | "accent" // Cream icon
  | "gray" // Gray icon
  | "white"; // White icon

// Icon props
export interface IconProps {
  name: keyof typeof LucideIcons;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
  strokeWidth?: number;
}

// Icon component
const Icon = ({
  name,
  size = "md",
  variant = "primary",
  className,
  strokeWidth = 2,
  ...props
}: IconProps & Omit<React.SVGProps<SVGSVGElement>, "name" | "size">) => {
  // Size styles
  const sizeStyles = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
  };

  // Variant styles
  const variantStyles = {
    primary: "text-corporate-blue",
    secondary: "text-corporate-teal",
    tertiary: "text-corporate-peach",
    accent: "text-corporate-cream",
    gray: "text-gray-500",
    white: "text-white",
  };

  // Get the Lucide icon component
  const LucideIcon = LucideIcons[name] as React.ElementType;

  if (!LucideIcon) {
    console.error(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <LucideIcon
      className={cn(sizeStyles[size], variantStyles[variant], className)}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

// Icon button props
export interface IconButtonProps {
  icon: keyof typeof LucideIcons;
  size?: IconSize;
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  rounded?: "default" | "full";
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
  disabled?: boolean;
}

// Icon button component
const IconButton = ({
  icon,
  size = "md",
  variant = "primary",
  rounded = "full",
  className,
  onClick,
  ariaLabel,
  disabled = false,
  ...props
}: IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // Size styles
  const sizeStyles = {
    xs: "p-1",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
    xl: "p-3",
    "2xl": "p-4",
  };

  // Icon size mapping
  const iconSizeMap: Record<IconSize, IconSize> = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg",
    "2xl": "xl",
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue text-white hover:bg-corporate-blue/90",
    secondary: "bg-corporate-teal text-white hover:bg-corporate-teal/90",
    tertiary: "bg-corporate-peach text-white hover:bg-corporate-peach/90",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  // Rounded styles
  const roundedStyles = {
    default: "rounded-md",
    full: "rounded-full",
  };

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        roundedStyles[rounded],
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      <Icon
        name={icon}
        size={iconSizeMap[size]}
        variant={
          variant === "primary"
            ? "white"
            : variant === "secondary"
              ? "white"
              : variant === "tertiary"
                ? "white"
                : "gray"
        }
      />
    </button>
  );
};

// Icon with background props
export interface IconWithBgProps {
  icon: keyof typeof LucideIcons;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary" | "accent" | "gray";
  rounded?: "default" | "full";
  className?: string;
}

// Icon with background component
const IconWithBg = ({
  icon,
  size = "md",
  variant = "primary",
  rounded = "full",
  className,
  ...props
}: IconWithBgProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Container size styles
  const containerSizeStyles = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  // Icon size mapping
  const iconSizeMap: Record<string, IconSize> = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-corporate-blue/10 text-corporate-blue",
    secondary: "bg-corporate-teal/10 text-corporate-teal",
    tertiary: "bg-corporate-peach/10 text-corporate-peach",
    accent: "bg-corporate-cream/10 text-corporate-blue",
    gray: "bg-gray-100 text-gray-700",
  };

  // Rounded styles
  const roundedStyles = {
    default: "rounded-md",
    full: "rounded-full",
  };

  // Icon variant mapping
  const iconVariantMap: Record<string, IconVariant> = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
    accent: "accent",
    gray: "gray",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        containerSizeStyles[size],
        variantStyles[variant],
        roundedStyles[rounded],
        className,
      )}
      {...props}
    >
      <Icon
        name={icon}
        size={iconSizeMap[size]}
        variant={iconVariantMap[variant]}
      />
    </div>
  );
};

// IconWithText component
export interface IconWithTextProps {
  icon: keyof typeof LucideIcons;
  text: string;
  variant?: IconVariant;
  iconSize?: IconSize;
  className?: string;
  textClassName?: string;
}

const IconWithText = ({
  icon,
  text,
  variant = "primary",
  iconSize = "md",
  className,
  textClassName,
  ...props
}: IconWithTextProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Icon name={icon} variant={variant} size={iconSize} className="mr-2" />
      <span className={cn("text-sm", textClassName)}>{text}</span>
    </div>
  );
};

export { Icon, IconButton, IconWithBg, IconWithText };
