'use client';

import { useRevealSpoilers } from '@/hooks/useRevealSpoilers';
import type { ReviewFormData } from '@/lib/validations/review';
import { Icon } from '@iconify/react';

const ReviewCard = ({ review }: { review: ReviewFormData }) => {
  const { showSpoilers, toggleSpoilers } = useRevealSpoilers();

  return (
    <section className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-700">
      <div className="mb-4 flex items-center gap-2">
        <Icon
          icon="ph:chat-text"
          className="text-xl text-zinc-500 dark:text-zinc-400"
        />
        <h2 className="text-xl font-bold">Your review</h2>
      </div>

      <div className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm shadow-sm dark:bg-zinc-800">
            <Icon icon="ph:star-fill" className="text-lg text-yellow-400" />

            <span className="font-bold text-zinc-900 dark:text-zinc-50">
              {review.rating}
            </span>

            <span className="text-zinc-400 dark:text-zinc-500">/ 10</span>
          </span>

          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Watched through episode {review.episode}
          </span>
        </div>

        {review.spoilers && (
          <button
            type="button"
            onClick={toggleSpoilers}
            className="mb-3 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:focus-visible:outline-zinc-100"
          >
            <Icon
              icon={showSpoilers ? 'ph:eye-slash' : 'ph:eye'}
              className="text-lg"
            />
            {showSpoilers ? 'Hide spoilers' : 'Reveal spoilers'}
          </button>
        )}

        <p
          className={`whitespace-pre-wrap wrap-break-word leading-7 text-zinc-600 transition-[filter] duration-200 dark:text-zinc-300 ${
            review.spoilers && !showSpoilers
              ? 'select-none blur-sm'
              : 'blur-none'
          }`}
        >
          {review.comment}
        </p>
      </div>
    </section>
  );
};

export default ReviewCard;
