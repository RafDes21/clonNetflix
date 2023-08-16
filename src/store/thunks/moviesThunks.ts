import { Dispatch } from "redux";
import {
  setAction,
  setAdventure,
  setFamily,
  setFantasy,
  setComedies,
  setCategories,
} from "../slices/movieSlice";
import {
  fetchMoviesByGenre,
  getMoviesCagories,
} from "../../services/movies.services";
import { transformMovieData } from "../../utils/movieUtils";
import { MovieData } from "../../types/types";

export const fetchMoviesCategories = () => {
  return async (dispatch: Dispatch) => {
    const data = await getMoviesCagories();
    dispatch(setCategories(data));
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

      const data = await fetchMoviesByGenre(id, page, sort);
      const transformedData: MovieData[] = transformMovieData(data);

      if (nameCategory === "Action") {
        dispatch(setAction(transformedData));
      }
      if (nameCategory === "Adventure") {
        dispatch(setAdventure(transformedData));
      }

      if (nameCategory === "Family") {
        dispatch(setFamily(transformedData));
      }
      if (nameCategory === "Fantasy") {
        dispatch(setFantasy(transformedData));
      }
      if (nameCategory === "Comedy") {
        dispatch(setComedies(transformedData));
      }
    } catch (error) {}
  };
};
