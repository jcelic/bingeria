import Card from '@/components/Card';

import { getWatchlist } from '@/lib/actions/watchlist';
import { Icon } from '@iconify/react';

const WatchList = async () => {
  const watchlist = await getWatchlist();

  if (watchlist.length === 0) {
    return (
      <div className="flex min-h-[45vh] items-center justify-center mt-8">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
            <Icon
              icon="ph:television-simple"
              className="h-7 w-7 text-zinc-700"
            />
          </div>

          <h2 className="text-2xl font-semibold">Your watchlist is empty</h2>

          <p className="mt-2 text-zinc-500">
            Shows you add to your watchlist will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-275 px-4 pt-30 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(2,280px)] md:justify-center lg:grid-cols-4 md:gap-10 lg:gap-6">
        {watchlist.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            image={show.image?.medium}
            name={show.name}
            genres={show.genres}
            rating={show.rating.average}
            isWatchlist={true}
          />
        ))}
      </div>
    </main>
  );
};

export default WatchList;
