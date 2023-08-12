import {
  ContenCardNotMobile,
  ContentCard,
  ContentSection,
} from "../../components";
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
      <ContentCard title={"Popular"} movies={moviesPopular} isMobile={true}>
        <ContenCardNotMobile />
      </ContentCard>
      <ContentCard title={"Theater"} movies={moviesTeather} isMobile={true}>
        <ContenCardNotMobile />
      </ContentCard>
      <ContentCard title={"Comedies"} movies={moviesComedy} isMobile={true}>
        <ContenCardNotMobile />
      </ContentCard>
      <ContentCard title={"Top"} movies={moviesTops} isMobile={true}>
        <ContenCardNotMobile />
      </ContentCard>
      <ContentCard title={"Children"} movies={moviesChildren} isMobile={true}>
        <ContenCardNotMobile />
      </ContentCard>
      <ContentCard title={"Children"} movies={moviesChildren} isMobile={false}>
        <ContenCardNotMobile />
      </ContentCard>
    </div>
  );
};

export default Home;
