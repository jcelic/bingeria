import type { ReactNode } from 'react';

const InfoLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pt-30 pb-10">
      <div className="rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:p-10">
        <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Bingeria
        </p>

        {children}
      </div>
    </main>
  );
};

export default InfoLayout;
