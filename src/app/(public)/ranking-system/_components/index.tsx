import Container from '@/components/container';

export default function RankingSystemPageComponents() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container className="py-6">
        <h1 className="mb-4 text-4xl font-semibold">Ranking System</h1>

        <p className="">
          How the community ranking system works and perks of ranking up.
        </p>
      </Container>
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container>
        <div className="py-16 text-center text-zinc-500">
          {'//'} Site is under development
        </div>
      </Container>
    </div>
  );
}
