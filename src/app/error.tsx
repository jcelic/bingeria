'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-700">
          <Icon
            icon="ph:warning"
            className="text-4xl text-zinc-600 dark:text-zinc-300"
          />
        </div>

        <p className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Error
        </p>

        <h1 className="mb-3 text-3xl font-bold">Something went wrong</h1>

        <p className="mb-6 text-zinc-600 dark:text-zinc-300">
          We couldn not load this page. Please try again.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <Icon icon="ph:arrow-clockwise" className="text-lg" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600"
          >
            <Icon icon="ph:house" className="text-lg" />
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
