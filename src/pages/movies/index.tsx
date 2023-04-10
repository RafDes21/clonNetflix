import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getForIdCategory,
  getMoviesCategories,
  getMoviesRandom,
} from "../../store/thunks/moviesThunks";
import { ContainSlider, Header } from "../../components";
import styles from "./styles.module.css";

const Movies = () => {
  const dispatch = useAppDispatch();

  const moviesForIdAndName: any = useAppSelector(
    (state) => state.movie.moviesCategories
  );

  const moviesOneRender: any = useAppSelector(
    (state) => state.movie.moviesRender
  );
  const moviesAction: any = useAppSelector((state) => state.movie.action);
  const moviesAdventure: any = useAppSelector((state) => state.movie.adventure);
  const moviesComedies: any = useAppSelector((state) => state.movie.comedies);
  const moviesFamily: any = useAppSelector((state) => state.movie.family);
  const movieFantasy: any = useAppSelector((state) => state.movie.fantasy);

  useEffect(() => {
    dispatch(getMoviesCategories());
    dispatch(getMoviesRandom());
  }, [dispatch]);

  useEffect(() => {
    moviesForIdAndName.map((state: any) =>
      dispatch(getForIdCategory(state.id, state.name))
    );
  }, [moviesForIdAndName]);

  return (
    <div>
      <Header
        image={`https://image.tmdb.org/t/p/original${moviesOneRender.backdrop_path}`}
        title={moviesOneRender.title}
        description={moviesOneRender.overview}
      />
      <div className={styles.contentMain}>
        <ContainSlider title="Action" arrayList={moviesAction} />
        <ContainSlider title="Adventure" arrayList={moviesAdventure} />
        <ContainSlider title="Comedy" arrayList={moviesComedies} />
        <ContainSlider title="Family" arrayList={moviesFamily} />
        <ContainSlider title="Fantasy" arrayList={movieFantasy} />
      </div>
    </div>
  );
};

export default Movies;
