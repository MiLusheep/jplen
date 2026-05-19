import Card from '../../components/Card/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useUserStore } from '../../stores/useUserStore';
import { useGrammarStore } from '../../stores/useGrammarStore';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const quickActions = [
  {
    title: '假名学习',
    desc: '平假名 · 片假名',
    path: '/kana',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    emoji: '🔤',
  },
  {
    title: '继续语法学习',
    desc: 'N5 基础判断句',
    path: '/grammar',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    emoji: '📝',
  },
  {
    title: '跟读练习',
    desc: '日常问候',
    path: '/speaking',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    emoji: '🎤',
  },
  {
    title: '阅读练习',
    desc: '日本的花见文化',
    path: '/reading',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    emoji: '📖',
  },
  {
    title: '词汇复习',
    desc: '今日待复习: 12词',
    path: '/vocabulary',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    emoji: '📚',
  },
];

const dailyTip = {
  title: '今日日语小知识',
  content: '「こんにちは」是最常见的日语问候语，通常在白天使用。它的字面意思是"今天"，但作为问候语使用时表示"你好"。',
  word: 'こんにちは',
  reading: 'Konnichiwa',
};

export default function Home() {
  const { name, streakDays, currentLevel } = useUserStore();
  const { getProgressForLevel } = useGrammarStore();
  const grammarProgress = getProgressForLevel(currentLevel);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.greeting}>
            <span className={styles.greetingEmoji}>👋</span>
            <div>
              <h1 className={styles.greetingText}>
                こんにちは，<span className={styles.userName}>{name}</span>
              </h1>
              <p className={styles.greetingSub}>继续你的日语学习之旅吧</p>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{streakDays}</span>
              <span className={styles.statLabel}>连续学习天数</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>{currentLevel}</span>
              <span className={styles.statLabel}>当前级别</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>{grammarProgress.completed}/{grammarProgress.total}</span>
              <span className={styles.statLabel}>语法进度</span>
            </div>
          </div>
        </div>
        <div className={styles.heroDecoration}>
          <div className={styles.floatingKana}>あ</div>
          <div className={styles.floatingKana2}>日</div>
          <div className={styles.floatingKana3}>語</div>
        </div>
      </section>

      <section className={styles.progressSection}>
        <h2 className={styles.sectionTitle}>学习进度</h2>
        <div className={styles.progressCards}>
          <Card variant="default" padding="lg">
            <div className={styles.progressCard}>
              <div className={styles.progressHeader}>
                <span className={styles.progressEmoji}>📝</span>
                <span className={styles.progressTitle}>语法学习</span>
              </div>
              <ProgressBar
                value={grammarProgress.completed}
                max={grammarProgress.total || 1}
                color="gradient"
                size="lg"
                showLabel
              />
              <p className={styles.progressDesc}>
                已掌握 {grammarProgress.completed} 个语法点
              </p>
            </div>
          </Card>
          <Card variant="default" padding="lg">
            <div className={styles.progressCard}>
              <div className={styles.progressHeader}>
                <span className={styles.progressEmoji}>🎤</span>
                <span className={styles.progressTitle}>跟读练习</span>
              </div>
              <ProgressBar value={3} max={7} color="accent" size="lg" showLabel />
              <p className={styles.progressDesc}>
                今日已练习 3 个短语
              </p>
            </div>
          </Card>
          <Card variant="default" padding="lg">
            <div className={styles.progressCard}>
              <div className={styles.progressHeader}>
                <span className={styles.progressEmoji}>📖</span>
                <span className={styles.progressTitle}>阅读练习</span>
              </div>
              <ProgressBar value={1} max={2} color="success" size="lg" showLabel />
              <p className={styles.progressDesc}>
                已完成 1 篇阅读材料
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className={styles.actionsSection}>
        <h2 className={styles.sectionTitle}>快速开始</h2>
        <div className={styles.actionGrid}>
          {quickActions.map((action) => (
            <Link key={action.path} to={action.path} className={styles.actionLink}>
              <Card variant="gradient" gradient={action.gradient} padding="lg">
                <div className={styles.actionCard}>
                  <span className={styles.actionEmoji}>{action.emoji}</span>
                  <h3 className={styles.actionTitle}>{action.title}</h3>
                  <p className={styles.actionDesc}>{action.desc}</p>
                  <span className={styles.actionArrow}>→</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.tipSection}>
        <Card variant="default" padding="lg">
          <div className={styles.tipCard}>
            <div className={styles.tipBadge}>💡 {dailyTip.title}</div>
            <div className={styles.tipWord}>
              <span className={styles.tipWordJp}>{dailyTip.word}</span>
              <span className={styles.tipWordReading}>{dailyTip.reading}</span>
            </div>
            <p className={styles.tipContent}>{dailyTip.content}</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
