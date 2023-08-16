import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getForIdCategory,
  fetchMoviesCategories,

} from "../../store/thunks/moviesThunks";
import { ContentCard, ContentSection } from "../../components";
import styles from "./styles.module.css";

const Movies = () => {
  const dispatch = useAppDispatch();

  const moviesForIdAndName: any = useAppSelector(
    (state) => state.movie.moviesCategories
  );

  
  // console.log(moviesOneRender);

  const moviesAction: any = useAppSelector((state) => state.movie.action);
  const moviesAdventure: any = useAppSelector((state) => state.movie.adventure);
  const moviesComedies: any = useAppSelector((state) => state.movie.comedies);
  const moviesFamily: any = useAppSelector((state) => state.movie.family);
  const movieFantasy: any = useAppSelector((state) => state.movie.fantasy);

  useEffect(() => {
    dispatch(fetchMoviesCategories() )
    // dispatch(getMoviesCategories());
    
  }, [dispatch]);

  useEffect(() => {
    moviesForIdAndName.map((state: any) =>
      dispatch(getForIdCategory(state.id, state.name))
    );
  }, [moviesForIdAndName]);

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

export default Movies;
