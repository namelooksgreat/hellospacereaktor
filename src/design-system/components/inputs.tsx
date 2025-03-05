import React from "react";
import { cn } from "@/lib/utils";

// Input variants
export type InputVariant =
  | "default" // Default input
  | "filled" // Filled input
  | "outline" // Outlined input
  | "underline" // Underlined input
  | "unstyled"; // Unstyled input

// Input sizes
export type InputSize = "sm" | "md" | "lg";

// Input props
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?: string;
}

// Input component
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      icon,
      iconPosition = "left",
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    // Variant styles
    const variantStyles: Record<string, string> = {
      default:
        "bg-white border border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      filled:
        "bg-gray-100 border border-transparent focus:bg-white focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      outline:
        "bg-transparent border border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      underline:
        "bg-transparent border-0 border-b border-gray-300 rounded-none focus:border-corporate-blue focus:ring-0",
      unstyled: "bg-transparent border-0 shadow-none focus:ring-0",
    };

    // Size styles
    const sizeStyles = {
      sm: "h-8 text-sm px-2",
      md: "h-10 text-base px-3",
      lg: "h-12 text-lg px-4",
    };

    // Icon padding styles
    const iconPaddingStyles = {
      left: {
        sm: "pl-7",
        md: "pl-9",
        lg: "pl-11",
      },
      right: {
        sm: "pr-7",
        md: "pr-9",
        lg: "pr-11",
      },
    };

    // Icon size styles
    const iconSizeStyles = {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };

    // Icon position styles
    const iconPositionStyles = {
      left: {
        sm: "left-2.5",
        md: "left-3",
        lg: "left-4",
      },
      right: {
        sm: "right-2.5",
        md: "right-3",
        lg: "right-4",
      },
    };

    // Error styles
    const errorStyles =
      "border-corporate-peach focus:border-corporate-peach focus:ring-corporate-peach/20";

    return (
      <div className={cn("relative", fullWidth && "w-full")}>
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              "rounded-md shadow-sm outline-none transition-colors",
              variantStyles[variant],
              sizeStyles[size],
              icon && iconPosition === "left" && iconPaddingStyles.left[size],
              icon && iconPosition === "right" && iconPaddingStyles.right[size],
              error && errorStyles,
              fullWidth && "w-full",
              className,
            )}
            {...props}
          />
          {icon && (
            <div
              className={cn(
                "absolute top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none",
                iconPositionStyles[iconPosition][size],
              )}
            >
              {React.cloneElement(icon as React.ReactElement, {
                className: cn(iconSizeStyles[size]),
              })}
            </div>
          )}
        </div>
        {error && errorMessage && (
          <p className="mt-1 text-sm text-corporate-peach">{errorMessage}</p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

// Textarea props
export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  variant?: "default" | "filled" | "outline";
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?: string;
}

// Textarea component
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "default",
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    // Variant styles
    const variantStyles: Record<string, string> = {
      default:
        "bg-white border border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      filled:
        "bg-gray-100 border border-transparent focus:bg-white focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      outline:
        "bg-transparent border border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
    };

    // Error styles
    const errorStyles =
      "border-corporate-peach focus:border-corporate-peach focus:ring-corporate-peach/20";

    return (
      <div className={cn("relative", fullWidth && "w-full")}>
        <textarea
          ref={ref}
          className={cn(
            "rounded-md shadow-sm outline-none transition-colors p-3 min-h-[100px]",
            variantStyles[variant],
            error && errorStyles,
            fullWidth && "w-full",
            className,
          )}
          {...props}
        />
        {error && errorMessage && (
          <p className="mt-1 text-sm text-corporate-peach">{errorMessage}</p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

// Select props
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: "default" | "filled" | "outline";
  size?: InputSize;
  icon?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  fullWidth?: boolean;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

// Select component
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "default",
      size = "md",
      icon,
      error = false,
      errorMessage,
      helperText,
      fullWidth = false,
      options,
      className,
      ...props
    },
    ref,
  ) => {
    // Variant styles
    const variantStyles: Record<string, string> = {
      default:
        "bg-white border border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      filled:
        "bg-gray-100 border border-transparent focus:bg-white focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
      outline:
        "bg-transparent border border-gray-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue/20",
    };

    // Size styles
    const sizeStyles = {
      sm: "h-8 text-sm pl-2 pr-8",
      md: "h-10 text-base pl-3 pr-9",
      lg: "h-12 text-lg pl-4 pr-10",
    };

    // Icon padding styles
    const iconPaddingStyles = {
      sm: "pl-7",
      md: "pl-9",
      lg: "pl-11",
    };

    // Icon size styles
    const iconSizeStyles = {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };

    // Icon position styles
    const iconPositionStyles = {
      sm: "left-2.5",
      md: "left-3",
      lg: "left-4",
    };

    // Error styles
    const errorStyles =
      "border-corporate-peach focus:border-corporate-peach focus:ring-corporate-peach/20";

    return (
      <div className={cn("relative", fullWidth && "w-full")}>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "rounded-md shadow-sm outline-none transition-colors appearance-none",
              variantStyles[variant],
              sizeStyles[size],
              icon && iconPaddingStyles[size],
              error && errorStyles,
              fullWidth && "w-full",
              className,
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {icon && (
            <div
              className={cn(
                "absolute top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none",
                iconPositionStyles[size],
              )}
            >
              {React.cloneElement(icon as React.ReactElement, {
                className: cn(iconSizeStyles[size]),
              })}
            </div>
          )}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {error && errorMessage && (
          <p className="mt-1 text-sm text-corporate-peach">{errorMessage}</p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
