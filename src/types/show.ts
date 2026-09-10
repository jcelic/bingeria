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
};

export type SearchResult = {
  score: number;
  show: Show;
};
