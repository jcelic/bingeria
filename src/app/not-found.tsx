import Link from 'next/link';
import { Icon } from '@iconify/react';

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-700">
          <Icon
            icon="ph:film-slate"
            aria-hidden="true"
            className="text-3xl text-zinc-700 dark:text-zinc-300"
          />
        </div>

        <p className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          404
        </p>

        <h1 className="mb-3 text-3xl font-bold">Page not found</h1>

        <p className="mb-6 text-zinc-600 dark:text-zinc-300">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100"
        >
          <Icon icon="ph:house" aria-hidden="true" className="text-lg" />
          Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
