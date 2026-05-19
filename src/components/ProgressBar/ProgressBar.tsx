import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'accent' | 'success' | 'gradient';
  showLabel?: boolean;
  label?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  size = 'md',
  color = 'accent',
  showLabel,
  label,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={styles.wrapper}>
      {(showLabel || label) && (
        <div className={styles.labelRow}>
          {label && <span className={styles.label}>{label}</span>}
          {showLabel && <span className={styles.percentage}>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={`${styles.track} ${styles[size]}`}>
        <div
          className={`${styles.fill} ${styles[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
