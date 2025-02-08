import { Metadata } from "next";

import TopAnimeList from "@/components/anime-top";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "Top Anime",
};
const TopAnime = () => {
  return (
    <>
      <HeroSmall title="Top Anime" breadcrumb />
      <section className="px-5 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <TopAnimeList />
      </section>
    </>
  );
};

export default TopAnime;
