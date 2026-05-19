import { useState } from 'react';
import type { CultureNote } from '../../data/culture/notes';
import styles from './CultureCard.module.css';

interface CultureCardProps {
  notes: CultureNote[];
  title?: string;
}

export default function CultureCard({ notes, title }: CultureCardProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (notes.length === 0) return null;

  return (
    <div className={styles.cultureSection}>
      {title && <h3 className={styles.sectionTitle}>{title}</h3>}
      <div className={styles.noteList}>
        {notes.map((note) => {
          const isExpanded = expandedId === note.id;
          return (
            <div
              key={note.id}
              className={`${styles.noteCard} ${isExpanded ? styles.noteExpanded : ''}`}
              onClick={() => setExpandedId(isExpanded ? null : note.id)}
            >
              <div className={styles.noteHeader}>
                <span className={styles.noteEmoji}>{note.emoji}</span>
                <span className={styles.noteTitle}>{note.title}</span>
                <span className={`${styles.noteArrow} ${isExpanded ? styles.arrowOpen : ''}`}>›</span>
              </div>
              {isExpanded && (
                <div className={styles.noteContent}>
                  <p>{note.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
