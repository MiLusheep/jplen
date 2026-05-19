import { useState, useMemo } from 'react';
import Button from '../../components/Button/Button';
import SpeakButton from '../../components/SpeakButton/SpeakButton';
import { vocabularyData } from '../../data/vocabulary/n5';
import { n4VocabularyData } from '../../data/vocabulary/n4';
import { n3VocabularyData } from '../../data/vocabulary/n3';
import { n2VocabularyData } from '../../data/vocabulary/n2';
import { n1VocabularyData } from '../../data/vocabulary/n1';
import { vocabCultureNotes } from '../../data/culture/notes';
import CultureCard from '../../components/CultureCard/CultureCard';
import type { VocabWord } from '../../data/vocabulary/n5';
import styles from './Vocabulary.module.css';

const allVocabData: VocabWord[] = [...vocabularyData, ...n4VocabularyData, ...n3VocabularyData, ...n2VocabularyData, ...n1VocabularyData];

const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
type VocabLevel = (typeof levels)[number];

export default function Vocabulary() {
  const [selectedLevel, setSelectedLevel] = useState<VocabLevel>('N5');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [studyMode, setStudyMode] = useState<'browse' | 'flashcard'>('browse');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const levelData = useMemo(
    () => allVocabData.filter((w) => w.level === selectedLevel),
    [selectedLevel]
  );

  const levelCategories = useMemo(
    () => ['全部', ...new Set(levelData.map((w) => w.category))],
    [levelData]
  );

  const filteredWords: VocabWord[] = selectedCategory === '全部'
    ? levelData
    : levelData.filter((w) => w.category === selectedCategory);

  const filteredCultureNotes = useMemo(() => {
    if (selectedCategory === '全部') return vocabCultureNotes;
    return vocabCultureNotes.filter((note) =>
      note.relatedTo.some((r) =>
        r === selectedCategory ||
        filteredWords.some((w) => w.japanese.includes(r) || w.reading.includes(r))
      )
    );
  }, [selectedCategory, filteredWords]);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % filteredWords.length);
    setFlippedCards(new Set());
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
    setFlippedCards(new Set());
  };

  const handleLevelChange = (level: VocabLevel) => {
    setSelectedLevel(level);
    setSelectedCategory('全部');
    setCurrentCardIndex(0);
    setFlippedCards(new Set());
  };

  return (
    <div className={styles.vocabulary}>
      <header className={styles.header}>
        <h1 className={styles.title}>词汇学习</h1>
        <p className={styles.subtitle}>掌握日语基础词汇 · {selectedLevel} 共 {levelData.length} 词</p>
      </header>

      <div className={styles.controls}>
        <div className={styles.levelTabs}>
          {levels.map((level) => (
            <button
              key={level}
              className={`${styles.levelTab} ${selectedLevel === level ? styles.levelActive : ''}`}
              onClick={() => handleLevelChange(level)}
            >
              {level}
            </button>
          ))}
        </div>
        <div className={styles.controlsRow}>
          <div className={styles.categoryTabs}>
            {levelCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryTab} ${selectedCategory === cat ? styles.categoryActive : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentCardIndex(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.modeToggle}>
            <button
              className={`${styles.modeBtn} ${studyMode === 'browse' ? styles.modeActive : ''}`}
              onClick={() => setStudyMode('browse')}
            >
              浏览
            </button>
            <button
              className={`${styles.modeBtn} ${studyMode === 'flashcard' ? styles.modeActive : ''}`}
              onClick={() => {
                setStudyMode('flashcard');
                setCurrentCardIndex(0);
              }}
            >
              闪卡
            </button>
          </div>
        </div>
      </div>

      {studyMode === 'browse' ? (
        <div className={styles.wordGrid}>
          {filteredWords.map((word) => {
            const isFlipped = flippedCards.has(word.id);
            return (
              <div
                key={word.id}
                className={`${styles.wordCard} ${isFlipped ? styles.flipped : ''}`}
                onClick={() => toggleFlip(word.id)}
              >
                <div className={styles.wordCardInner}>
                  <div className={styles.wordFront}>
                    <span className={styles.wordJp}>{word.japanese}</span>
                    <SpeakButton text={word.reading} />
                    <span className={styles.wordFrontReading}>{word.reading}</span>
                    <span className={styles.wordCategory}>{word.category}</span>
                  </div>
                  <div className={styles.wordBack}>
                    <span className={styles.wordReading}>{word.reading}</span>
                    <span className={styles.wordCn}>{word.chinese}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.flashcardMode}>
          <div className={styles.flashcardCounter}>
            {currentCardIndex + 1} / {filteredWords.length}
          </div>
          {filteredWords[currentCardIndex] && (
            <div
              className={`${styles.flashcard} ${flippedCards.has(filteredWords[currentCardIndex].id) ? styles.flipped : ''}`}
              onClick={() => toggleFlip(filteredWords[currentCardIndex].id)}
            >
              <div className={styles.flashcardInner}>
                <div className={styles.flashcardFront}>
                  <span className={styles.flashcardJp}>
                    {filteredWords[currentCardIndex].japanese}
                  </span>
                  <SpeakButton text={filteredWords[currentCardIndex].reading} size="md" />
                  <span className={styles.flashcardFrontReading}>
                    {filteredWords[currentCardIndex].reading}
                  </span>
                  <span className={styles.flashcardHint}>点击翻转看中文</span>
                </div>
                <div className={styles.flashcardBack}>
                  <span className={styles.flashcardReading}>
                    {filteredWords[currentCardIndex].reading}
                  </span>
                  <span className={styles.flashcardCn}>
                    {filteredWords[currentCardIndex].chinese}
                  </span>
                  <span className={styles.flashcardCategory}>
                    {filteredWords[currentCardIndex].category}
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className={styles.flashcardControls}>
            <Button variant="secondary" onClick={prevCard}>
              ← 上一个
            </Button>
            <Button variant="accent" onClick={nextCard}>
              下一个 →
            </Button>
          </div>
        </div>
      )}

      <CultureCard notes={filteredCultureNotes} title="趣闻典故" />
    </div>
  );
}
