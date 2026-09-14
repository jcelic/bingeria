'use client';

import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="mb-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-base font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus-visible:outline-zinc-100"
      onClick={() => router.back()}
    >
      <Icon icon="ph:caret-left" aria-hidden="true" className="text-lg" />
      Back
    </button>
  );
};

export default BackBtn;
