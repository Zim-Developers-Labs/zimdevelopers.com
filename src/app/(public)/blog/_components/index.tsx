import Container from '@/components/container';
import { Badge } from '@/components/ui/badge';
import { ArticleType } from '@/lib/blog';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function ArticleCard({ article }: { article: ArticleType }) {
  return (
    <li>
      <Link href={`/blog/${article.id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-black p-4">
          <div className="absolute inset-0 p-2">
            <Image
              src={article.imageUrl || '/placeholder.svg'}
              alt=""
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative m-2 rounded-xl border border-white/20 bg-white/95 p-5 backdrop-blur-md transition-all group-hover:bg-white/90">
            <div className="mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-zinc-500" />
              <span className="text-sm text-zinc-600">
                {article.formattedCreatedAt}
              </span>
              {article.isDraft && (
                <Badge variant="secondary" className="bg-white/50">
                  Draft
                </Badge>
              )}
            </div>
            <h3 className="mb-2 text-lg font-bold text-zinc-900">
              {article.name}
            </h3>
            <p className="line-clamp-2 text-sm text-zinc-700">
              {article.about}
            </p>
          </div>
        </div>
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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
