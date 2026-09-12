import type { ReviewFormData } from '@/lib/validations/review';

export type Show = {
  id: number;
  image: {
    medium: string;
    original: string;
  } | null;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  premiered: string | null;
  summary: string | null;
  review?: ReviewFormData;
};

export type SearchResult = {
  score: number;
  show: Show;
};
