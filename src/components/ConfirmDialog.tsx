'use client';

import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';

const ConfirmDialog = ({
  onConfirm,
  onClose,
  isPending = false,
}: {
  onConfirm: () => void | Promise<void>;
  onClose: () => void;
  isPending?: boolean;
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl bg-white p-0 text-zinc-900 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm dark:bg-zinc-800 dark:text-zinc-50"
    >
      <div className="p-7 sm:p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/50">
          <Icon
            icon="ph:trash"
            aria-hidden="true"
            className="text-2xl text-red-600 dark:text-red-400"
          />
        </div>

        <h2
          id="confirm-dialog-title"
          className="text-center text-2xl font-bold"
        >
          Confirm deletion
        </h2>

        <p
          id="confirm-dialog-description"
          className="mx-auto mt-3 max-w-xs text-center text-base leading-7 text-zinc-500 dark:text-zinc-400"
        >
          Are you sure you want to delete this? This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            disabled={isPending}
            onClick={onClose}
            className="cursor-pointer rounded-lg bg-zinc-100 px-5 py-2.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 dark:focus-visible:outline-zinc-100"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={isPending}
            onClick={onConfirm}
            className="cursor-pointer rounded-lg bg-red-600 px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-500 dark:hover:bg-red-600 dark:focus-visible:outline-red-400"
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmDialog;
