import type { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${styles[size]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
