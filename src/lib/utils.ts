import { clsx, type ClassValue } from 'clsx';
import slugify from 'slugify';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateOnWord = (
  text: string,
  maxLength: number,
  ellipsis = true,
) => {
  if (text.length <= maxLength) return text;

  // First split on maxLength chars
  let truncatedText = text.substring(0, maxLength);

  // Then split on the last space, this way we split on the last word,
  // which looks just a bit nicer.
  truncatedText = truncatedText.substring(
    0,
    Math.min(truncatedText.length, truncatedText.lastIndexOf(' ')),
  );

  if (ellipsis) truncatedText += '...';

  return truncatedText;
};

export function Linkify(titleText: string) {
  const linkified =
    titleText?.toLowerCase &&
    titleText
      .toLowerCase()
      .replace(/[^\x00-\x7F]/g, '')
      .replace(/'/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[?!.]/g, '');

  return linkified;
}

export function convertToSlug(
  text?: string,
  { fallback }: { fallback?: string } = { fallback: 'top-level' },
) {
  if (!text) return fallback;
  return slugify(text.trim(), {
    lower: true,
    remove: /[^a-zA-Z0-9 ]/g,
  });
}
