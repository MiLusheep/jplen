import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className || ''}`}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
