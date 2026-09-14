import type { WatchlistShow } from '@/types/show';
import { readFile } from 'fs/promises';

const filePath = 'data/watchlist.json';

export const getWatchlist = async (): Promise<WatchlistShow[]> => {
  try {
    const file = await readFile(filePath, 'utf8');

    const shows: WatchlistShow[] = JSON.parse(file);

    return shows;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch watchlist');
  }
};
