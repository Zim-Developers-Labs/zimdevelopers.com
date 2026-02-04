import { Metadata } from 'next';
import { truncateOnWord } from './utils';
import { siteConfig } from './config';
import { EditorType } from './editor';

type ArticleMetadataRecipe = {
  title?: string;
  description?: string;
  pageUrl?: string;
  ogImage?: {
    url: string;
    width: number;
    height: number;
  };
  editors?: EditorType[];
};

export const prepareArticleMetadata = (
  recipe: ArticleMetadataRecipe,
): Metadata => ({
  metadataBase: new URL(siteConfig.url.web),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon-mask',
        url: '/safari-pinned-tab.png',
        color: '#000000',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: '/robots.txt',
  other: {
    'application-TileColor': '#EAB308',
  },

  authors: recipe.editors
    ? recipe.editors.map((editor) => ({
        name: editor.name,
        url: editor.githubUrl,
      }))
    : [],

  twitter: {
    site: siteConfig.twitterUsername,
    creator: siteConfig.twitterUsername,
    card: 'summary_large_image',
    title: recipe.title,
    description: recipe.description,
    images: {
      url: recipe.ogImage?.url || '',
      height: recipe.ogImage?.height,
      width: recipe.ogImage?.width,
    },
  },
  openGraph: {
    description: truncateOnWord(recipe.description!, 160),
    url: `${siteConfig.url.web}${recipe.pageUrl}`,
    type: 'article',
    siteName: siteConfig.name,
    title: recipe.title,
    images: {
      url: recipe.ogImage?.url || '',
      height: recipe.ogImage?.height,
      width: recipe.ogImage?.width,
    },
    locale: 'en_US',
  },
  alternates: {
    canonical: `${siteConfig.url.web}${recipe.pageUrl}`,
  },
  title: recipe.title,
  description: recipe.description,
});
