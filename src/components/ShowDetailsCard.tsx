import Image from 'next/image';
import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import type { Show } from '@/types/show';
import type { ReviewFormData } from '@/lib/validations/review';
import { removeHtml } from '@/lib/utils/removeHtml';
import ReviewCard from '@/components/ReviewCard';

type ShowDetailsCardProps = {
  show: Show;
  episodesCount: number;
  review?: ReviewFormData;
  buttons: ReactNode;
};

const ShowDetailsCard = ({
  show,
  episodesCount,
  review,
  buttons,
}: ShowDetailsCardProps) => {
  const cleanSummary = show.summary
    ? removeHtml(show.summary)
    : 'No summary available.';

  const date = show.premiered
    ? new Date(show.premiered).toLocaleDateString()
    : 'Unknown';

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
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
          <div className="mx-auto flex aspect-5/7 w-full max-w-90 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-700 md:max-w-none">
            <Icon
              icon="carbon:no-image"
              aria-hidden="true"
              className="text-6xl text-zinc-700 dark:text-zinc-300"
            />
          </div>
        )}

        <div>
          <h1 className="mb-3 text-3xl font-bold">{show.name}</h1>

          <div className="mb-6 flex flex-wrap gap-2">
            {show.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-700 dark:text-zinc-200"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="flex gap-2">{buttons}</div>

          <div className="mb-6 space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Icon
                icon="ph:star-fill"
                aria-hidden="true"
                className="text-lg text-yellow-400"
              />

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

            <p>
              <span className="font-semibold">Premiered:</span> {date}
            </p>

            <p>
              <span className="font-semibold">Episodes:</span> {episodesCount}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold">Summary</h2>

            <p className="leading-7 text-zinc-600 dark:text-zinc-300">
              {cleanSummary}
            </p>
          </div>

          {review && <ReviewCard review={review} />}
        </div>
      </div>
    </article>
  );
};

export default ShowDetailsCard;
