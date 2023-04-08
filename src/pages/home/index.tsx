import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getChildren,
  getComedy,
  getPopular,
  getTheatres,
  getTop,
  getMovieRandom
} from "../../store/thunks/moviesBrowseThunk";
import { Header } from "../../components";

const Home = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.movieBrowse.popular);
  const movie:any= useAppSelector((state) => state.movieBrowse.movieRender);
  console.log(movie.backdrop_path);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getTheatres());
    dispatch(getChildren());
    dispatch(getComedy());
    dispatch(getTop());
    dispatch(getMovieRandom());
  }, [dispatch]);

  return (
    <div>
      <Header image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  title={movie.title} />
   
      <h1>home</h1>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default Home;
