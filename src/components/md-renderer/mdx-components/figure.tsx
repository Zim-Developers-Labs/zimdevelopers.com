import React from 'react';

interface FigureProps extends React.ComponentProps<'figure'> {
  children?: React.ReactNode;
}

export function Figure({ children, ...props }: FigureProps) {
  return (
    <figure className="my-8 flex flex-col items-center" {...props}>
      {children}
    </figure>
  );
}

export function Figcaption({
  children,
  ...props
}: React.ComponentProps<'figcaption'>) {
  return (
    <figcaption
      className="text-muted-foreground mt-2 text-center text-sm"
      {...props}
    >
      {children}
    </figcaption>
  );
}
