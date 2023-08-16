import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/hook";
import { getRandomPoster } from "../utils/getRandomPoster";
import { Categorie } from "../types/types";
import { fetchMoviesCategories, getForIdCategory } from "../store/thunks/moviesThunks";

export const useMovies = () => {
  const dispatch = useAppDispatch();

  const moviesCategories = useAppSelector((state) => state.movie.moviesCategories);
  const moviesFantasy = useAppSelector((state) => state.movie.fantasy);
  const moviesFamily = useAppSelector((state) => state.movie.family);
  const moviesComedies = useAppSelector((state) => state.movie.comedies);
  const moviesAdventure = useAppSelector((state) => state.movie.adventure);
  const moviesAction = useAppSelector((state) => state.movie.action);

  const [isLoading, setIsLoading] = useState(true);

  const [randomPoster, setRandomPoster] = useState("");

  useEffect(() => {
    if (moviesFantasy.length > 0 && moviesCategories.length > 0) {
      const poster = getRandomPoster(moviesFantasy);
      setRandomPoster(poster.image);
      setIsLoading(false);
    }
  }, [moviesFantasy, moviesCategories]);
  useEffect(() => {
    dispatch(fetchMoviesCategories());
  }, []);

  useEffect(() => {
    if (moviesCategories.length > 0) {
      moviesCategories.map((category: Categorie) =>
        dispatch(getForIdCategory(category.id, category.name))
      );
    }
  }, [moviesCategories]);
  return {
    moviesFantasy,
    moviesComedies,
    moviesFamily,
    moviesAdventure,
    moviesAction,
    randomPoster,
    isLoading,
  };
};
