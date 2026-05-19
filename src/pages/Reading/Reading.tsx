import { useState, useEffect } from 'react';
import { readingData } from '../../data/reading/materials';
import { getNewsArticles, getNewsFetchInfo } from '../../services/newsService';
import type { ReadingMaterial, ReadingCategory } from '../../types/reading';
import type { NewsArticle } from '../../types/news';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import SpeakButton from '../../components/SpeakButton/SpeakButton';
import styles from './Reading.module.css';

type TabKey = 'materials' | 'news';

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

const sourceLabels: Record<string, { label: string; color: string }> = {
  'nhk-easy': { label: 'NHK Easy', color: '#1a73e8' },
  'nhk-easier': { label: 'NHK Easier', color: '#0d65d9' },
  'nhk-sokuho': { label: 'NHK速報', color: '#c5221f' },
  'yahoo': { label: 'Yahoo!', color: '#6001d2' },
  'cnn-japan': { label: 'CNN.co.jp', color: '#cc0000' },
  'afpbb': { label: 'AFPBB News', color: '#0066cc' },
  'nhk-world': { label: 'NHK NEWS', color: '#0d47a1' },
  'yomiuri': { label: '読売新聞', color: '#1565c0' },
  'mainichi': { label: '毎日新聞', color: '#2e7d32' },
  'itmedia': { label: 'ITmedia', color: '#e91e63' },
  'jiji': { label: '時事通信', color: '#00897b' },
};

