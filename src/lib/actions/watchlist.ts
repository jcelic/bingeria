'use server';

import type { Show } from '@/types/show';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';

const filePath = 'data/watchlist.json';

export const addShow = async (show: Show) => {
  try {
    const file = await readFile(filePath, 'utf8');

    const shows: Show[] = JSON.parse(file);

    if (shows.some((item) => item.id === show.id)) {
      return {
        success: true,
        message: 'Show is already in watchlist',
      };
    }

    shows.push(show);

    const json = JSON.stringify(shows, null, 2);

    await writeFile(filePath, json);

    revalidatePath('/watchlist');

    return { success: true, message: 'Show added to watchlist' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to add show' };
  }
};

export const getWatchlist = async (): Promise<Show[]> => {
  try {
    const file = await readFile(filePath, 'utf8');

    const shows = JSON.parse(file);

    return shows;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch watchlist');
  }
};

export const removeShow = async (id: number) => {
  try {
    const file = await readFile(filePath, 'utf8');

    const shows: Show[] = JSON.parse(file);

    const filteredShows = shows.filter((show) => show.id !== id);

    const json = JSON.stringify(filteredShows, null, 2);

    await writeFile(filePath, json);

    revalidatePath('/watchlist');

    return { success: true, message: 'Show removed from watchlist' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to remove show' };
  }
};
