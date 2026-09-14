import { Icon } from '@iconify/react';
import Link from 'next/link';
import { getShow, getShowEpisodes } from '@/lib/api/shows';
import { getWatchlist } from '@/lib/data/watchlist';
import AddShowBtn from '@/components/AddShowBtn';
import BackBtn from '@/components/BackBtn';
import ShowDetailsCard from '@/components/ShowDetailsCard';

const ShowDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [show, episodes, watchlist] = await Promise.all([
    getShow(+id),
    getShowEpisodes(+id),
    getWatchlist(),
  ]);

  const watchlistShow = watchlist.find((item) => item.id === +id);

  const isAdded = !!watchlistShow;
  const review = watchlistShow?.review;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-30 pb-10">
      <BackBtn />

      <ShowDetailsCard
        show={show}
        episodesCount={episodes.length}
        review={review}
        buttons={
          <>
            <AddShowBtn show={show} isAdded={isAdded} />

            {isAdded && (
              <Link
                href={`/show/${id}/review`}
                className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100"
              >
                <Icon
                  icon="ph:pencil-simple"
                  aria-hidden="true"
                  className="text-lg"
                />
                {review ? 'Edit' : 'Write'} a review
              </Link>
            )}
          </>
        }
      />
    </main>
  );
};

export default ShowDetails;
