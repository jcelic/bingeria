import { addShow, getWatchlist } from '@/lib/actions/watchlist';
import { getShow } from '@/lib/api/shows';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import Image from 'next/image';

const ShowLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const showId = +id;

  const [show, watchlist] = await Promise.all([
    getShow(showId),
    getWatchlist(),
  ]);

  const isAdded = watchlist.some((item) => item.id === showId);

  const addShowNoJs = async () => {
    'use server';

    const result = await addShow(show);

    if (!result.success) {
      throw new Error(result.message);
    }

    redirect(`/show/${showId}`);
  };

  return (
    <>
      <noscript>
        <style>{`
    .show-route-content {
      display: none;
    }
  `}</style>

        <main className="mx-auto w-full max-w-5xl px-4 pt-30 pb-10">
          <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="grid gap-8 p-6 md:grid-cols-[220px_1fr] md:p-8">
              {show.image ? (
                <Image
                  src={show.image.original}
                  width={400}
                  height={560}
                  alt={`${show.name} image`}
                  className="mx-auto h-auto w-full max-w-70 rounded-xl md:max-w-none"
                />
              ) : (
                <div className="mx-auto flex aspect-5/7 w-full max-w-70 items-center justify-center rounded-xl bg-zinc-100 md:max-w-none">
                  No image
                </div>
              )}

              <div>
                <h1 className="mb-3 text-3xl font-bold">{show.name}</h1>

                <div className="mb-5 flex flex-wrap gap-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <p className="mb-5 flex items-center gap-2">
                  <span aria-hidden="true" className="text-lg text-yellow-400">
                    ★
                  </span>

                  <span>
                    <span className="sr-only">Rating: </span>

                    <span className="font-semibold">
                      {show.rating.average ?? 'N/A'}
                    </span>

                    {show.rating.average !== null && (
                      <span className="sr-only"> out of 10</span>
                    )}
                  </span>
                </p>

                <form action={addShowNoJs}>
                  <button
                    type="submit"
                    disabled={isAdded}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-zinc-900"
                  >
                    {isAdded ? 'In watchlist' : '+ Add to watchlist'}
                  </button>
                </form>
              </div>
            </div>
          </article>
        </main>
      </noscript>

      <div className="show-route-content">{children}</div>
    </>
  );
};

export default ShowLayout;
