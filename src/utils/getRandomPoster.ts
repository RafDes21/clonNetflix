import { MovieData, RandomMovie } from "../types/types";

export const getRandomPoster = (movies: MovieData[]): RandomMovie => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = {
    poster: movies[randomIndex].poster,
    image: movies[randomIndex].image,
  };
  return movie;
};
