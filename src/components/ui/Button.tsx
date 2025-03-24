
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-primary text-primary hover:bg-primary-50',
    ghost: 'text-primary hover:bg-primary-50',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        widthClass,
        'animate-scale-in',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
