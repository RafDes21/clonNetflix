import { ContentCard, ContentSection } from "../../components";
import styles from "./styles.module.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useMovies } from "../../hooks/useMovies";

const Movies = () => {

const {moviesAction,
  moviesAdventure,
  randomPoster,
  moviesComedies,
  moviesFamily,
  moviesFantasy,
} =useMovies()

  const isMobile = useWindowWidth();

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
      <ContentCard title={"Comedies"} movies={moviesComedies} isMobile={isMobile}/>
      <ContentCard title={"Action"} movies={moviesAction} isMobile={isMobile} />
      <ContentCard title={"Family"} movies={moviesFamily} isMobile={isMobile} />
      <ContentCard title={"Fantasy"} movies={moviesFantasy} isMobile={isMobile} />
      <ContentCard title={"Adventure"} movies={moviesAdventure} isMobile={isMobile} />
    </div>
  );
};

export default Movies;
