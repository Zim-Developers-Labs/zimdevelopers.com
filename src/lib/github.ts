export async function getGitHubStars(repo: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 }, // Revalidate every 1 hour
    });

    if (!res.ok) return 0;

    const data = await res.json();
    return data.stargazers_count as number;
  } catch (error) {
    console.error('GitHub fetch error:', error);
    return 0;
  }
}
