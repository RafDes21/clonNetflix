import { ContentCard, ContentSection } from "../../components";
import styles from "./styles.module.css";
import { useMoviesHome } from "../../hooks/useMoviesHome";

const Home = () => {
  const {
    randomPoster,
    moviesChildren,
    moviesComedy,
    moviesPopular,
    moviesTeather,
    moviesTops,
  } = useMoviesHome();

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
