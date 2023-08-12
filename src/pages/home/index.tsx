import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  // getChildren,
  // getComedy,
  fetchPopular,
  // getTheatres,
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

  const moviesTheatres: any = useAppSelector(
    (state) => state.movieHome.theatres
  );
  const moviesChildren: any = useAppSelector(
    (state) => state.movieHome.children
  );
  const moviesComedy: any = useAppSelector((state) => state.movieHome.comedies);
  const moviesTops: any = useAppSelector((state) => state.movieHome.top);

  const movie: any = useAppSelector((state) => state.movieHome.movieRender);

  const moviesPopular = useAppSelector((state) => state.movieHome.popular);
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
    getTheater();
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
          <img
            className={styles.contentSectionImage}
            src={`https://image.tmdb.org/t/p/original${randomPoster}`}
            alt="Random Poster"
          />
        </div>
      </ContentSection>
      <ContentCard>
        <h1 className={styles.cardNotMobile}>hola</h1>
      </ContentCard>
    </div>
  );
};

export default Home;
