export interface NewsArticle {
  id: string;
  title: string;
  titleJp: string;
  content: string;
  contentHtml: string;
  link: string;
  pubDate: string;
  image?: string;
  level: string;
  category: string;
  wordCount: number;
  estimatedTime: number;
  source: string;
  sourceLabel: string;
}

export interface NewsFetchResult {
  articles: NewsArticle[];
  fetchedAt: string;
  sources: string[];
  totalCount: number;
}
