'use client';

import Container from '@/components/container';
import MdRenderer from '@/components/md-renderer';
import { ArticleType } from '@/lib/blog';

export default function ArticlePageComponents({
  article,
  ArticleContent,
}: {
  article: ArticleType;
  ArticleContent: any;
}) {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
        <Container className="max-w-xl py-6">
          <h1 className="mb-4 text-3xl font-semibold">{article.title}</h1>

          <p className="">{article.intro}</p>
        </Container>
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      </div>
      <Container className="max-w-xl py-12">
        <MdRenderer>{ArticleContent}</MdRenderer>
      </Container>
    </main>
  );
}
