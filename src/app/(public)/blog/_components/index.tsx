import Container from '@/components/container';
import { Badge } from '@/components/ui/badge';
import { ArticleType } from '@/lib/blog';

import Image from 'next/image';
import Link from 'next/link';

function ArticleCard({ article }: { article: ArticleType }) {
  return (
    <li>
      <Link href={`/blog/${article.id}`} className="group block">
        <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow group-hover:shadow-md">
          <div className="aspect-video overflow-hidden">
            <Image
              src={article.imageUrl || '/placeholder.svg'}
              alt={article.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <time className="text-xs text-zinc-500">
                {article.formattedCreatedAt}
              </time>
              {article.isDraft && (
                <Badge variant="secondary" className="text-xs">
                  Draft
                </Badge>
              )}
            </div>
            <h3 className="mb-1 text-base font-semibold text-zinc-900 group-hover:text-zinc-700">
              {article.name}
            </h3>
            <p className="line-clamp-2 text-sm text-zinc-500">
              {article.about}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default function BlogPageComponents({
  articles,
}: {
  articles: ArticleType[];
}) {
  return (
    <div className="relative overflow-x-hidden">
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container className="py-6">
        <h1 className="mb-4 text-4xl font-semibold">Community Blog</h1>

        <p className="">
          Read articles drafted, reviewed and maintained by our community
          members.
        </p>
      </Container>
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container className="py-12">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
