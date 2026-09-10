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
    <article className="mx-auto h-full w-full max-w-70 overflow-hidden rounded-2xl bg-white text-center shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/show/${id}`} className="flex h-full flex-col">
        {image ? (
          <Image
            src={image}
            width={210}
            height={295}
            alt={`${name} image`}
            className="h-auto w-full"
          />
        ) : (
          <div className="flex aspect-210/295 w-full items-center justify-center bg-zinc-100">
            <Icon icon="carbon:no-image" className="text-5xl" />
          </div>
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
              <span className="inline-flex shrink-0 items-center gap-1">
                <Icon icon="ph:star-fill" className="text-lg text-yellow-400" />
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
