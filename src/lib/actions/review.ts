'use server';

import type { ReviewFormData } from '@/lib/validations/review';
import type { WatchlistShow } from '@/types/show';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { reviewSchema } from '../validations/review';

import { redirect, RedirectType } from 'next/navigation';

const filePath = 'data/watchlist.json';

export const saveReview = async (data: ReviewFormData, id: number) => {
  const result = reviewSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: 'Invalid review data',
    };
  }

  try {
    const file = await readFile(filePath, 'utf8');

    const shows: WatchlistShow[] = JSON.parse(file);

    const reviewedShow = shows.find((show) => show.id === id);

    if (!reviewedShow) {
      return {
        success: false,
        message: 'Show not found in watchlist',
      };
    }

    const updatedShow = {
      ...reviewedShow,
      review: result.data,
    };

    const updatedShows = shows.map((show) =>
      show.id === id ? updatedShow : show,
    );

    const json = JSON.stringify(updatedShows, null, 2);

    await writeFile(filePath, json);

    revalidatePath('/watchlist');
    revalidatePath(`/show/${id}`);
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Failed to save review',
    };
  }

  redirect(`/show/${id}`, RedirectType.replace);
};

export const deleteReview = async (id: number) => {
  try {
    const file = await readFile(filePath, 'utf8');

    const shows: WatchlistShow[] = JSON.parse(file);

    const updatedShows = shows.map((show) =>
      show.id === id ? { ...show, review: undefined } : show,
    );

    const json = JSON.stringify(updatedShows, null, 2);

    await writeFile(filePath, json);

    revalidatePath('/watchlist');
    revalidatePath(`/show/${id}`);
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Failed to delete review',
    };
  }

  redirect(`/show/${id}`, RedirectType.replace);
};
