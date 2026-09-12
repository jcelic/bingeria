const RulesPage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
        Rules
      </h1>

      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
        A few simple guidelines for keeping your watchlist and reviews useful.
      </p>

      <ul className="mt-6 space-y-3 text-zinc-600 dark:text-zinc-300">
        <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
          Rate shows fairly using a score from 1 to 10.
        </li>

        <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
          Keep reviews relevant to the show and your viewing experience.
        </li>

        <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
          Mark reviews that reveal important plot details as spoilers.
        </li>
      </ul>
    </>
  );
};

export default RulesPage;
