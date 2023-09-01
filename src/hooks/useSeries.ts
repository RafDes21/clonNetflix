import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/hook";
import { getRandomPoster } from "../utils/getRandomPoster";
import { fetchCategories, getForIdCategory } from "../store/thunks/seriesThunk";

export const useSeries = () => {
  const dispatch = useAppDispatch();

  const seriesCategories = useAppSelector((state) => state.series.setCategories);
  const seriesNew = useAppSelector((state) => state.series.news);
  const seriesComedies = useAppSelector((state) => state.series.comedies);
  const seriesFamily = useAppSelector((state) => state.series.family);
  const seriesKids = useAppSelector((state) => state.series.kids);
  const seriesCrime = useAppSelector((state) => state.series.crime);

  const [isLoading, setIsLoading] = useState(true);

  const [randomPoster, setRandomPoster] = useState("");

  useEffect(() => {
    if (seriesNew.length > 0 && seriesCategories.length > 0) {
      const poster = getRandomPoster(seriesNew);
      setRandomPoster(poster.image);
      setIsLoading(false);
    }
  }, [seriesNew, seriesCategories]);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  interface Series {
    id: number;
    name: string;
  }
  useEffect(() => {
    if (seriesCategories.length > 0) {
      seriesCategories.map((category: Series) =>
        dispatch(getForIdCategory(category.id, category.name))
      );
    }
  }, [seriesCategories]);
  return {
    seriesNew,
    seriesComedies,
    seriesFamily,
    seriesKids,
    seriesCrime,
    randomPoster,
    isLoading,
  };
};