export default function Reading() {
  const [activeTab, setActiveTab] = useState<TabKey>('materials');
  const [selectedCategory, setSelectedCategory] = useState<ReadingCategory | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<ReadingLevel>('N5');
  const [selectedMaterial, setSelectedMaterial] = useState<ReadingMaterial | null>(null);
  const [showReading, setShowReading] = useState(false);
  const [showComprehension, setShowComprehension] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [annotatedWord, setAnnotatedWord] = useState<{ word: string; reading: string; meaning: string } | null>(null);

  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [newsLevel, setNewsLevel] = useState<string>('all');
  const [newsSource, setNewsSource] = useState<string>('all');
  const [newsFetchInfo, setNewsFetchInfo] = useState<{ fetchedAt: string; sources: string[]; totalCount: number } | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [showArticle, setShowArticle] = useState(false);

  useEffect(() => {
    if (activeTab === 'news') {
      getNewsArticles().then(setNewsArticles);
      getNewsFetchInfo().then(setNewsFetchInfo);
    }
  }, [activeTab]);

  const filteredMaterials = readingData
    .filter((m) => m.level === selectedLevel)
    .filter((m) => selectedCategory === 'all' || m.category === selectedCategory);

  const filteredNews = newsArticles
    .filter((a) => newsLevel === 'all' || a.level === newsLevel)
    .filter((a) => newsSource === 'all' || a.source === newsSource);

  const handleOpenMaterial = (material: ReadingMaterial) => {
    setSelectedMaterial(material);
    setShowReading(true);
  };

  const handleOpenArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    setShowArticle(true);
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
    setShowArticle(false);
    setSelectedArticle(null);
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className={styles.reading}>
      <header className={styles.header}>
        <h1 className={styles.title}>阅读练习</h1>
        <p className={styles.subtitle}>通过阅读提升日语理解能力</p>
      </header>

      <div className={styles.mainTabs}>
        <button
          className={`${styles.mainTab} ${activeTab === 'materials' ? styles.mainTabActive : ''}`}
          onClick={() => setActiveTab('materials')}
        >
          📚 教材阅读
        </button>
        <button
          className={`${styles.mainTab} ${activeTab === 'news' ? styles.mainTabActive : ''}`}
          onClick={() => setActiveTab('news')}
        >
          📰 新闻热点
          {newsArticles.length > 0 && (
            <span className={styles.newsCount}>{newsArticles.length}</span>
          )}
        </button>
      </div>

      {activeTab === 'materials' && (
        <>
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
                      <span className={styles.difficultyBadge} style={{ background: diff.color }}>
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
        </>
      )}

      {activeTab === 'news' && (
        <>
          <div className={styles.newsFilters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>级别</span>
              <div className={styles.filterOptions}>
                {['all', 'N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
                  <button
                    key={level}
                    className={`${styles.filterBtn} ${newsLevel === level ? styles.filterBtnActive : ''}`}
                    onClick={() => setNewsLevel(level)}
                  >
                    {level === 'all' ? '全部' : level}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>来源</span>
              <div className={styles.filterOptions}>
                <button
                  className={`${styles.filterBtn} ${newsSource === 'all' ? styles.filterBtnActive : ''}`}
                  onClick={() => setNewsSource('all')}
                >
                  全部
                </button>
                {newsFetchInfo?.sources.map((s) => (
                  <button
                    key={s}
                    className={`${styles.filterBtn} ${newsSource === s ? styles.filterBtnActive : ''}`}
                    onClick={() => setNewsSource(s)}
                  >
                    {sourceLabels[s]?.label || s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {newsFetchInfo && (
            <div className={styles.newsMeta}>
              <span className={styles.newsUpdateTime}>
                更新于 {formatDate(newsFetchInfo.fetchedAt)}
              </span>
              <span className={styles.newsTotal}>
                共 {filteredNews.length} 篇
              </span>
            </div>
          )}

          <div className={styles.newsGrid}>
            {filteredNews.map((article) => {
              const src = sourceLabels[article.source] || { label: article.sourceLabel, color: '#666' };
              return (
                <Card
                  key={article.id}
                  variant="interactive"
                  padding="lg"
                  onClick={() => handleOpenArticle(article)}
                >
                  <div className={styles.newsCard}>
                    <div className={styles.newsCardHeader}>
                      <span
                        className={styles.newsSourceBadge}
                        style={{ background: src.color }}
                      >
                        {src.label}
                      </span>
                      <span className={styles.newsLevelBadge}>{article.level}</span>
                    </div>
                    <h3 className={styles.newsCardTitle}>{article.title}</h3>
                    <SpeakButton text={article.title} />
                    {article.image && (
                      <div className={styles.newsCardImage}>
                        <img src={article.image} alt="" loading="lazy" />
                      </div>
                    )}
                    <p className={styles.newsCardExcerpt}>
                      {article.content.length > 100
                        ? article.content.substring(0, 100) + '...'
                        : article.content}
                    </p>
                    <div className={styles.newsCardFooter}>
                      <span>{article.wordCount} 字</span>
                      <span>约 {article.estimatedTime} 分钟</span>
                      <span>{formatDate(article.pubDate)}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredNews.length === 0 && newsArticles.length > 0 && (
            <div className={styles.emptyState}>
              <p>当前筛选条件下没有新闻</p>
              <Button variant="primary" onClick={() => { setNewsLevel('all'); setNewsSource('all'); }}>
                清除筛选
              </Button>
            </div>
          )}

          {newsArticles.length === 0 && (
            <div className={styles.emptyState}>
              <p>暂无新闻数据，请稍后再来</p>
            </div>
          )}
        </>
      )}

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
              <SpeakButton text={selectedMaterial.titleJp} size="md" />
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
        isOpen={showArticle && !!selectedArticle}
        onClose={handleClose}
        title={selectedArticle?.title || ''}
        size="lg"
      >
        {selectedArticle && (
          <div className={styles.readingContent}>
            <div className={styles.readingHeader}>
              <span className={styles.readingLevel}>{selectedArticle.level}</span>
              <span className={styles.readingWordCount}>
                {selectedArticle.wordCount}字 · 约{selectedArticle.estimatedTime}分钟
              </span>
              <span
                className={styles.newsSourceBadge}
                style={{ background: sourceLabels[selectedArticle.source]?.color || '#666' }}
              >
                {selectedArticle.sourceLabel}
              </span>
              <SpeakButton text={selectedArticle.title} size="md" />
            </div>

            <div className={styles.newsArticleBody}>
              {selectedArticle.image && (
                <div className={styles.newsArticleImage}>
                  <img src={selectedArticle.image} alt="" />
                </div>
              )}
              <div
                className={styles.newsArticleContent}
                dangerouslySetInnerHTML={{ __html: selectedArticle.contentHtml }}
              />
            </div>

            <div className={styles.readingActions}>
              {selectedArticle.link && (
                <Button
                  variant="primary"
                  onClick={() => window.open(selectedArticle.link, '_blank', 'noopener,noreferrer')}
                >
                  查看原文
                </Button>
              )}
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
