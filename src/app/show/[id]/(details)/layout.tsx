import { addShow } from '@/lib/actions/watchlist';
import { getWatchlist } from '@/lib/data/watchlist';
import { getShow, getShowEpisodes } from '@/lib/api/shows';
import ShowDetailsCard from '@/components/ShowDetailsCard';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

type Params = Promise<{ id: string }>;

const NoJsShowDetails = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const showId = +id;

  const [show, episodes, watchlist] = await Promise.all([
    getShow(showId),
    getShowEpisodes(showId),
    getWatchlist(),
  ]);

  const watchlistShow = watchlist.find((item) => item.id === showId);

  const isAdded = !!watchlistShow;
  const review = watchlistShow?.review;

  const addShowNoJs = async () => {
    'use server';

    const result = await addShow(show);

    if (!result.success) {
      throw new Error(result.message);
    }

    redirect(`/show/${showId}`);
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-30 pb-10">
      <ShowDetailsCard
        show={show}
        episodesCount={episodes.length}
        review={review}
        buttons={
          <>
            <form action={addShowNoJs}>
              <button
                type="submit"
                disabled={isAdded}
                className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100 dark:disabled:hover:bg-zinc-50"
              >
                <Icon icon="ph:plus" aria-hidden="true" className="text-lg" />

                {isAdded ? 'In watchlist' : 'Add to watchlist'}
              </button>
            </form>

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

const ShowLayout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) => {
  return (
    <>
      <noscript>
        <style>{`
          .show-route-content {
            display: none;
          }
        `}</style>

        <NoJsShowDetails params={params} />
      </noscript>

      <div className="show-route-content">{children}</div>
    </>
  );
};

export default ShowLayout;
