'use client';

import { saveReview, deleteReview } from '@/lib/actions/review';
import { reviewSchema, type ReviewFormData } from '@/lib/validations/review';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ReviewForm = ({
  id,
  review,
}: {
  id: number;
  review?: ReviewFormData;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ReviewFormData>({
    defaultValues: review,
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormData) => {
    const result = await saveReview(data, id);

    if (!result.success) {
      toast.error(result.message);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);

    const result = await deleteReview(id);

    if (!result.success) {
      toast.error(result.message);
      setIsDeleting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="rating" className="mb-2 block text-sm font-semibold">
            Your rating
          </label>

          <input
            id="rating"
            type="number"
            min={1}
            max={10}
            step={1}
            aria-invalid={!!errors.rating}
            aria-describedby={errors.rating ? 'rating-error' : undefined}
            {...register('rating', { valueAsNumber: true })}
            placeholder="1–10"
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:bg-zinc-900 dark:focus:ring-zinc-700"
          />

          <p
            id="rating-error"
            className="mt-2 min-h-4 text-xs text-red-600 dark:text-red-400"
          >
            {errors.rating?.message}
          </p>
        </div>

        <div>
          <label htmlFor="episode" className="mb-2 block text-sm font-semibold">
            Last episode watched
          </label>

          <input
            id="episode"
            type="number"
            min={0}
            step={1}
            aria-invalid={!!errors.episode}
            aria-describedby={errors.episode ? 'episode-error' : undefined}
            {...register('episode', { valueAsNumber: true })}
            placeholder="e.g. 12"
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:bg-zinc-900 dark:focus:ring-zinc-700"
          />

          <p
            id="episode-error"
            className="mt-2 min-h-4 text-xs text-red-600 dark:text-red-400"
          >
            {errors.episode?.message}
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="mb-2 block text-sm font-semibold">
          Your review
        </label>

        <textarea
          id="comment"
          aria-invalid={!!errors.comment}
          aria-describedby={errors.comment ? 'comment-error' : undefined}
          {...register('comment')}
          rows={6}
          placeholder="What stood out to you? Share your thoughts..."
          className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 leading-relaxed outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:bg-zinc-900 dark:focus:ring-zinc-700"
        />

        <p
          id="comment-error"
          className="mt-2 min-h-4 text-xs text-red-600 dark:text-red-400"
        >
          {errors.comment?.message}
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-700">
        <input
          type="checkbox"
          {...register('spoilers')}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-zinc-900 dark:accent-zinc-100"
        />

        <span>
          <span className="block text-sm font-semibold">Contains spoilers</span>

          <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
            Hide the review until someone chooses to reveal it.
          </span>
        </span>
      </label>

      <div className="flex justify-end gap-3 border-t border-zinc-100 pt-6 dark:border-zinc-700">
        {review && (
          <button
            type="button"
            className="w-full cursor-pointer rounded-lg bg-red-50 px-6 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60 dark:focus-visible:outline-red-400 sm:w-auto"
            disabled={isSubmitting || isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? 'Deleting...' : 'Delete review'}
          </button>
        )}

        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100 sm:w-auto"
          disabled={isSubmitting || isDeleting}
        >
          {isSubmitting
            ? 'Saving...'
            : review
              ? 'Update review'
              : 'Save review'}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
