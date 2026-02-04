import React from 'react';
import Image from 'next/image';

export default function ImageModule(props: React.ComponentProps<'img'>) {
  const { src, alt, width, height, ...rest } = props;

  if (!src) return null;

  return (
    <Image
      src={String(src) || '/placeholder.svg'}
      alt={alt || ''}
      width={width ? Number(width) : 800}
      height={height ? Number(height) : 400}
      className="mb-6 h-auto max-w-full rounded-xl"
      {...rest}
    />
  );
}
