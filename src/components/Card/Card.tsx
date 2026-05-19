import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'gradient' | 'interactive';
  gradient?: string;
  onClick?: () => void;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className,
  variant = 'default',
  gradient,
  onClick,
  padding = 'md',
}: CardProps) {
  const cardClass = `${styles.card} ${styles[variant]} ${styles[`pad-${padding}`]} ${onClick ? styles.clickable : ''} ${className || ''}`;

  return (
    <div
      className={cardClass}
      onClick={onClick}
      style={gradient ? { background: gradient } : undefined}
    >
      {children}
    </div>
  );
}
