
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    icon, 
    iconPosition = "left", 
    fullWidth = false, 
    children, 
    ...props 
  }, ref) => {
    
    const variantStyles = {
      primary: "bg-eco-green-dark text-white hover:bg-opacity-90 shadow-md",
      secondary: "bg-eco-blue text-eco-text hover:bg-opacity-90 shadow-subtle",
      outline: "border border-eco-green-dark text-eco-green-dark hover:bg-eco-green-light/20",
      subtle: "bg-eco-gray-light text-eco-gray-dark hover:bg-eco-gray",
      link: "text-eco-green-dark hover:underline p-0 shadow-none"
    };
    
    const sizeStyles = {
      sm: "text-sm px-3 py-1.5 rounded",
      md: "px-6 py-3 rounded-md",
      lg: "text-lg px-8 py-4 rounded-lg"
    };
    
    const iconSpacing = iconPosition === "left" ? "mr-2" : "ml-2";
    
    return (
      <button
        ref={ref}
        className={cn(
          "font-medium inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-eco-green-dark/50 disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          variant !== 'link' && "transform hover:-translate-y-0.5 active:translate-y-0",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className={iconSpacing}>{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className={iconSpacing}>{icon}</span>}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
