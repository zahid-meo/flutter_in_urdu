export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'flutter' | 'firebase' | 'kotlin' | 'ai-tools';
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
}

export interface Post extends PostMetadata {
  content: string;
}
