import { getAllArticles } from '@/lib/blog';
import BlogPageComponents from './_components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the latest articles and insights from Zim Developers Labs. Stay updated on our projects, industry trends, and development tips.',
};

export default function BlogPage() {
  const articles = getAllArticles();

  return <BlogPageComponents articles={articles} />;
}
