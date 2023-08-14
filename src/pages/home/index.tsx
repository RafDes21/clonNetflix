import {
  ContentCard,
  ContentSection,
} from "../../components";
import styles from "./styles.module.css";
import { useMoviesHome } from "../../hooks/useMoviesHome";
import useWindowWidth from "../../hooks/useWindowWidth";

const Home = () => {
  const {
    randomPoster,
    moviesChildren,
    moviesComedy,
    moviesPopular,
    moviesTeather,
    moviesTops,
  } = useMoviesHome();

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
      <ContentCard title={"Popular"} movies={moviesPopular} isMobile={isMobile} />
      
      <ContentCard title={"Theater"} movies={moviesTeather} isMobile={isMobile} />
   
      <ContentCard title={"Comedies"} movies={moviesComedy} isMobile={isMobile} />
     
      <ContentCard title={"Top"} movies={moviesTops} isMobile={isMobile} />
    
      <ContentCard title={"Children"} movies={moviesChildren} isMobile={isMobile} />
      
    </div>
  );
};

export default Home;
