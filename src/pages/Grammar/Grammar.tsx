import { useState, useMemo } from 'react';
import { useGrammarStore } from '../../stores/useGrammarStore';
import type { JLPTLevel, GrammarLesson, GrammarPoint } from '../../types/grammar';
import { grammarCultureNotes } from '../../data/culture/notes';
import CultureCard from '../../components/CultureCard/CultureCard';
import Card from '../../components/Card/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import SpeakButton from '../../components/SpeakButton/SpeakButton';
import styles from './Grammar.module.css';

const levels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

const levelDescriptions: Record<JLPTLevel, string> = {
  N5: '基础入门',
  N4: '初级日语',
  N3: '中级日语',
  N2: '中高级日语',
  N1: '高级日语',
};

export default function Grammar() {
  const { currentLevel, setCurrentLevel, lessons, progress, currentPoint, setCurrentPoint, markCompleted } =
    useGrammarStore();
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const filteredLessons = lessons.filter((l) => l.level === currentLevel);

  const lessonCultureNotes = useMemo(() => {
    if (!selectedLesson) return [];
    return grammarCultureNotes.filter((note) =>
      note.relatedTo.includes(selectedLesson.id)
    );
  }, [selectedLesson]);

  const handleStartQuiz = (point: GrammarPoint) => {
    setCurrentPoint(point);
    setQuizMode(true);
    setQuizAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (quizId: string, optionIndex: number) => {
    if (showResults) return;
    setQuizAnswers((prev) => ({ ...prev, [quizId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    if (!currentPoint) return;
    const correct = currentPoint.quiz.filter(
      (q) => quizAnswers[q.id] === q.correctIndex
    ).length;
    const score = Math.round((correct / currentPoint.quiz.length) * 100);
    markCompleted(currentPoint.id, score);
    setShowResults(true);
  };

  const handleCloseQuiz = () => {
    setQuizMode(false);
    setCurrentPoint(null);
    setQuizAnswers({});
    setShowResults(false);
  };

  return (
    <div className={styles.grammar}>
      <header className={styles.header}>
        <h1 className={styles.title}>语法学习</h1>
        <p className={styles.subtitle}>按级别系统学习日语语法</p>
      </header>

      <div className={styles.levelSelector}>
        {levels.map((level) => {
          const prog = useGrammarStore.getState().getProgressForLevel(level);
          return (
            <button
              key={level}
              className={`${styles.levelBtn} ${currentLevel === level ? styles.levelActive : ''}`}
              onClick={() => setCurrentLevel(level)}
            >
              <span className={styles.levelName}>{level}</span>
              <span className={styles.levelDesc}>{levelDescriptions[level]}</span>
              {prog.total > 0 && (
                <div className={styles.levelProgress}>
                  <ProgressBar value={prog.completed} max={prog.total} size="sm" color="accent" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {!selectedLesson ? (
        <div className={styles.lessonGrid}>
          {filteredLessons.map((lesson) => {
            const completedCount = lesson.points.filter(
              (p) => progress[p.id]?.completed
            ).length;
            return (
              <Card
                key={lesson.id}
                variant="interactive"
                padding="lg"
                onClick={() => setSelectedLesson(lesson)}
              >
                <div className={styles.lessonCard}>
                  <div className={styles.lessonOrder}>第{lesson.order}课</div>
                  <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                  <p className={styles.lessonDesc}>{lesson.description}</p>
                  <div className={styles.lessonMeta}>
                    <span className={styles.lessonPointCount}>
                      {lesson.points.length} 个语法点
                    </span>
                    <ProgressBar
                      value={completedCount}
                      max={lesson.points.length}
                      size="sm"
                      color="gradient"
                      showLabel
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className={styles.lessonDetail}>
          <button
            className={styles.backBtn}
            onClick={() => setSelectedLesson(null)}
          >
            ← 返回课程列表
          </button>
          <h2 className={styles.lessonDetailTitle}>{selectedLesson.title}</h2>

          <div className={styles.pointsList}>
            {selectedLesson.points.map((point) => {
              const isCompleted = progress[point.id]?.completed;
              return (
                <Card key={point.id} variant="default" padding="lg">
                  <div className={styles.pointCard}>
                    <div className={styles.pointHeader}>
                      <div className={styles.pointStatus}>
                        {isCompleted ? (
                          <span className={styles.completed}>✓</span>
                        ) : (
                          <span className={styles.inProgress}>○</span>
                        )}
                      </div>
                      <div className={styles.pointInfo}>
                        <h3 className={styles.pointTitle}>{point.title}</h3>
                        <span className={styles.pointPattern}>{point.pattern}</span>
                      </div>
                    </div>

                    <p className={styles.pointExplanation}>{point.explanation}</p>

                    <div className={styles.examples}>
                      <h4 className={styles.examplesTitle}>例句</h4>
                      {point.examples.map((ex, i) => (
                        <div key={i} className={styles.example}>
                          <div className={styles.exampleJpRow}>
                            <p className={styles.exampleJp}>{ex.japanese}</p>
                            <SpeakButton text={ex.reading || ex.japanese} />
                          </div>
                          <p className={styles.exampleReading}>{ex.reading}</p>
                          <p className={styles.exampleCn}>{ex.chinese}</p>
                        </div>
                      ))}
                    </div>

                    <div className={styles.pointActions}>
                      <Button
                        variant="accent"
                        onClick={() => handleStartQuiz(point)}
                      >
                        {isCompleted ? '重新测试' : '开始测试'}
                      </Button>
                      {isCompleted && (
                        <span className={styles.scoreLabel}>
                          得分: {progress[point.id].quizScore}%
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <CultureCard notes={lessonCultureNotes} title="趣闻典故" />
        </div>
      )}

      <Modal
        isOpen={quizMode && !!currentPoint}
        onClose={handleCloseQuiz}
        title={currentPoint?.title || '语法测试'}
        size="md"
      >
        {currentPoint && (
          <div className={styles.quizContent}>
            {currentPoint.quiz.map((q, qIdx) => (
              <div key={q.id} className={styles.quizQuestion}>
                <p className={styles.questionNumber}>问题 {qIdx + 1}</p>
                <p className={styles.questionText}>{q.question}</p>
                <div className={styles.optionsGrid}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = quizAnswers[q.id] === optIdx;
                    const isCorrect = showResults && optIdx === q.correctIndex;
                    const isWrong = showResults && isSelected && optIdx !== q.correctIndex;
                    return (
                      <div key={optIdx}>
                        <button
                          className={`${styles.optionBtn} ${isSelected ? styles.optionSelected : ''} ${isCorrect ? styles.optionCorrect : ''} ${isWrong ? styles.optionWrong : ''}`}
                          onClick={() => handleAnswer(q.id, optIdx)}
                        >
                          <span className={styles.optionLabel}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className={styles.optionText}>{opt}</span>
                        </button>
                        {isWrong && (
                          <p className={styles.explanation}>{q.explanation}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className={styles.quizActions}>
              {!showResults ? (
                <Button
                  variant="accent"
                  fullWidth
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(quizAnswers).length < currentPoint.quiz.length}
                >
                  提交答案
                </Button>
              ) : (
                <Button variant="primary" fullWidth onClick={handleCloseQuiz}>
                  完成
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
