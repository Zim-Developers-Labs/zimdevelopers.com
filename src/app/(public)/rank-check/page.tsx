import { Metadata } from 'next';
import RankCheckPageComponents from './_components';

export const metadata: Metadata = {
  title: 'Check your rank',
  description:
    'Check your rank and benefits in the Zim Developers Labs community.',
};

export default function RankCheckPage() {
  return <RankCheckPageComponents />;
}
