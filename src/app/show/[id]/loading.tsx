const Loading = () => {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-30 pb-10">
      <div className="mb-4 h-10 w-24 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-700" />

      <article className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          <div className="mx-auto aspect-5/7 w-full max-w-90 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-700 md:max-w-none" />

          <div className="animate-pulse">
            <div className="mb-3 h-9 w-64 rounded bg-zinc-200 dark:bg-zinc-700" />

            <div className="mb-6 flex gap-2">
              <div className="h-7 w-20 rounded-full bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-7 w-20 rounded-full bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-7 w-20 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <div className="mb-6 space-y-3">
              <div className="h-5 w-16 rounded bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-5 w-44 rounded bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-5 w-28 rounded bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <div>
              <div className="mb-4 h-7 w-28 rounded bg-zinc-200 dark:bg-zinc-700" />

              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-4 w-11/12 rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Loading;
