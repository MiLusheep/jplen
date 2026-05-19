import { useState, useCallback } from 'react';
import { speakJapanese } from '../../utils/speech';
import styles from './SpeakButton.module.css';

interface SpeakButtonProps {
  text: string;
  rate?: number;
  size?: 'sm' | 'md';
  className?: string;
}

export default function SpeakButton({ text, rate = 0.8, size = 'sm', className }: SpeakButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (speaking) return;
    setSpeaking(true);
    try {
      await speakJapanese(text, rate);
    } catch {
    } finally {
      setSpeaking(false);
    }
  }, [text, rate, speaking]);

  return (
    <button
      className={`${styles.speakBtn} ${styles[size]} ${speaking ? styles.speaking : ''} ${className || ''}`}
      onClick={handleSpeak}
      title="播放发音"
      type="button"
    >
      {speaking ? (
        <span className={styles.speakingIcon}>
          <span className={styles.bar} /><span className={styles.bar} /><span className={styles.bar} />
        </span>
      ) : (
        '🔊'
      )}
    </button>
  );
}
