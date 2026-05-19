# JPLen 开发架构文档

## 1. 项目概述

JPLen 是一款面向零基础中文母语学员的日语学习应用，核心特色包括：
- 结合新闻热点等内容的自适应阅读练习
- 按难易度分层的语法学习体系
- 跟读练习（麦克风录音 + 回放）

## 2. 技术栈

| 层面 | 技术选型 | 说明 |
|------|----------|------|
| 构建工具 | Vite | 快速开发与构建 |
| 前端框架 | React 18 + TypeScript | 类型安全、组件化开发 |
| 路由 | React Router v6 | SPA 路由管理 |
| 状态管理 | Zustand | 轻量、高内聚的状态管理 |
| 样式方案 | CSS Modules + CSS Variables | 自定义设计系统，不依赖UI框架 |
| 音频处理 | Web Audio API + MediaRecorder | 录音与回放 |
| 数据持久化 | localStorage + IndexedDB | 离线数据存储 |
| 动画 | CSS Animations + Framer Motion | 交互反馈与页面过渡 |

## 3. 项目目录结构

```
src/
├── assets/              # 静态资源（图标、图片等）
│   ├── icons/
│   └── images/
├── components/          # 通用组件
│   ├── Layout/          # 布局组件
│   ├── Navigation/      # 导航组件
│   ├── Card/            # 卡片组件
│   ├── Button/          # 按钮组件
│   ├── ProgressBar/     # 进度条组件
│   ├── AudioPlayer/     # 音频播放器组件
│   └── Modal/           # 弹窗组件
├── pages/               # 页面组件
│   ├── Home/            # 首页/仪表盘
│   ├── Grammar/         # 语法学习
│   ├── Reading/         # 阅读练习
│   ├── Speaking/        # 跟读练习
│   ├── Vocabulary/      # 词汇学习
│   └── Profile/         # 个人中心
├── stores/              # Zustand 状态管理
│   ├── useUserStore.ts  # 用户状态
│   ├── useGrammarStore.ts # 语法学习状态
│   ├── useReadingStore.ts # 阅读状态
│   └── useSpeakingStore.ts # 跟读状态
├── services/            # 业务逻辑服务
│   ├── audioService.ts  # 音频录制与播放
│   ├── grammarService.ts # 语法数据处理
│   ├── readingService.ts # 阅读内容获取
│   └── storageService.ts # 本地存储
├── data/                # 静态学习数据
│   ├── grammar/         # 语法数据（按级别分文件）
│   ├── vocabulary/      # 词汇数据
│   └── reading/         # 阅读材料数据
├── hooks/               # 自定义 Hooks
│   ├── useAudioRecorder.ts
│   ├── useProgress.ts
│   └── useLocalStorage.ts
├── styles/              # 全局样式
│   ├── variables.css    # CSS 变量（设计令牌）
│   ├── global.css       # 全局样式重置
│   ├── animations.css   # 全局动画
│   └── typography.css   # 字体排版
├── types/               # TypeScript 类型定义
│   ├── grammar.ts
│   ├── reading.ts
│   ├── speaking.ts
│   └── user.ts
└── utils/               # 工具函数
    ├── formatters.ts
    └── constants.ts
```

## 4. 设计系统

### 4.1 设计理念
- **日式美学**：融合日本传统美学（侘寂、留白）与现代UI设计
- **渐进式信息展示**：避免信息过载，通过层次和动画引导注意力
- **沉浸式学习**：减少干扰元素，聚焦学习内容本身

### 4.2 色彩体系
```
主色调：#1a1a2e（深靛蓝 - 沉静专注）
辅助色：#e94560（樱红 - 重点强调）
背景色：#f8f6f0（和纸白 - 温暖护眼）
表面色：#ffffff（纯白 - 卡片背景）
文字主色：#2d2d3a（墨色 - 正文）
文字次色：#6b6b80（淡墨 - 辅助文字）
成功色：#4ecdc4（青绿 - 正确/完成）
警告色：#ff6b6b（朱红 - 错误/提醒）
渐变：#667eea → #764ba2（紫蓝渐变 - 装饰）
```

### 4.3 字体
- 日文：Noto Sans JP
- 中文/界面：Noto Sans SC
- 代码/注音：等宽字体

### 4.4 间距与圆角
- 间距基数：4px，使用 4/8/12/16/24/32/48 的倍数体系
- 圆角：小(4px) / 中(8px) / 大(16px) / 圆形(50%)

### 4.5 动效
- 页面切换：淡入淡出 + 微位移
- 卡片交互：悬浮提升 + 阴影加深
- 进度反馈：流畅的填充动画
- 录音状态：呼吸灯效果

## 5. 模块架构

### 5.1 语法学习模块
```
GrammarModule
├── GrammarLevelSelector    # 级别选择器（N5→N1）
├── GrammarLessonList       # 课程列表
├── GrammarLessonDetail     # 课程详情
│   ├── GrammarExplanation  # 语法解释
│   ├── GrammarExamples     # 例句展示
│   └── GrammarQuiz         # 练习测试
└── GrammarProgressTracker  # 进度追踪
```

### 5.2 阅读练习模块
```
ReadingModule
├── ReadingMaterialSelector # 材料选择（新闻/故事/日常）
├── ReadingViewer           # 阅读器
│   ├── AnnotationLayer     # 注解层（词汇/语法标注）
│   └── DifficultyIndicator # 难度指示
├── ReadingComprehension    # 阅读理解题
└── ReadingHistory          # 阅读历史
```

### 5.3 跟读练习模块
```
SpeakingModule
├── SpeakingLessonSelector  # 课程选择
├── SpeakingPlayer          # 示例播放
├── SpeakingRecorder        # 录音组件
│   ├── WaveformVisualizer  # 波形可视化
│   └── RecordingControls   # 录音控制
├── SpeakingComparison      # 对比回放
└── SpeakingScore           # 发音评分反馈
```

## 6. 数据流

```
用户操作 → React组件 → Zustand Store → Service层 → 数据层
                                    ↓
                              localStorage/IndexedDB
```

- 组件只负责展示和捕获用户操作
- Store 管理状态和业务逻辑调度
- Service 层处理具体业务（音频、存储、数据处理）
- 数据层负责持久化
