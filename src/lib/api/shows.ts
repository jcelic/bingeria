// Cache: koristim revalidate svakih 6 sati jer se katalog ne mijenja često
// no-store nema smisla jer ne trebam svježe podatke na svaki request
// force-cache bi mogao predugo zadržati zastarjele podatke.

import type { Episode, SearchResult, Show } from '@/types/show';
import { notFound } from 'next/navigation';

export const getShows = async (): Promise<Show[]> => {
  const response = await fetch('https://api.tvmaze.com/shows?page=0', {
    next: { revalidate: 21600 },
  });

  if (!response.ok) throw new Error('Failed to fetch shows');

  const data: Show[] = await response.json();

  return data;
};

export const searchShows = async (q: string): Promise<Show[]> => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`,
  );

  if (!response.ok) throw new Error('Failed to search shows');

  const data: SearchResult[] = await response.json();
  const shows: Show[] = data.map((result) => result.show);

  return shows;
};

export const getShow = async (id: number): Promise<Show> => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

  if (response.status === 404) notFound();

  if (!response.ok) throw new Error('Failed to fetch show');

  const data: Show = await response.json();

  return data;
};

export const getShowEpisodes = async (id: number): Promise<Episode[]> => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes
`);

  if (response.status === 404) notFound();

  if (!response.ok) throw new Error('Failed to fetch episodes');

  const data: Episode[] = await response.json();

  return data;
};
