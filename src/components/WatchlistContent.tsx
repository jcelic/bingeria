'use client';

import { useState } from 'react';
import type { WatchlistShow } from '@/types/show';
import Card from './Card';

const WatchlistContent = ({ watchlist }: { watchlist: WatchlistShow[] }) => {
  const [sortBy, setSortBy] = useState<'date' | 'rating' | null>(null);

  const sortedWatchlist = [...watchlist];

  if (sortBy === 'date') {
    sortedWatchlist.sort((a, b) => {
      const dateA = new Date(a.addedAt).getTime();
      const dateB = new Date(b.addedAt).getTime();

      return dateB - dateA;
    });
  }

  if (sortBy === 'rating') {
    sortedWatchlist.sort((a, b) => {
      const ratingA = a.review?.rating ?? 0;
      const ratingB = b.review?.rating ?? 0;

      return ratingB - ratingA;
    });
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Sort by</p>

        <div className="flex gap-2">
          <button
            type="button"
            aria-pressed={sortBy === 'date'}
            className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:focus-visible:outline-zinc-100 ${
              sortBy === 'date'
                ? 'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
                : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
            }`}
            onClick={() => setSortBy('date')}
          >
            Date added
          </button>

          <button
            type="button"
            aria-pressed={sortBy === 'rating'}
            className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:focus-visible:outline-zinc-100 ${
              sortBy === 'rating'
                ? 'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
                : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
            }`}
            onClick={() => setSortBy('rating')}
          >
            Rating
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[repeat(2,280px)] md:justify-center md:gap-10 lg:grid-cols-4 lg:gap-6">
        {sortedWatchlist.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            image={show.image?.original}
            name={show.name}
            genres={show.genres}
            rating={show.rating.average}
            isWatchlist={true}
          />
        ))}
      </div>
    </>
  );
};

export default WatchlistContent;
