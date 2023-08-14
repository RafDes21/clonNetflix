import { Dispatch } from "redux";
import {
  setNews,
  setCrime,
  setFamily,
  setKids,
  setComedies,
} from "../slices/series";
import { fetchSeriesByGenre, getCagories } from "../../services/series";
import { setCategories } from "../slices/movieSlice";
import { transformMovieData } from "../../utils/movieUtils";
import { MovieData } from "../../types/types";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    const result = await getCagories();

    dispatch(setCategories(result));
  };
};

export const getForIdCategory = (id: number, nameCategory: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let page = 1;
      let sort = "popularity.desc";

      if (nameCategory === "Family") {
        page = 3;
      }

      const data = await fetchSeriesByGenre(id, page, sort);
      const transformedData: MovieData[] = transformMovieData(data);

      if (nameCategory === "News") {
        dispatch(setNews(transformedData));
      }
      if (nameCategory === "Crime") {
        dispatch(setCrime(transformedData));
      }
      if (nameCategory === "Family") {
        dispatch(setFamily(transformedData));
      }
      if (nameCategory === "Kids") {
        dispatch(setKids(transformedData));
      }
      if (nameCategory === "Comedy") {
        dispatch(setComedies(transformedData));
      }
    } catch (error) {
      // Manejar errores aquí
    }
  };
};
