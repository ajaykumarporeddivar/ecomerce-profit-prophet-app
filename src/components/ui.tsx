'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowRight, Check } from 'lucide-react';

const cn = (...inputs: string[]) => {
  return twMerge(...inputs);
};

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({
  variant,
  size,
  loading,
  disabled,
  onClick,
  children,
  className,
  href,
}: ButtonProps) => {
  const classes = cn(
    'flex items-center',
    {
      'bg-primary text-white': variant === 'primary',
      'bg-secondary text-white': variant === 'secondary',
      'border border-primary text-primary': variant === 'outline',
      'text-primary': variant === 'ghost',
    },
    {
      'px-2 py-1 text-xs': size === 'sm',
      'px-4 py-2 text-sm': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={cn('bg-white shadow-md', className)}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={cn('border-b', className)}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => {
  return <h2 className={cn('text-lg font-bold', className)}>{children}</h2>;
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={cn('py-4', className)}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={cn('border-t', className)}>{children}</div>;
};

interface BadgeProps {
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ variant, children, className }: BadgeProps) => {
  const classes = cn(
    'px-2 py-1 text-xs',
    {
      'bg-green-100 text-green-800': variant === 'success',
      'bg-yellow-100 text-yellow-800': variant === 'warning',
      'bg-red-100 text-red-800': variant === 'error',
      'bg-blue-100 text-blue-800': variant === 'info',
      'bg-gray-100 text-gray-800': variant === 'default',
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  icon?: React.ReactNode;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  type,
  icon,
}: InputProps) => {
  const classes = cn('block w-full py-2 pl-10 text-sm text-gray-700', {
    'border-red-500': error,
  });

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative mt-1">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classes}
          placeholder={placeholder}
        />
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

const Spinner = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 border-4 border-gray-200 rounded-full border-t-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

interface AvatarProps {
  name: string;
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar = ({ name, size, className }: AvatarProps) => {
  const hash = String(name).split('').reduce((hash, char) => {
    return hash + char.charCodeAt(0);
  }, 0);

  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-pink-500',
  ];

  const backgroundClass = colors[hash % colors.length];

  const classes = cn(
    'flex items-center justify-center rounded-full',
    {
      'h-6 w-6': size === 'sm',
      'h-8 w-8': size === 'md',
      'h-10 w-10': size === 'lg',
    },
    backgroundClass,
    className
  );

  return (
    <div className={classes}>
      <span className="text-white text-xs">
        {name.split(' ').map((word) => word[0].toUpperCase()).join('')}
      </span>
    </div>
  );
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative bg-white rounded-lg shadow-md max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <div className="px-4 py-4 border-b">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="px-4 py-4">{children}</div>
        <div className="px-4 py-4 border-t">
          <button className="bg-primary text-white py-2 px-4 rounded-lg" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const StatCard = ({ title, value, change, changeType, icon }: StatCardProps) => {
  const changeClass = cn({
    'text-green-500': changeType === 'up',
    'text-red-500': changeType === 'down',
    'text-gray-500': changeType === 'neutral',
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between">
        {icon}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className={changeClass}>
        {changeType === 'up' ? <ArrowRight className="inline-block" /> : changeType === 'down' ? (
          <ArrowRight className="inline-block rotate-180" />
        ) : null}
        {change}
      </p>
    </div>
  );
};

export {
  cn,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Spinner,
  Avatar,
  Modal,
  StatCard,
};