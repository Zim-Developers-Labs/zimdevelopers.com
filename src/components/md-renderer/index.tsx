'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ImageModule from './mdx-components/image';
import { Figure, Figcaption } from './mdx-components/figure';
import { P } from './mdx-components/p';
import Headings from './mdx-components/headings';
import { Li, Ol, Ul } from './mdx-components/list';

// You can define custom styles for elements here if needed
const components = {
  img: ImageModule,
  figure: Figure,
  figcaption: Figcaption,
  p: P,
  ...Headings,
  ul: Ul,
  ol: Ol,
  li: Li,
};

type MdRendererType = {
  children: string; // Change this to string because that is what you are passing
};

export default function MdRenderer({ children }: MdRendererType) {
  return (
    <div className="prose dark:prose-invert">
      {/* ReactMarkdown takes the string and turns it into HTML */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
