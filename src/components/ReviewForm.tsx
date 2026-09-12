'use client';

import { saveReview, deleteReview } from '@/lib/actions/review';
import { reviewSchema } from '@/lib/validations/review';
import { ReviewFormData } from '@/lib/validations/review';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ReviewFormData>({
    defaultValues: review,
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormData) => {
    try {
      const result = await saveReview(data, id);
      if (result.success) {
        router.replace(`/show/${id}`);
        toast.success('Review saved');
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error('Failed to save review. Please try again.');
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const result = await deleteReview(id);

      if (result.success) {
        router.replace(`/show/${id}`);
        toast.success('Review deleted');
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error('Failed to delete review. Please try again.');
    } finally {
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
            {...register('rating', { valueAsNumber: true })}
            placeholder="1–10"
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100"
          />
          <p className="mt-2 min-h-4 text-xs text-red-500">
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
            {...register('episode', { valueAsNumber: true })}
            placeholder="e.g. 12"
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100"
          />
          <p className="mt-2 min-h-4 text-xs text-red-500">
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
          {...register('comment')}
          rows={6}
          placeholder="What stood out to you? Share your thoughts..."
          className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 leading-relaxed outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100"
        />
        <p className="mt-2 min-h-4 text-xs text-red-500">
          {errors.comment?.message}
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-zinc-50 p-4 transition-colors hover:bg-zinc-100">
        <input
          type="checkbox"
          {...register('spoilers')}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-zinc-900"
        />
        <span>
          <span className="block text-sm font-semibold">Contains spoilers</span>
          <span className="mt-1 block text-sm text-zinc-500">
            Hide the review until someone chooses to reveal it.
          </span>
        </span>
      </label>

      <div className="flex justify-end border-t border-zinc-100 pt-6 gap-3">
        {review && (
          <button
            type="button"
            className="w-full cursor-pointer rounded-lg bg-red-50 px-6 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:w-auto"
            disabled={isSubmitting || isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? 'Deleting...' : 'Delete review'}
          </button>
        )}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:w-auto"
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
