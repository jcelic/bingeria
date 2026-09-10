import Image from 'next/image';
import { Icon } from '@iconify/react';
import { getShow, getShowEpisodes } from '@/lib/api/shows';
import { removeHtml } from '@/lib/utils/removeHtml';
import Link from 'next/link';

const ShowDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [show, episodes] = await Promise.all([
    getShow(+id),
    getShowEpisodes(+id),
  ]);

  const cleanSummary = show.summary ? removeHtml(show.summary) : '';
  const date = show.premiered && new Date(show.premiered).toLocaleDateString();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-30 pb-10">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-base font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100"
      >
        <Icon icon="ph:caret-left" className="text-lg" />
        Back
      </Link>
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          {show.image ? (
            <Image
              src={show.image.original}
              width={500}
              height={700}
              alt={`${show.name} image`}
              className="mx-auto h-auto w-full max-w-90 rounded-xl md:max-w-none"
            />
          ) : (
            <div className="mx-auto flex aspect-5/7 w-full max-w-90 items-center justify-center rounded-xl bg-zinc-100 md:max-w-none">
              <Icon icon="carbon:no-image" className="text-6xl" />
            </div>
          )}

          <div>
            <h1 className="mb-3 text-3xl font-bold">{show.name}</h1>

            <div className="mb-6 flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <span
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
                  key={genre}
                >
                  {genre}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="mb-6 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 cursor-pointer"
            >
              <Icon icon="ph:plus" className="text-lg" />
              Add to watchlist
            </button>

            <div className="mb-6 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Icon icon="ph:star-fill" className="text-lg text-yellow-400" />
                <span className="font-semibold">{show.rating.average}</span>
              </p>

              <p>
                <span className="font-semibold">Premiered:</span> {date}
              </p>

              <p>
                <span className="font-semibold">Episodes:</span>{' '}
                {episodes.length}
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold">Summary</h2>

              <p className="leading-7 text-zinc-600">{cleanSummary}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ShowDetails;
