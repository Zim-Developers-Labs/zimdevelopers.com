import { Metadata } from 'next';
import TemplatesPageComponents from './_components';

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'Community made free and paid templates to quickstart your next project.',
};

export default function TemplatesPage() {
  return <TemplatesPageComponents />;
}
