'use client';

import { removeShow } from '@/lib/actions/watchlist';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'sonner';

const RemoveShowBtn = ({ id, name }: { id: number; name: string }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    setIsRemoving(true);

    try {
      const result = await removeShow(id);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error('Failed to remove show');
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <button
      type="button"
      aria-label={`Remove ${name} from watchlist`}
      title={`Remove ${name} from watchlist`}
      disabled={isRemoving}
      className="cursor-pointer rounded-lg p-1.5 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:text-red-400 dark:hover:bg-red-950/40 dark:hover:text-red-300 dark:focus-visible:outline-red-400"
      onClick={handleRemove}
    >
      <Icon icon="ph:trash" aria-hidden="true" className="text-xl" />
    </button>
  );
};

export default RemoveShowBtn;
