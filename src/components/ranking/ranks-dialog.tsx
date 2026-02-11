import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RankIcon } from './rank-icon';
import Link from 'next/link';

export default function RanksDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[300px] p-0">
        <DialogTitle className="sr-only">Community Ranks</DialogTitle>
        <div className="divide-y divide-zinc-200 text-sm">
          <div className="flex gap-2 px-4 py-4 md:gap-4">
            <div>
              <RankIcon id="new-comer-1" height={50} width={50} />
            </div>
            <div>
              <div className="mb-1 text-sm text-zinc-600">New Comer 1 - 5</div>
              <div className="text-xs text-zinc-600">
                20 - 2000 Impact Points. Limited feature access
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-4 md:gap-4">
            <div>
              <RankIcon id="contributor-1" height={50} width={50} />
            </div>
            <div>
              <div className="mb-1 text-sm text-zinc-600">
                Contributor 1 - 5
              </div>
              <div className="text-xs text-zinc-600">
                2001 - 7000 Impact Points. A bit experienced
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-4 md:gap-4">
            <div>
              <RankIcon id="leader-1" height={50} width={50} />
            </div>
            <div>
              <div className="mb-1 text-sm text-zinc-600">Leader 1 - 5</div>
              <div className="text-xs text-zinc-600">
                7001 - 10,000 Impact Points. Meaningful contributions
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-4 md:gap-4">
            <div>
              <RankIcon id="ambassador-1" height={50} width={50} />
            </div>
            <div>
              <div className="mb-1 text-sm text-zinc-600">Ambassador 1 - 5</div>
              <div className="text-xs text-zinc-600">
                &gt; 10,000 Impact Points. Prominent Community figures
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <Link
              href="/docs/zim-developers-labs-brochure.pdf"
              className="block w-full rounded-md border border-zinc-200 py-2 text-center text-sm text-zinc-600 hover:bg-zinc-200"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
