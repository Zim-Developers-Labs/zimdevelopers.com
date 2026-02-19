import { Metadata } from 'next';
import HallOfFamePageComponents from './_components';

export const metadata: Metadata = {
  title: 'Hall of Fame',
  description:
    'Celebrating outstanding contributions from our community members.',
};

export default function HallOfFamePage() {
  return <HallOfFamePageComponents />;
}
