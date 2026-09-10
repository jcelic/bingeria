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
};

export type SearchResult = {
  score: number;
  show: Show;
};
