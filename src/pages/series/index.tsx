import styles from "./styles.module.css";
import { ContentCard, ContentSection } from "../../components";
import { useSeries } from "../../hooks/useSeries";
import useWindowWidth from "../../hooks/useWindowWidth";

const Series = () => {
  const {
    seriesNew,
    seriesComedies,
    seriesFamily,
    seriesKids,
    seriesCrime,
    randomPoster,
  } = useSeries();

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
      <ContentCard title={"Comedies"} movies={seriesComedies} isMobile={isMobile}/>
      <ContentCard title={"Crimen"} movies={seriesCrime} isMobile={isMobile} />
      <ContentCard title={"Family"} movies={seriesFamily} isMobile={isMobile} />
      <ContentCard title={"Kids"} movies={seriesKids} isMobile={isMobile} />
      <ContentCard title={"New"} movies={seriesNew} isMobile={isMobile} />
    </div>
  );
};

export default Series;
