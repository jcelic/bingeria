import { Show } from '@/types/show';

export const getShows = async (): Promise<Show[]> => {
  const response = await fetch('https://api.tvmaze.com/shows?page=0', {
    next: { revalidate: 21600 },
  });
  const data = await response.json();

  return data;
};
