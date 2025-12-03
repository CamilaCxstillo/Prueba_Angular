export interface Movie {
  imdbID: string;
  title: string;
  year: string;
  type: string;
  poster: string;
  rating?: number;
  plot?: string;
  released?: string;
  genres?: string[];
}
