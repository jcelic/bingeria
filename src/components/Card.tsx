import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id: number;
  image?: string | undefined;
  name: string;
  genres: string[];
  rating: number | null;
};

const Card = ({ id, image, name, genres, rating }: CardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md max-w-sm mx-auto">
      <Link href={`/show/${id}`}>
        {image ? (
          <Image
            src={image}
            width={300}
            height={450}
            alt={`${name} image`}
            className="h-75 w-full"
          />
        ) : (
          <Icon icon="carbon:no-image" className="text-5xl" />
        )}

        <div className="space-y-2 p-3">
          <h2 className="text-lg font-bold">{name}</h2>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-zinc-100 px-2 py-1 text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>

            {rating !== null && (
              <span>
                <Icon icon="ph:star-fill" className="text-yellow-400 text-lg" />{' '}
                {rating}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
