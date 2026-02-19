import { Metadata } from 'next';
import VisionPageComponents from './_components';

export const metadata: Metadata = {
  title: 'Our Vision',
  description:
    'Our vision is to create a collaborative and profitable community of developers.',
};

export default function VisionPage() {
  return <VisionPageComponents />;
}
