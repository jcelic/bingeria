import Link from 'next/link';
import { Icon } from '@iconify/react';

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100">
          <Icon icon="ph:film-slate" className="text-3xl text-zinc-700" />
        </div>

        <p className="mb-2 text-sm font-semibold text-zinc-500">404</p>

        <h1 className="mb-3 text-3xl font-bold">Page not found</h1>

        <p className="mb-6 text-zinc-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700"
        >
          <Icon icon="ph:house" className="text-lg" />
          Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
