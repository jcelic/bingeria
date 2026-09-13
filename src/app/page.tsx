import Card from '@/components/Card';
import SearchInput from '@/components/SearchInput';
import { getShows, searchShows } from '@/lib/api/shows';
import type { Show } from '@/types/show';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  let searchResults: Show[] = [];
  let shows: Show[] = [];

  const { q } = await searchParams;
  if (q) {
    searchResults = await searchShows(q);
  } else {
    const data = await getShows();
    shows = data.slice(0, 24);
  }

  const showsToDisplay = q ? searchResults : shows;

  return (
    <main className="mx-auto w-full max-w-275 px-4 pt-30 pb-10">
      <SearchInput />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[repeat(2,280px)] md:justify-center md:gap-10 lg:grid-cols-4 lg:gap-6">
        {showsToDisplay.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            image={show.image?.medium}
            name={show.name}
            genres={show.genres}
            rating={show.rating.average}
          />
        ))}
      </div>
    </main>
  );
}
