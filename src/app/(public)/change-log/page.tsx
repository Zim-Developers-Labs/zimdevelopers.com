import { Metadata } from 'next';
import ChangeLogPageComponents from './_components';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'Stay informed about the latest updates and changes at Zim Developers Labs. Our changelog provides insights into new features, improvements, and bug fixes across our projects.',
};

export default function ChangeLogPage() {
  return <ChangeLogPageComponents />;
}
