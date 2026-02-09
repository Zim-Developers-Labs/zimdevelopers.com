import { Metadata } from 'next';
import { preparePageMetadata } from '@/lib/metadata';
import BrochureContent from './_components';

export const generateMetadata = (): Metadata =>
  preparePageMetadata({
    title: 'Brochure - Zim Developers Labs',
    description:
      'Download the Zim Developers Labs brochure to learn about our vision, projects, ranking system, and how to join the community.',
    pageUrl: '/brochure',
    imageUrl: '/banner.webp',
  });

export default function BrochurePage() {
  return <BrochureContent />;
}
