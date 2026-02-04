import { getAllArticles } from '@/lib/blog';
import BlogPageComponents from './_components';

export default function BlogPage() {
  const articles = getAllArticles();

  return <BlogPageComponents articles={articles} />;
}
