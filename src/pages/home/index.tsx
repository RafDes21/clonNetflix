import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getChildren,
  getComedy,
  getPopular,
  getTheatres,
  getTop,
  getMovieRandom,
} from "../../store/thunks/moviesBrowseThunk";
import { ContainSlider, Header } from "../../components";
import styles from "./styles.module.css";

const Home = () => {
  const dispatch = useAppDispatch();

  const moviesPopular: any = useAppSelector((state) => state.movieBrowse.popular);
  const moviesTheatres: any = useAppSelector((state) => state.movieBrowse.theatres);
  const moviesChildren: any = useAppSelector((state) => state.movieBrowse.children);
  const moviesComedy: any = useAppSelector((state) => state.movieBrowse.comedies);
  const moviesTops: any = useAppSelector((state) => state.movieBrowse.top);

  const movie: any = useAppSelector((state) => state.movieBrowse.movieRender);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getTheatres());
    dispatch(getChildren());
    dispatch(getComedy());
    dispatch(getTop());
    dispatch(getMovieRandom());
  }, []);

  return (
    <div className={styles.home}>
      {!movie.backdrop_path ? (
        <h1 className={styles.loading}>loading</h1>
      ) : (
        <>
          <Header
            image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            title={movie.title}
            description={movie.overview}
          />
          <div className={styles.contentMain}>
            <ContainSlider title="Popular" arrayList={moviesPopular} />
            <ContainSlider title="Theatres" arrayList={moviesTheatres} />
            <ContainSlider title="Children" arrayList={moviesChildren} />
            <ContainSlider title="Comedy" arrayList={moviesComedy} />
            <ContainSlider title="Tops" arrayList={moviesTops} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
