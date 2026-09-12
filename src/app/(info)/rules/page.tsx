const RulesPage = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-zinc-950">Rules</h1>

      <p className="mt-4 leading-7 text-zinc-600">
        A few simple guidelines for keeping your watchlist and reviews useful.
      </p>

      <ul className="mt-6 space-y-3 text-zinc-600">
        <li className="rounded-xl bg-zinc-50 p-4">
          Rate shows fairly using a score from 1 to 10.
        </li>

        <li className="rounded-xl bg-zinc-50 p-4">
          Keep reviews relevant to the show and your viewing experience.
        </li>

        <li className="rounded-xl bg-zinc-50 p-4">
          Mark reviews that reveal important plot details as spoilers.
        </li>
      </ul>
    </>
  );
};

export default RulesPage;
