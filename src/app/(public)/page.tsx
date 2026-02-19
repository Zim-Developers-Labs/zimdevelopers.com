import { Metadata } from 'next';
import HomePageComponents from './_components';
import { preparePageMetadata } from '@/lib/metadata';

export const generateMetadata = (): Metadata =>
  preparePageMetadata({
    title: 'Zim Developers Labs Community',
    description:
      'A group of developers working towards building a collaborative and profitable developer community and ultimately a better tech ecosystem in Zimbabwe.',
    pageUrl: '/',
    imageUrl: '/banner.webp',
  });

export default function HomePage() {
  return <HomePageComponents />;
}
