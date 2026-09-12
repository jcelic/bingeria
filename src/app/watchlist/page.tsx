import { getWatchlist } from '@/lib/actions/watchlist';
import Card from '@/components/Card';
import { Icon } from '@iconify/react';

const WatchList = async () => {
  const watchlist = await getWatchlist();
  const showsCount = watchlist.length;

  const reviewedShows = watchlist.filter((show) => show.review);

  const reviewedCount = reviewedShows.length;

  const averageRating =
    reviewedCount > 0
      ? reviewedShows.reduce(
          (sum, show) => sum + (show.review?.rating ?? 0),
          0,
        ) / reviewedCount
      : 0;

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
      <div className="mb-8 grid grid-cols-3 divide-x divide-zinc-100 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <div className="p-4 text-center">
          <p className="text-2xl font-semibold text-zinc-950">{showsCount}</p>
          <p className="mt-1 text-xs text-zinc-500 sm:text-sm">Shows</p>
        </div>

        <div className="p-4 text-center">
          <p className="text-2xl font-semibold text-zinc-950">
            {reviewedCount}
          </p>
          <p className="mt-1 text-xs text-zinc-500 sm:text-sm">Reviewed</p>
        </div>

        <div className="p-4 text-center">
          <p className="text-2xl font-semibold text-zinc-950">
            {averageRating.toFixed(1)}
          </p>
          <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
            Average rating
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(2,280px)] md:justify-center md:gap-10 lg:grid-cols-4 lg:gap-6">
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
