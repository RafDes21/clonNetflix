import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  fetchChildren,
  fetchComedy,
  // getComedy,
  fetchPopular,
  fetchTeather,
  fetchTop,
  // getTop,
  // getMovieRandom,
} from "../../store/thunks/moviesHomeThunk";
import {
  ContainSlider,
  ContentCard,
  ContentSection,
  Header,
} from "../../components";
import styles from "./styles.module.css";
import { MovieData } from "../../types/types";
import { getRandomPoster } from "../../utils/getRandomPoster";
import { getTheater } from "../../services/moviesHome";

const Home = () => {
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

  return (
    <div className={styles.home}>
      <ContentSection>
        <div className={styles.showIsNotMobile}>
          <img
            className={styles.contentSectionImage}
            src={`https://image.tmdb.org/t/p/original${randomPoster}`}
            alt="Random Poster"
          />
        </div>
      </ContentSection>
      <ContentCard title={"Popular"} movies={moviesPopular}>
        <h1 className={styles.cardNotMobile}>hola</h1>
      </ContentCard>
      <ContentCard title={"Theater"} movies={moviesTeather}>
        <h1 className={styles.cardNotMobile}>hola</h1>
      </ContentCard>
      <ContentCard title={"Comedies"} movies={moviesComedy}>
        <h1 className={styles.cardNotMobile}>hola</h1>
      </ContentCard>
      <ContentCard title={"Top"} movies={moviesTops}>
        <h1 className={styles.cardNotMobile}>hola</h1>
      </ContentCard>
      <ContentCard title={"Children"} movies={moviesChildren}>
        <h1 className={styles.cardNotMobile}>hola</h1>
      </ContentCard>
    </div>
  );
};

export default Home;
