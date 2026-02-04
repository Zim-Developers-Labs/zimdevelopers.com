import fs from 'fs';
import path from 'path';
import { getArticleById } from '@/lib/blog';
import ArticlePageComponents from './_components';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { prepareArticleMetadata } from '@/lib/article-metadata';

type Props = {
  params: Promise<{ articleId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleId } = await params;

  // DEBUG: Check what ID we are receiving
  // console.log(`[Metadata] Generating for ID: ${articleId}`);

  const filePath = path.join(
    process.cwd(),
    'content/blog', // ⚠️ Change to 'src/content/blog' if your folder is inside src
    articleId,
    'meta.json',
  );

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const articleMeta = JSON.parse(fileContent);

    return prepareArticleMetadata({
      title: articleMeta.seo.title,
      description: articleMeta.seo.description,
      pageUrl: `/blog/${articleId}`,
      ogImage: {
        url: `/covers/${articleId}.webp`,
        width: 1200,
        height: 675,
      },
      editors: articleMeta.editors,
    });
  } catch (error) {
    // DEBUG: Log the actual error to your terminal
    console.error(`[Metadata Error] Failed to read meta.json at: ${filePath}`);
    console.error(error);

    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { articleId } = await params;

  // 1. Check if the ID exists in your index/database first
  const article = getArticleById(articleId);

  if (!article) {
    console.error(
      `[Page Error] getArticleById returned null for: ${articleId}`,
    );
    return notFound();
  }

  // 2. Construct path for the markdown content
  const articleFilePath = path.join(
    process.cwd(),
    'content/blog', // ⚠️ Ensure this matches your folder structure
    articleId, // Use articleId from params, or article.id if they differ
    'article.md',
  );

  const metaFilePath = path.join(
    process.cwd(),
    'content/blog',
    articleId,
    'meta.json',
  );

  let ArticleContent = '';
  let editors: { name: string; imageUrl: string }[] = [];

  try {
    ArticleContent = fs.readFileSync(articleFilePath, 'utf8');
    const metaContent = fs.readFileSync(metaFilePath, 'utf8');
    const meta = JSON.parse(metaContent);
    editors = meta.editors || [];
  } catch (error) {
    console.error(
      `[Page Error] Failed to read article files for: ${articleId}`,
    );
    return notFound();
  }

  // 3. PASS THE CONTENT to the component
  // Assuming ArticlePageComponents accepts a prop like 'content' or 'markdown'
  return (
    <ArticlePageComponents
      ArticleContent={ArticleContent}
      article={article}
      editors={editors}
    />
  );
}
