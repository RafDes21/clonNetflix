import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getChildren,
  getComedy,
  getPopular,
  getTheatres,
  getTop,
  getMovieRandom,
} from "../../store/thunks/moviesBrowseThunk";
import { Header } from "../../components";
import styles from "./styles.module.css"

const Home = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.movieBrowse.popular);
  const movie: any = useAppSelector((state) => state.movieBrowse.movieRender);
  console.log(movies);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getTheatres());
    dispatch(getChildren());
    dispatch(getComedy());
    dispatch(getTop());
    dispatch(getMovieRandom());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <Header
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        title={movie.title}
        description={movie.overview}
      />
      <div className={styles.contentMain}>
        <h1>home</h1>
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

export default Home;
