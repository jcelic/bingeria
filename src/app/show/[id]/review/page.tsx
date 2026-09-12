import { notFound } from 'next/navigation';
import ReviewForm from '@/components/ReviewForm';
import { getWatchlist } from '@/lib/actions/watchlist';

const ReviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const watchlist = await getWatchlist();

  const show = watchlist.find((show) => show.id === +id);

  if (!show) {
    notFound();
  }

  const review = show.review;

  return (
    <main className="mx-auto w-full max-w-2xl px-4 pt-30 pb-10">
      <section
        aria-labelledby="review-title"
        className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
      >
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-zinc-500">
            Your thoughts
          </p>
          <h1 id="review-title" className="text-3xl font-bold text-zinc-900">
            {review ? 'Edit' : 'Write'} a review
          </h1>
          <p className="mt-2 text-zinc-500">
            How are you enjoying the show so far?
          </p>
        </div>

        <ReviewForm id={+id} review={review} />
      </section>
    </main>
  );
};

export default ReviewPage;
