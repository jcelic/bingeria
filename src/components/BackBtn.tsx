'use client';

import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="mb-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-base font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
      onClick={() => router.back()}
    >
      <Icon icon="ph:caret-left" className="text-lg" />
      Back
    </button>
  );
};

export default BackBtn;
