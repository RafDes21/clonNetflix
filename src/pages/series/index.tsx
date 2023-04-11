import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import {
  getForIdCategory,
  getSeriesCategories,
  getSeriesRandom,
} from "../../store/thunks/seriesThunk";
import styles from "./styles.module.css";
import { ContainSlider, Header } from "../../components";

const Series = () => {
  const dispatch = useAppDispatch();
  const seriesForIdAndName: any = useAppSelector(
    (state) => state.series.serCategories
  );

  const seriesOneRender: any = useAppSelector(
    (state) => state.series.serRender
  );
  const seriesNew: any = useAppSelector((state) => state.series.news);
  const seriesComedies: any = useAppSelector((state) => state.series.comedies);
  const seriesFamily: any = useAppSelector((state) => state.series.family);
  const seriesKids: any = useAppSelector((state) => state.series.kids);
  const seriesCrime: any = useAppSelector((state) => state.series.crime);

  useEffect(() => {
    dispatch(getSeriesCategories());
    dispatch(getSeriesRandom());
  }, []);

  useEffect(() => {
    seriesForIdAndName.map((state: any) =>
      dispatch(getForIdCategory(state.id, state.name))
    );
  }, [seriesForIdAndName]);

  return (
    <div>
      {seriesOneRender.backdrop_path ? 
        <>
          <Header
            image={`https://image.tmdb.org/t/p/original${seriesOneRender.backdrop_path}`}
            title={seriesOneRender.original_name}
            description={seriesOneRender.overview}
          />
          <div className={styles.contentMain}>
            <ContainSlider title="New" arrayList={seriesNew} />
            <ContainSlider title="Comedies" arrayList={seriesComedies} />
            <ContainSlider title="Family" arrayList={seriesFamily} />
            <ContainSlider title="Kids" arrayList={seriesKids} />
            <ContainSlider title="Crime" arrayList={seriesCrime} />
          </div>
        </>
      : 
        <h1 className={styles.loading}>loading</h1>
      }
    </div>
  );
};

export default Series;
