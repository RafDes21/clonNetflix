import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/hook";
import { getRandomPoster } from "../utils/getRandomPoster";
import {
  fetchChildren,
  fetchComedy,
  fetchPopular,
  fetchTeather,
  fetchTop,
} from "../store/thunks/moviesHomeThunk";

export const useMoviesHome = () => {
  const dispatch = useAppDispatch();

  const moviesPopular = useAppSelector((state) => state.movieHome.popular);
  const moviesTeather = useAppSelector((state) => state.movieHome.teather);
  const moviesChildren = useAppSelector((state) => state.movieHome.children);
  const moviesComedy = useAppSelector((state) => state.movieHome.comedies);
  const moviesTops = useAppSelector((state) => state.movieHome.top);

  const [isLoading, setIsLoading] = useState(true);

  const [randomPoster, setRandomPoster] = useState("");

  useEffect(() => {
    if (moviesPopular.length > 0) {
      const poster = getRandomPoster(moviesPopular);
      setRandomPoster(poster.image);
      setIsLoading(false);
    }
  }, [moviesPopular]);

  useEffect(() => {
    dispatch(fetchPopular());
    dispatch(fetchTeather());
    dispatch(fetchChildren());
    dispatch(fetchComedy());
    dispatch(fetchTop());
  }, []);
  return {
    moviesChildren,
    moviesComedy,
    moviesPopular,
    moviesTeather,
    moviesTops,
    randomPoster,
    isLoading,
  };
};
