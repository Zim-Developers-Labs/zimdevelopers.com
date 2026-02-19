import { Metadata } from 'next';
import ProjectsPageComponents from './components';

export const metadata: Metadata = {
  title: 'Lab Projects',
  description: 'Projects we are working on at Zim Developers Labs.',
};

export default function ProjectsPage() {
  return <ProjectsPageComponents />;
}
