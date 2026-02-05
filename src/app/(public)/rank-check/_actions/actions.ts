'use server';

import { headers } from 'next/headers';
import { getGithubDataBucket } from '@/lib/server/constants';
import { globalPOSTRateLimit } from '@/lib/server/request';

const ORG_NAME = 'Zim-Developers-Labs';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface ContributorStats {
  username: string;
  avatar: string;
  commits: number;
  pullRequests: number;
  issues: number;
  reviews: number;
  impactPoints: number;
  rank: number;
}

export async function getContributorRank(
  username: string,
): Promise<{ data?: ContributorStats; error?: string }> {
  if (!GITHUB_TOKEN) {
    return { error: 'GitHub token not configured' };
  }

  if (!globalPOSTRateLimit()) {
    return {
      error: 'Too many requests',
    };
  }

  // Get client IP for rate limiting
  const headersList = await headers();
  const clientIp =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    'anonymous';

  if (!getGithubDataBucket.check(clientIp, 1)) {
    return {
      error: 'Too many requests. Please try again later.',
    };
  }

  const githubHeaders = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    // Verify user exists
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: githubHeaders,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!userRes.ok) {
      return { error: 'User not found' };
    }
    const user = await userRes.json();

    // Get all org repos
    const reposRes = await fetch(
      `https://api.github.com/orgs/${ORG_NAME}/repos?per_page=100`,
      { headers: githubHeaders, next: { revalidate: 3600 } },
    );
    if (!reposRes.ok) {
      return { error: 'Failed to fetch organization repos' };
    }
    const repos: { name: string }[] = await reposRes.json();

    let commits = 0;
    let pullRequests = 0;
    let issues = 0;
    let reviews = 0;

    // Fetch stats from each repo in parallel
    const repoStats = await Promise.all(
      repos.map(async (repo) => {
        const repoCommits = await getRepoCommits(
          repo.name,
          username,
          githubHeaders,
        );
        const repoPRs = await getRepoPullRequests(
          repo.name,
          username,
          githubHeaders,
        );
        const repoIssues = await getRepoIssues(
          repo.name,
          username,
          githubHeaders,
        );
        const repoReviews = await getRepoReviews(
          repo.name,
          username,
          githubHeaders,
        );

        return {
          commits: repoCommits,
          pullRequests: repoPRs,
          issues: repoIssues,
          reviews: repoReviews,
        };
      }),
    );

    // Aggregate stats
    for (const stat of repoStats) {
      commits += stat.commits;
      pullRequests += stat.pullRequests;
      issues += stat.issues;
      reviews += stat.reviews;
    }

    // Calculate impact points
    const impactPoints =
      commits * 10 + pullRequests * 25 + issues * 5 + reviews * 15;

    // Get all contributors for ranking
    const allContributors = await getAllContributorStats(githubHeaders, repos);
    const sortedContributors = allContributors.sort(
      (a, b) => b.impactPoints - a.impactPoints,
    );
    const rank =
      sortedContributors.findIndex(
        (c) => c.username.toLowerCase() === username.toLowerCase(),
      ) + 1;

    return {
      data: {
        username,
        avatar: user.avatar_url,
        commits,
        pullRequests,
        issues,
        reviews,
        impactPoints,
        rank: rank || sortedContributors.length + 1,
      },
    };
  } catch (error) {
    console.error('Error fetching contributor data:', error);
    return { error: 'Failed to fetch contributor data' };
  }
}

async function getRepoCommits(
  repoName: string,
  username: string,
  headers: Record<string, string>,
): Promise<number> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${ORG_NAME}/${repoName}/commits?author=${username}&per_page=100`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return Array.isArray(data) ? data.length : 0;
  } catch {
    return 0;
  }
}

async function getRepoPullRequests(
  repoName: string,
  username: string,
  headers: Record<string, string>,
): Promise<number> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${ORG_NAME}/${repoName}/pulls?state=all&per_page=100`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.filter(
      (pr: { user: { login: string } }) =>
        pr.user.login.toLowerCase() === username.toLowerCase(),
    ).length;
  } catch {
    return 0;
  }
}

async function getRepoIssues(
  repoName: string,
  username: string,
  headers: Record<string, string>,
): Promise<number> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${ORG_NAME}/${repoName}/issues?state=all&creator=${username}&per_page=100`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.filter(
      (issue: { pull_request?: unknown }) => !issue.pull_request,
    ).length;
  } catch {
    return 0;
  }
}

async function getRepoReviews(
  repoName: string,
  username: string,
  headers: Record<string, string>,
): Promise<number> {
  try {
    // Get recent PRs
    const prsRes = await fetch(
      `https://api.github.com/repos/${ORG_NAME}/${repoName}/pulls?state=all&per_page=30`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!prsRes.ok) return 0;
    const prs = await prsRes.json();

    let reviewCount = 0;
    // Check reviews on each PR (limit to avoid rate limiting)
    const reviewPromises = prs
      .slice(0, 15)
      .map(async (pr: { number: number }) => {
        try {
          const reviewsRes = await fetch(
            `https://api.github.com/repos/${ORG_NAME}/${repoName}/pulls/${pr.number}/reviews`,
            { headers, next: { revalidate: 3600 } },
          );
          if (!reviewsRes.ok) return 0;
          const reviews = await reviewsRes.json();
          return reviews.filter(
            (r: { user: { login: string } }) =>
              r.user.login.toLowerCase() === username.toLowerCase(),
          ).length;
        } catch {
          return 0;
        }
      });

    const reviewCounts = await Promise.all(reviewPromises);
    reviewCount = reviewCounts.reduce((sum, count) => sum + count, 0);

    return reviewCount;
  } catch {
    return 0;
  }
}

async function getAllContributorStats(
  headers: Record<string, string>,
  repos: { name: string }[],
): Promise<{ username: string; impactPoints: number }[]> {
  const contributorMap = new Map<
    string,
    { username: string; impactPoints: number }
  >();

  await Promise.all(
    repos.map(async (repo) => {
      try {
        const contributorsRes = await fetch(
          `https://api.github.com/repos/${ORG_NAME}/${repo.name}/contributors?per_page=100`,
          { headers, next: { revalidate: 3600 } },
        );
        if (!contributorsRes.ok) return;
        const contributors = await contributorsRes.json();
        for (const c of contributors) {
          const existing = contributorMap.get(c.login) || {
            username: c.login,
            impactPoints: 0,
          };
          // Use contributions as a proxy for commits * 10
          existing.impactPoints += c.contributions * 10;
          contributorMap.set(c.login, existing);
        }
      } catch {
        // Skip repos that fail
      }
    }),
  );

  return Array.from(contributorMap.values());
}
