'use client';

import ReactMarkdown from 'react-markdown';

// You can define custom styles for elements here if needed
const components = {
  // Example: style all images to be responsive
  img: (props: any) => (
    <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />
  ),
};

type MdRendererType = {
  children: string; // Change this to string because that is what you are passing
};

export default function MdRenderer({ children }: MdRendererType) {
  return (
    <div className="prose dark:prose-invert">
      {/* ReactMarkdown takes the string and turns it into HTML */}
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
}
