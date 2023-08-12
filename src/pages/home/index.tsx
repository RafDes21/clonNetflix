import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getChildren,
  getComedy,
  fetchPopular,
  getTheatres,
  getTop,
  getMovieRandom,
} from "../../store/thunks/moviesHomeThunk";
import { ContainSlider, ContentSection, Header } from "../../components";
import styles from "./styles.module.css";

const Home = () => {
  const dispatch = useAppDispatch();

  const moviesPopular: any = useAppSelector((state) => state.movieHome.popular);
  const moviesTheatres: any = useAppSelector((state) => state.movieHome.theatres);
  const moviesChildren: any = useAppSelector((state) => state.movieHome.children);
  const moviesComedy: any = useAppSelector((state) => state.movieHome.comedies);
  const moviesTops: any = useAppSelector((state) => state.movieHome.top);

  const movie: any = useAppSelector((state) => state.movieHome.movieRender);

  

  useEffect(() => {
    dispatch(fetchPopular());
    // dispatch(getTheatres());
    // dispatch(getChildren());
    // dispatch(getComedy());
    // dispatch(getTop());
    // dispatch(getMovieRandom());
  }, []);

  return (
    <div className={styles.home}>
      <ContentSection>
        <div className={styles.showIsNotMobile}>
          render desktop
        </div>
      </ContentSection>
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
