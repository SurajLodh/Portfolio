import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, icon, asChild, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-headline font-bold rounded-full border-2 border-foreground transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]";
    
    const variants = {
      primary: "bg-accent text-white shadow-pop hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active",
      secondary: "bg-transparent text-foreground hover:bg-tertiary",
      ghost: "border-transparent bg-transparent text-foreground hover:bg-muted"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
        {icon && (
          <span className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-background text-foreground">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
