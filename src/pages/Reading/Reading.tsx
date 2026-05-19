import { useState } from 'react';
import { readingData } from '../../data/reading/materials';
import type { ReadingMaterial, ReadingCategory } from '../../types/reading';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import styles from './Reading.module.css';

const categories: { key: ReadingCategory | 'all'; label: string; emoji: string }[] = [
  { key: 'all', label: '全部', emoji: '📋' },
  { key: 'culture', label: '文化', emoji: '🏯' },
  { key: 'daily', label: '日常', emoji: '🏪' },
  { key: 'news', label: '新闻', emoji: '📰' },
  { key: 'story', label: '故事', emoji: '📕' },
  { key: 'travel', label: '旅行', emoji: '✈️' },
  { key: 'society', label: '社会', emoji: '🏢' },
];

const readingLevels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
type ReadingLevel = (typeof readingLevels)[number];

const difficultyLabels = {
  beginner: { text: '入门', color: '#4ecdc4' },
  intermediate: { text: '中级', color: '#ffe66d' },
  advanced: { text: '高级', color: '#ff6b6b' },
};

export default function Reading() {
  const [selectedCategory, setSelectedCategory] = useState<ReadingCategory | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<ReadingLevel>('N5');
  const [selectedMaterial, setSelectedMaterial] = useState<ReadingMaterial | null>(null);
  const [showReading, setShowReading] = useState(false);
  const [showComprehension, setShowComprehension] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [annotatedWord, setAnnotatedWord] = useState<{ word: string; reading: string; meaning: string } | null>(null);

  const filteredMaterials = readingData
    .filter((m) => m.level === selectedLevel)
    .filter((m) => selectedCategory === 'all' || m.category === selectedCategory);

  const handleOpenMaterial = (material: ReadingMaterial) => {
    setSelectedMaterial(material);
    setShowReading(true);
  };

  const handleStartComprehension = () => {
    setShowComprehension(true);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (questionId: string, optionIndex: number) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitComprehension = () => {
    setShowResults(true);
  };

  const handleClose = () => {
    setShowReading(false);
    setShowComprehension(false);
    setSelectedMaterial(null);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className={styles.reading}>
      <header className={styles.header}>
        <h1 className={styles.title}>阅读练习</h1>
        <p className={styles.subtitle}>通过阅读提升日语理解能力</p>
      </header>

      <div className={styles.levelTabs}>
        {readingLevels.map((level) => (
          <button
            key={level}
            className={`${styles.levelTab} ${selectedLevel === level ? styles.levelActive : ''}`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className={styles.categoryTabs}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`${styles.categoryTab} ${selectedCategory === cat.key ? styles.categoryActive : ''}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            <span className={styles.categoryEmoji}>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.materialGrid}>
        {filteredMaterials.map((material) => {
          const diff = difficultyLabels[material.difficulty];
          return (
            <Card
              key={material.id}
              variant="interactive"
              padding="lg"
              onClick={() => handleOpenMaterial(material)}
            >
              <div className={styles.materialCard}>
                <div className={styles.materialMeta}>
                  <span
                    className={styles.difficultyBadge}
                    style={{ background: diff.color }}
                  >
                    {diff.text}
                  </span>
                  <span className={styles.levelBadge}>{material.level}</span>
                </div>
                <h3 className={styles.materialTitle}>{material.title}</h3>
                <p className={styles.materialTitleJp}>{material.titleJp}</p>
                <div className={styles.materialInfo}>
                  <span>{material.wordCount} 字</span>
                  <span>约 {material.estimatedTime} 分钟</span>
                </div>
                <div className={styles.materialTags}>
                  {material.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Modal
        isOpen={showReading && !!selectedMaterial && !showComprehension}
        onClose={handleClose}
        title={selectedMaterial?.title || ''}
        size="lg"
      >
        {selectedMaterial && (
          <div className={styles.readingContent}>
            <div className={styles.readingHeader}>
              <span className={styles.readingLevel}>{selectedMaterial.level}</span>
              <span className={styles.readingWordCount}>
                {selectedMaterial.wordCount}字 · 约{selectedMaterial.estimatedTime}分钟
              </span>
            </div>

            <div className={styles.readingBody}>
              {selectedMaterial.content.map((segment, idx) => (
                <div key={idx} className={styles.readingSegment}>
                  <p className={styles.segmentText}>
                    {segment.text.split('').map((char, charIdx) => {
                      const annotation = segment.annotations?.find(
                        (a) => charIdx >= a.startIndex && charIdx < a.endIndex
                      );
                      if (annotation) {
                        const isStart = charIdx === annotation.startIndex;
                        if (isStart) {
                          return (
                            <span
                              key={charIdx}
                              className={styles.annotatedWord}
                              onMouseEnter={() =>
                                setAnnotatedWord({
                                  word: annotation.word,
                                  reading: annotation.reading,
                                  meaning: annotation.meaning,
                                })
                              }
                              onMouseLeave={() => setAnnotatedWord(null)}
                            >
                              {segment.text.slice(annotation.startIndex, annotation.endIndex)}
                            </span>
                          );
                        }
                        return null;
                      }
                      return <span key={charIdx}>{char}</span>;
                    })}
                  </p>
                  {segment.reading && (
                    <p className={styles.segmentReading}>{segment.reading}</p>
                  )}
                </div>
              ))}
            </div>

            {annotatedWord && (
              <div className={styles.annotationPopup}>
                <span className={styles.annotationWord}>{annotatedWord.word}</span>
                <span className={styles.annotationReading}>{annotatedWord.reading}</span>
                <span className={styles.annotationMeaning}>{annotatedWord.meaning}</span>
              </div>
            )}

            <div className={styles.readingActions}>
              <Button variant="accent" onClick={handleStartComprehension}>
                阅读理解测试
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={showComprehension && !!selectedMaterial}
        onClose={handleClose}
        title="阅读理解"
        size="md"
      >
        {selectedMaterial && (
          <div className={styles.comprehensionContent}>
            {selectedMaterial.comprehension.map((q, qIdx) => (
              <div key={q.id} className={styles.compQuestion}>
                <p className={styles.compQuestionNum}>问题 {qIdx + 1}</p>
                <p className={styles.compQuestionText}>{q.question}</p>
                <div className={styles.compOptions}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = answers[q.id] === optIdx;
                    const isCorrect = showResults && optIdx === q.correctIndex;
                    const isWrong = showResults && isSelected && optIdx !== q.correctIndex;
                    return (
                      <button
                        key={optIdx}
                        className={`${styles.compOption} ${isSelected ? styles.compOptionSelected : ''} ${isCorrect ? styles.compOptionCorrect : ''} ${isWrong ? styles.compOptionWrong : ''}`}
                        onClick={() => handleAnswer(q.id, optIdx)}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className={styles.compActions}>
              {!showResults ? (
                <Button
                  variant="accent"
                  fullWidth
                  onClick={handleSubmitComprehension}
                  disabled={Object.keys(answers).length < selectedMaterial.comprehension.length}
                >
                  提交答案
                </Button>
              ) : (
                <div className={styles.compResults}>
                  <p className={styles.compScore}>
                    正确 {selectedMaterial.comprehension.filter((q) => answers[q.id] === q.correctIndex).length} / {selectedMaterial.comprehension.length}
                  </p>
                  <Button variant="primary" fullWidth onClick={handleClose}>
                    完成
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
