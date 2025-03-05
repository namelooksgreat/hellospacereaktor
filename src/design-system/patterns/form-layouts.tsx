import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/cards";
import { Button } from "../components/buttons";

// Form layout variants
export type FormLayoutVariant =
  | "default" // Default form layout
  | "compact" // Compact form layout
  | "split" // Split form layout with content on the side
  | "card" // Card form layout
  | "floating"; // Floating form layout

// Form layout props
export interface FormLayoutProps {
  variant?: FormLayoutVariant;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

// Form layout component
export const FormLayout = ({
  variant = "default",
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  onSubmit,
  ...props
}: FormLayoutProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  // Render the appropriate form layout variant
  switch (variant) {
    case "compact":
      return (
        <CompactFormLayout
          title={title}
          description={description}
          footer={footer}
          className={className}
          contentClassName={contentClassName}
          headerClassName={headerClassName}
          footerClassName={footerClassName}
          onSubmit={handleSubmit}
          {...props}
        >
          {children}
        </CompactFormLayout>
      );
    case "split":
      return (
        <SplitFormLayout
          title={title}
          description={description}
          footer={footer}
          className={className}
          contentClassName={contentClassName}
          headerClassName={headerClassName}
          footerClassName={footerClassName}
          onSubmit={handleSubmit}
          {...props}
        >
          {children}
        </SplitFormLayout>
      );
    case "card":
      return (
        <CardFormLayout
          title={title}
          description={description}
          footer={footer}
          className={className}
          contentClassName={contentClassName}
          headerClassName={headerClassName}
          footerClassName={footerClassName}
          onSubmit={handleSubmit}
          {...props}
        >
          {children}
        </CardFormLayout>
      );
    case "floating":
      return (
        <FloatingFormLayout
          title={title}
          description={description}
          footer={footer}
          className={className}
          contentClassName={contentClassName}
          headerClassName={headerClassName}
          footerClassName={footerClassName}
          onSubmit={handleSubmit}
          {...props}
        >
          {children}
        </FloatingFormLayout>
      );
    default:
      return (
        <DefaultFormLayout
          title={title}
          description={description}
          footer={footer}
          className={className}
          contentClassName={contentClassName}
          headerClassName={headerClassName}
          footerClassName={footerClassName}
          onSubmit={handleSubmit}
          {...props}
        >
          {children}
        </DefaultFormLayout>
      );
  }
};

// Default Form Layout
const DefaultFormLayout = ({
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  onSubmit,
  ...props
}: FormLayoutProps) => {
  return (
    <div className={cn("w-full max-w-md mx-auto", className)} {...props}>
      {(title || description) && (
        <div className={cn("mb-6 text-center", headerClassName)}>
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}

      <form onSubmit={onSubmit} className={cn("space-y-6", contentClassName)}>
        {children}

        {footer && <div className={cn("mt-8", footerClassName)}>{footer}</div>}
      </form>
    </div>
  );
};

// Compact Form Layout
const CompactFormLayout = ({
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  onSubmit,
  ...props
}: FormLayoutProps) => {
  return (
    <div className={cn("w-full max-w-sm mx-auto", className)} {...props}>
      {(title || description) && (
        <div className={cn("mb-4", headerClassName)}>
          {title && <h2 className="text-xl font-bold mb-1">{title}</h2>}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}

      <form onSubmit={onSubmit} className={cn("space-y-4", contentClassName)}>
        {children}

        {footer && <div className={cn("mt-6", footerClassName)}>{footer}</div>}
      </form>
    </div>
  );
};

// Split Form Layout
const SplitFormLayout = ({
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  onSubmit,
  ...props
}: FormLayoutProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-center">
        {(title || description) && (
          <div className={cn("mb-6", headerClassName)}>
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && (
              <p className="text-lg text-gray-600">{description}</p>
            )}
          </div>
        )}

        <div className="hidden md:block">
          {/* Content for the left side, like an image or additional information */}
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Additional content or image</p>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={onSubmit} className={cn("space-y-6", contentClassName)}>
          {children}

          {footer && (
            <div className={cn("mt-8", footerClassName)}>{footer}</div>
          )}
        </form>
      </div>
    </div>
  );
};

// Card Form Layout
const CardFormLayout = ({
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  onSubmit,
  ...props
}: FormLayoutProps) => {
  return (
    <Card
      className={cn("w-full max-w-lg mx-auto", className)}
      variant="default"
      {...props}
    >
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}

      <CardContent className={contentClassName}>
        <form onSubmit={onSubmit} className="space-y-6">
          {children}

          {footer && <div className="mt-6">{footer}</div>}
        </form>
      </CardContent>

      {!footer && (
        <CardFooter className={footerClassName}>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

// Floating Form Layout
const FloatingFormLayout = ({
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  onSubmit,
  ...props
}: FormLayoutProps) => {
  return (
    <div
      className={cn("w-full max-w-4xl mx-auto relative", className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/20 to-corporate-teal/20 rounded-3xl transform -rotate-1 scale-105 blur-lg"></div>

      <Card
        className="relative bg-white/90 backdrop-blur-sm border-white/20 shadow-xl overflow-hidden"
        variant="default"
      >
        {(title || description) && (
          <CardHeader
            className={cn(
              "bg-gradient-to-r from-corporate-blue to-corporate-blue/90 text-white",
              headerClassName,
            )}
          >
            {title && <CardTitle className="text-white">{title}</CardTitle>}
            {description && (
              <CardDescription className="text-white/80">
                {description}
              </CardDescription>
            )}
          </CardHeader>
        )}

        <CardContent className={cn("p-8", contentClassName)}>
          <form onSubmit={onSubmit} className="space-y-6">
            {children}

            {footer && (
              <div className={cn("mt-8", footerClassName)}>{footer}</div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

// Form section component
export interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormSection = ({
  title,
  description,
  children,
  className,
  ...props
}: FormSectionProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {(title || description) && (
        <div>
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-4">{children}</div>
    </div>
  );
};

// Form actions component
export interface FormActionsProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "between" | "around";
}

export const FormActions = ({
  children,
  className,
  align = "right",
  ...props
}: FormActionsProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Alignment styles
  const alignStyles = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 mt-8",
        alignStyles[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Form divider component
export interface FormDividerProps {
  label?: string;
  className?: string;
}

export const FormDivider = ({
  label,
  className,
  ...props
}: FormDividerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("relative flex items-center py-4", className)}
      {...props}
    >
      <div className="flex-grow border-t border-gray-300"></div>
      {label && (
        <span className="flex-shrink mx-4 text-sm text-gray-500">{label}</span>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};
