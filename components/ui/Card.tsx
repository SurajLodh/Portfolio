import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  hoverEffect?: boolean;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, hoverEffect = true, ...props }, ref) => {
    
    const baseStyles = "bg-card border-2 border-foreground rounded-xl shadow-[8px_8px_0px_#E2E8F0] dark:shadow-[8px_8px_0px_#334155] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]";
    const hoverStyles = hoverEffect ? "hover:-rotate-1 hover:scale-[1.02] active:scale-95" : "";

    const classes = `${baseStyles} ${hoverStyles} ${className}`;

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
