import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { whatsappGroupLink } from '@/lib/constants';
import Link from 'next/link';

export const menuItems = [
  {
    title: 'Lab',
    description: 'Browse All Projects',
    icon: Icons.labIcon,
    href: '/projects',
  },
  {
    title: 'Templates',
    description: 'Browse Templates Library',
    icon: Icons.templatesIcon,
    href: '/templates',
  },
  {
    title: 'Hall of Fame',
    description: 'See top contributors',
    icon: Icons.hallOfFameIcon,
    href: '/hall-of-fame',
  },
  {
    title: 'Blog',
    description: 'Read the community blog',
    icon: Icons.blogIcon,
    href: '/blog',
  },

  {
    title: 'Rank Check',
    description: 'Check your rank and benefits',
    icon: Icons.checkRankIcon,
    href: '/rank-check',
  },
  {
    title: 'Changelog',
    description: 'See changes across all projects',
    icon: Icons.changelogIcon,
    href: '/change-log',
  },
  {
    title: 'Chat',
    description: 'Join the whatsapp group',
    icon: Icons.whatsappChatIcon,
    href: whatsappGroupLink,
  },
];

export default function QuickLinks() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul
          id="quick-links"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5"
        >
          {menuItems.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={index} className="relative">
                <Link href={feature.href}>
                  <Card className="group h-full cursor-pointer border border-zinc-200 bg-white py-2 shadow-none transition-all duration-300 hover:scale-105 hover:bg-zinc-50/50">
                    <CardContent className="p-4 text-center">
                      <div
                        className={`mx-auto mt-2 mb-2 flex h-fit w-full items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 sm:mb-3`}
                      >
                        <Icon
                          className="h-10 w-10 sm:h-12 sm:w-12"
                          strokeWidth={1}
                        />
                      </div>
                      <h3 className="mb-1 text-sm leading-tight font-semibold text-nowrap text-zinc-900 sm:mb-2 sm:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-no-wrap mb-2 text-xs leading-relaxed text-zinc-600 sm:text-sm md:pb-0">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
