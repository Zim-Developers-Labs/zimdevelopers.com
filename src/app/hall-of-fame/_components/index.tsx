import Container from '@/components/container';
import { RankIcon } from '@/components/ranking/rank-icon';
import { getCurrentRank } from '@/components/ranking/ranks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Star } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Tino Mazorodze',
    username: '@tinomazorodze',
    avatar: '/avatars/tech.png',
    project: 'DevFlow CLI',
    description: 'A blazing fast CLI tool for scaffolding modern web projects',
    impactPoints: 15420,
    rank: 1,
  },
  {
    id: 2,
    name: 'Tino Muzovaka',
    username: '@tinomuzovaka',
    avatar: '/avatars/tino.png',
    project: 'ReactQuery Pro',
    description: 'Advanced data fetching hooks with built-in caching',
    impactPoints: 12350,
    rank: 2,
  },
  {
    id: 3,
    name: 'Calvin Bere',
    username: '@calvinbere',
    avatar: '/avatars/calvin.png',
    project: 'CSS Grid Builder',
    description: 'Visual tool for creating complex CSS Grid layouts',
    impactPoints: 9800,
    rank: 3,
  },
  {
    id: 4,
    name: 'Prince Ruswa',
    username: '@princeruswa',
    avatar: '/avatars/prince.png',
    project: 'API Mock Server',
    description: 'Zero-config mock API server for frontend development',
    impactPoints: 8200,
    rank: 4,
  },
  {
    id: 5,
    name: 'Blessings K.',
    username: '@priyatech',
    avatar: '/avatars/blessings-k.png',
    project: 'FormForge',
    description: 'Type-safe form builder with validation',
    impactPoints: 7100,
    rank: 5,
  },
  {
    id: 6,
    name: 'Ngaavongwe N.',
    username: '@ngaavongwe',
    avatar: '/avatars/nga.png',
    project: 'Theme Engine',
    description: 'Dynamic theming system for React applications',
    impactPoints: 5600,
    rank: 6,
  },
];

function getRankIconId(rankName: string): string {
  return rankName.toLowerCase().replace(/\s+/g, '-');
}

export default function HallOfFamePage() {
  const top3 = members.slice(0, 3);
  const rest = members.slice(3);
  const podiumOrder = [top3[1], top3[0], top3[2]];

  return (
    <div className="relative overflow-x-hidden">
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container className="py-6">
        <h1 className="mb-4 text-4xl font-semibold">Hall of Fame</h1>

        <p className="">
          Celebrating outstanding contributions from our community members.
        </p>
        <div className="text-muted-foreground text-sm italic">
          Last Updated 16 hours ago
        </div>
      </Container>
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container className="max-w-2xl pt-4 pb-12">
        <div className="flex items-end justify-center gap-3 pt-8 sm:gap-6">
          {podiumOrder.map((member, idx) => {
            const heights = ['h-42', 'h-56', 'h-32'];
            const bgColors = ['bg-zinc-400', 'bg-amber-400', 'bg-orange-400'];
            const borderColors = [
              'border-zinc-500',
              'border-amber-500',
              'border-orange-500',
            ];
            const positions = [2, 1, 3];
            const rank = getCurrentRank(member.impactPoints);
            const rankIconId = getRankIconId(rank.name);

            return (
              <div key={member.id} className="flex flex-col items-center">
                <div className="relative">
                  <Avatar
                    className={`${idx === 1 ? 'h-20 w-20' : 'h-14 w-14'} border-4 ${borderColors[idx]} shadow-md`}
                  >
                    <AvatarImage
                      src={member.avatar || '/placeholder.svg'}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-background absolute -right-2 -bottom-2 rounded-full p-0.5 shadow-sm">
                    <RankIcon
                      id={rankIconId}
                      className={idx === 1 ? 'h-8 w-8' : 'h-6 w-6'}
                    />
                  </div>
                </div>
                <p className="text-foreground mt-4 text-center text-sm font-semibold sm:text-base">
                  {member.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {member.impactPoints.toLocaleString()} pts
                </p>
                <div
                  className={`${heights[idx]} w-20 sm:w-28 ${bgColors[idx]} mt-3 flex items-start justify-center rounded-t-xl border-x border-t pt-3 ${borderColors[idx]}`}
                >
                  <span className="text-foreground/40 text-2xl font-bold sm:text-3xl">
                    {positions[idx]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2">
          {rest.map((member) => {
            const rank = getCurrentRank(member.impactPoints);
            const rankIconId = getRankIconId(rank.name);
            return (
              <div
                key={member.id}
                className="hover:bg-muted flex items-center gap-4 rounded-xl border bg-zinc-100 p-4 transition-colors"
              >
                <span className="text-muted-foreground w-8 text-center font-mono font-medium">
                  {member.rank}
                </span>
                <div className="relative">
                  <Avatar className="border-border h-11 w-11 border">
                    <AvatarImage
                      src={member.avatar || '/placeholder.svg'}
                      alt={member.name}
                    />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="bg-background absolute -right-1 -bottom-1 rounded-full p-0.5">
                    <RankIcon id={rankIconId} className="h-5 w-5" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-foreground font-medium">{member.name}</p>
                </div>
                <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                  {member.impactPoints.toLocaleString()} pts
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
