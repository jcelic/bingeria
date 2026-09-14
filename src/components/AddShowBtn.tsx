'use client';

import { addShow } from '@/lib/actions/watchlist';
import type { Show } from '@/types/show';
import { Icon } from '@iconify/react';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const AddShowBtn = ({ show, isAdded }: { show: Show; isAdded: boolean }) => {
  const [state, formAction, pending] = useActionState(
    addShow.bind(null, show),
    { success: false, message: '' },
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  const added = isAdded || state.success;

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100 dark:disabled:hover:bg-zinc-50"
        disabled={added || pending}
      >
        <Icon icon="ph:plus" aria-hidden="true" className="text-lg" />

        {pending ? 'Adding...' : added ? 'In watchlist' : 'Add to watchlist'}
      </button>
    </form>
  );
};

export default AddShowBtn;
