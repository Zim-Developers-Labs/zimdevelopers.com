import articles from '../../content/articles.json';
import { formatDate } from 'date-fns/format';

export type ArticleType = {
  id: string;
  name: string;
  title: string;
  about: string;
  intro: string;
  createdAt: string;
  updatedAt: string;
  formattedCreatedAt?: string;
  imageUrl: string;
  isDraft: boolean;
  conflicts?: string[];
};

export function getArticleById(id: string): ArticleType | undefined {
  const allArticles = getAllArticles();

  return allArticles.find((article) => article.id === id);
}

export function getAllArticles(limit: number = 0): ArticleType[] {
  return (articles as ArticleType[])
    .filter((article) => !article.isDraft)
    .sort(
      (a, b) => (new Date(b.updatedAt) as any) - (new Date(a.updatedAt) as any),
    )
    .map((article) => ({
      ...article,
      formattedCreatedAt: formatDate(
        new Date(article.createdAt),
        'MMMM d, yyyy',
      ),
      formattedUpdatedAt: formatDate(
        new Date(article.updatedAt),
        'MMMM d, yyyy',
      ),
      approved: article.conflicts && article.conflicts.length === 0,
    }))
    .slice(0, limit ? limit : articles.length);
}
