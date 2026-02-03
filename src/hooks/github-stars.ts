import { getGitHubStars } from '@/lib/github';
import { useState, useEffect } from 'react';

export function useGitHubStars(repoPath: string) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const starCount = await getGitHubStars(repoPath);
        setStars(starCount);
      } catch (e) {
        console.error('Failed to fetch stars', e);
      }
    }
    fetchStars();
  }, [repoPath]);

  return stars;
}
