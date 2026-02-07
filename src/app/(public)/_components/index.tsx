import HomePageHero from './hero';
import QuickLinks from './quick-links';

export default function HomePageComponents() {
  return (
    <>
      <HomePageHero />
      <div className="pb-8 text-center font-mono text-zinc-500">
        {'//'} Hello World 👋
      </div>
      <QuickLinks />
    </>
  );
}
