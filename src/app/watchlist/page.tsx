import Card from '@/components/Card';

import { getWatchlist } from '@/lib/actions/watchlist';

const WatchList = async () => {
  const watchlist = await getWatchlist();

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
