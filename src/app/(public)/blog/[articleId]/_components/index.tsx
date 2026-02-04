'use client';

import Container from '@/components/container';
import MdRenderer from '@/components/md-renderer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArticleType } from '@/lib/blog';
import { CheckCircle, XCircle } from 'lucide-react';

type EditorMeta = {
  name: string;
  imageUrl: string;
};

function ConflictsBadge({ conflicts }: { conflicts: number }) {
  return conflicts > 0 ? (
    <span className="inline-flex items-center gap-1 rounded-sm bg-red-500 px-2.5 py-0.5 text-xs font-medium text-white">
      <XCircle className="h-3 w-3" />
      {conflicts} community conflicts
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-500 px-2.5 py-0.5 text-xs font-medium text-white">
      <CheckCircle className="h-3 w-3" />
      Community Verified
    </span>
  );
}

export default function ArticlePageComponents({
  article,
  ArticleContent,
  editors,
}: {
  article: ArticleType;
  ArticleContent: any;
  editors: EditorMeta[];
}) {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
        <Container className="flex max-w-[720px] flex-col py-8">
          <h1 className="order-1 mb-4 text-4xl font-semibold">
            {article.title}
          </h1>
          <p className="order-3 mb-4 block">{article.intro}</p>
          <div className="text-muted-foreground order-2 mb-4 flex items-center justify-between border-y py-1 text-sm">
            <div>
              <span>{article.formattedUpdatedAt}</span>
            </div>
            <div>
              <ConflictsBadge
                conflicts={article.conflicts ? article.conflicts.length : 0}
              />
            </div>
          </div>
          <div className="order-4 flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Editors:</span>
            <div className="flex -space-x-2">
              {editors.map((editor, index) => (
                <Avatar
                  key={index}
                  size="default"
                  className="ring-background ring-2"
                >
                  <AvatarImage src={editor.imageUrl} alt={editor.name} />
                  <AvatarFallback>
                    {editor.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </Container>
        <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      </div>
      <Container className="max-w-[720px] pt-4 pb-12">
        <MdRenderer>{ArticleContent}</MdRenderer>
      </Container>
    </main>
  );
}
