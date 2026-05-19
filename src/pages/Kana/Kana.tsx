import { useState, useCallback } from 'react';
import { hiraganaData, katakanaData } from '../../data/vocabulary/kana';
import type { KanaItem, KanaRow } from '../../data/vocabulary/kana';
import { kanaCultureNotes } from '../../data/culture/notes';
import { speakJapanese } from '../../utils/speech';
import CultureCard from '../../components/CultureCard/CultureCard';
import Button from '../../components/Button/Button';
import styles from './Kana.module.css';

type KanaType = 'hiragana' | 'katakana';
type ViewMode = 'chart' | 'quiz';

export default function Kana() {
  const [kanaType, setKanaType] = useState<KanaType>('hiragana');
  const [viewMode, setViewMode] = useState<ViewMode>('chart');
  const [activeGroup, setActiveGroup] = useState('清音');
  const [hoveredKana, setHoveredKana] = useState<KanaItem | null>(null);
  const [playingKana, setPlayingKana] = useState<string | null>(null);

  const [quizQuestions, setQuizQuestions] = useState<KanaItem[]>([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizOptions, setQuizOptions] = useState<string[][]>([]);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [showQuizResult, setShowQuizResult] = useState(false);

  const currentData: KanaRow[] = kanaType === 'hiragana' ? hiraganaData : katakanaData;
  const activeItems = currentData.find((r) => r.label === activeGroup)?.items || [];

  const filteredCultureNotes = kanaCultureNotes.filter((note) => {
    if (activeGroup === '清音') return note.relatedTo.includes('seion') || note.relatedTo.includes(kanaType) || note.relatedTo.includes('hiragana') || note.relatedTo.includes('katakana');
    if (activeGroup === '浊音') return note.relatedTo.includes('dakuon');
    if (activeGroup === '半浊音') return note.relatedTo.includes('handakuon');
    return note.relatedTo.includes(kanaType) || note.relatedTo.includes('hiragana') || note.relatedTo.includes('katakana');
  });

  const playKana = useCallback(async (item: KanaItem) => {
    setPlayingKana(item.kana);
    try {
      await speakJapanese(item.kana);
    } catch {
      // silent fallback
    } finally {
      setPlayingKana(null);
    }
  }, []);

  const generateQuiz = useCallback(() => {
    const allItems = currentData.flatMap((r) => r.items);
    const shuffled = [...allItems].sort(() => Math.random() - 0.5);
    const count = Math.min(10, shuffled.length);
    const questions = shuffled.slice(0, count);
    const options = questions.map((q) => {
      const wrongPool = allItems.filter((item) => item.romaji !== q.romaji);
      const wrongOpts = [...wrongPool].sort(() => Math.random() - 0.5).slice(0, 3).map((w) => w.romaji);
      const allOpts = [...wrongOpts, q.romaji].sort(() => Math.random() - 0.5);
      return allOpts;
    });
    setQuizQuestions(questions);
    setQuizOptions(options);
    setCurrentQuizIdx(0);
    setQuizAnswer(null);
    setQuizScore({ correct: 0, total: 0 });
    setShowQuizResult(false);
  }, [currentData]);

  const handleAnswer = (optionIdx: number) => {
    if (quizAnswer !== null) return;
    const isCorrect = quizOptions[currentQuizIdx][optionIdx] === quizQuestions[currentQuizIdx].romaji;
    setQuizAnswer(optionIdx);
    setQuizScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuizIdx < quizQuestions.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setQuizAnswer(null);
    } else {
      setShowQuizResult(true);
    }
  };

  const startQuiz = () => {
    setViewMode('quiz');
    generateQuiz();
  };

  return (
    <div className={styles.kana}>
      <header className={styles.header}>
        <h1 className={styles.title}>假名学习</h1>
        <p className={styles.subtitle}>掌握日语五十音图的基础 · 点击假名可听发音</p>
      </header>

      <div className={styles.typeSwitch}>
        <button
          className={`${styles.typeBtn} ${kanaType === 'hiragana' ? styles.typeActive : ''}`}
          onClick={() => { setKanaType('hiragana'); setActiveGroup('清音'); }}
        >
          <span className={styles.typeBtnJp}>あ</span>
          <span>平假名</span>
        </button>
        <button
          className={`${styles.typeBtn} ${kanaType === 'katakana' ? styles.typeActive : ''}`}
          onClick={() => { setKanaType('katakana'); setActiveGroup('清音'); }}
        >
          <span className={styles.typeBtnJp}>ア</span>
          <span>片假名</span>
        </button>
      </div>

      {viewMode === 'chart' ? (
        <>
          <div className={styles.groupTabs}>
            {currentData.map((row) => (
              <button
                key={row.label}
                className={`${styles.groupTab} ${activeGroup === row.label ? styles.groupActive : ''}`}
                onClick={() => setActiveGroup(row.label)}
              >
                {row.label}
              </button>
            ))}
          </div>

          <div className={styles.chartArea}>
            <div className={styles.chartGrid}>
              {activeItems.map((item) => (
                <div
                  key={item.kana}
                  className={`${styles.kanaCell} ${hoveredKana?.kana === item.kana ? styles.kanaCellHover : ''} ${playingKana === item.kana ? styles.kanaCellPlaying : ''}`}
                  onMouseEnter={() => setHoveredKana(item)}
                  onMouseLeave={() => setHoveredKana(null)}
                  onClick={() => playKana(item)}
                  title={`点击播放 ${item.kana} 的读音`}
                >
                  <span className={styles.kanaChar}>{item.kana}</span>
                  <span className={styles.kanaRomaji}>{item.romaji}</span>
                  <span className={styles.kanaPlayIcon}>
                    {playingKana === item.kana ? '🔊' : '🔈'}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.kanaPreview}>
              {hoveredKana ? (
                <div className={styles.previewCard}>
                  <button
                    className={styles.previewPlayBtn}
                    onClick={() => playKana(hoveredKana)}
                    title="播放发音"
                  >
                    <span className={styles.previewChar}>{hoveredKana.kana}</span>
                    <span className={styles.previewPlayOverlay}>
                      {playingKana === hoveredKana.kana ? '🔊' : '▶'}
                    </span>
                  </button>
                  <span className={styles.previewRomaji}>{hoveredKana.romaji}</span>
                  <div className={styles.previewPair}>
                    {kanaType === 'hiragana' ? (
                      <>
                        <span className={styles.previewLabel}>片假名</span>
                        <span className={styles.previewPairKana}>
                          {katakanaData[0].items.find((k) => k.romaji === hoveredKana.romaji)?.kana || '—'}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className={styles.previewLabel}>平假名</span>
                        <span className={styles.previewPairKana}>
                          {hiraganaData[0].items.find((k) => k.romaji === hoveredKana.romaji)?.kana || '—'}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.previewPlaceholder}>
                  <span className={styles.placeholderIcon}>👆</span>
                  <span className={styles.placeholderText}>悬停假名查看详情</span>
                </div>
              )}
            </div>
          </div>

          <CultureCard notes={filteredCultureNotes} title="趣闻典故" />

          <div className={styles.chartActions}>
            <Button variant="accent" onClick={startQuiz}>
              🎯 开始测试
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.quizArea}>
          {!showQuizResult ? (
            quizQuestions.length > 0 && (
              <div className={styles.quizCard}>
                <div className={styles.quizProgress}>
                  <span>{currentQuizIdx + 1} / {quizQuestions.length}</span>
                  <div className={styles.quizProgressBar}>
                    <div
                      className={styles.quizProgressFill}
                      style={{ width: `${((currentQuizIdx + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className={styles.quizQuestion}>
                  <button
                    className={styles.quizKanaBtn}
                    onClick={() => playKana(quizQuestions[currentQuizIdx])}
                    title="点击播放发音"
                  >
                    <span className={styles.quizKana}>{quizQuestions[currentQuizIdx].kana}</span>
                    <span className={styles.quizKanaPlay}>
                      {playingKana === quizQuestions[currentQuizIdx].kana ? '🔊' : '▶ 听发音'}
                    </span>
                  </button>
                  <span className={styles.quizHint}>这个假名的读音是？</span>
                </div>

                <div className={styles.quizOptions}>
                  {quizOptions[currentQuizIdx].map((opt, idx) => {
                    const isCorrect = opt === quizQuestions[currentQuizIdx].romaji;
                    const isSelected = quizAnswer === idx;
                    let optClass = styles.quizOption;
                    if (quizAnswer !== null) {
                      if (isCorrect) optClass = `${styles.quizOption} ${styles.quizOptionCorrect}`;
                      else if (isSelected) optClass = `${styles.quizOption} ${styles.quizOptionWrong}`;
                    }
                    return (
                      <button
                        key={idx}
                        className={optClass}
                        onClick={() => handleAnswer(idx)}
                        disabled={quizAnswer !== null}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {quizAnswer !== null && (
                  <div className={styles.quizNext}>
                    <Button variant="accent" onClick={handleNextQuestion}>
                      {currentQuizIdx < quizQuestions.length - 1 ? '下一题 →' : '查看结果'}
                    </Button>
                  </div>
                )}
              </div>
            )
          ) : (
            <div className={styles.quizResult}>
              <div className={styles.resultCircle}>
                <span className={styles.resultScore}>{quizScore.correct}</span>
                <span className={styles.resultTotal}>/ {quizScore.total}</span>
              </div>
              <p className={styles.resultMsg}>
                {quizScore.correct === quizScore.total
                  ? '完美！全部正确！🎉'
                  : quizScore.correct >= quizScore.total * 0.8
                  ? '很棒！继续加油！💪'
                  : '还需要多练习哦 📖'}
              </p>
              <div className={styles.resultActions}>
                <Button variant="accent" onClick={generateQuiz}>再测一次</Button>
                <Button variant="secondary" onClick={() => setViewMode('chart')}>返回图表</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
