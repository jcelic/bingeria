import Card from '@/components/Card';
import SearchInput from '@/components/SearchInput';
import { getShows, searchShows } from '@/lib/api/shows';
import type { Show } from '@/types/show';
import { Icon } from '@iconify/react';

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

      {q && showsToDisplay.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-500 dark:text-zinc-400">
          <Icon icon="ph:magnifying-glass" className="mb-3 text-4xl" />

          <p>No shows found for &quot;{q}&quot;.</p>
        </div>
      ) : (
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
      )}
    </main>
  );
}
