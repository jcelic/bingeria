import { getWatchlist } from '@/lib/actions/watchlist';
import WatchlistContent from '@/components/WatchlistContent';
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
      <div className="mt-8 flex min-h-[45vh] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-700">
            <Icon
              icon="ph:television-simple"
              className="h-7 w-7 text-zinc-700 dark:text-zinc-300"
            />
          </div>

          <h2 className="text-2xl font-semibold">Your watchlist is empty</h2>

          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Shows you add to your watchlist will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-275 px-4 pt-30 pb-10">
      <div className="mb-8 grid grid-cols-3 divide-x divide-zinc-100 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:divide-zinc-700 dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
        <div className="p-4 text-center">
          <p className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            {showsCount}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
            Shows
          </p>
        </div>

        <div className="p-4 text-center">
          <p className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            {reviewedCount}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
            Reviewed
          </p>
        </div>

        <div className="p-4 text-center">
          <p className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            {averageRating.toFixed(1)}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
            Average rating
          </p>
        </div>
      </div>

      <WatchlistContent watchlist={watchlist} />
    </main>
  );
};

export default WatchList;
