import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { getAllArticles } from '@/lib/blog';

export async function generateSitemaps() {
  return [{ id: 'misc' }, { id: 'articles' }];
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const resolvedId = await id;

  switch (resolvedId) {
    case 'misc':
      return await generateMiscSitemap();
    case 'articles':
      return await generateArticlesSitemap();
    default:
      return [];
  }
}

async function generateMiscSitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${siteConfig.url.web}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url.web}/projects`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url.web}/templates`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url.web}/hall-of-fame`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url.web}/blog`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url.web}/rank-check`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url.web}/ranking-system`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}

async function generateArticlesSitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    url: `${siteConfig.url.web}/blog/${article.id}`,
    lastModified: new Date(article.updatedAt),
    priority: 0.9,
  }));
}
