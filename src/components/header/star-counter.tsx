export async function StarsCount() {
  const data = await fetch(
    'https://api.github.com/repos/Zim-Developers-Labs/zimdevelopers.com',
    {
      next: { revalidate: 86400 },
    },
  );
  const json = await data.json();

  const formattedCount =
    json.stargazers_count >= 1000
      ? `${Math.round(json.stargazers_count / 1000)}k`
      : json.stargazers_count.toLocaleString();

  return (
    <span className="text-muted-foreground w-fit text-xs tabular-nums">
      {formattedCount}
    </span>
  );
}
