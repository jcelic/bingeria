import Card from '@/components/Card';
import { getShows } from '@/lib/api/shows';

export default async function Home() {
  const data = await getShows();
  const first24 = data.slice(0, 24);

  return (
    <main className="mx-auto w-full max-w-275 px-4 pt-30 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {first24.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            image={show.image?.medium}
            name={show.name}
            genres={show.genres}
            rating={show.rating.average}
          />
        ))}
      </div>
    </main>
  );
}
