import { DataApi, MovieData } from "../types/types";

export const transformMovieData = (data: DataApi[]): MovieData[] => {
    return data.map(movie => ({
      title: movie.title,
      poster: movie.poster_path,
      date:movie.release_date,
      image:movie.backdrop_path,
      description:movie.overview,
      id:movie.id
    }));
  };