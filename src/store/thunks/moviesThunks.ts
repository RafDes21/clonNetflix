import { Dispatch } from "redux";
import {
  setAction,
  setAdventure,
  setFamily,
  setFantasy,
  setComedies,
  setCategories,
} from "../slices/movieSlice";
import { getMoviesCagories } from "../../services/movies.services";

interface MoviesLoadedAction {
  type: string;
  payload: Object[];
}

const env = import.meta.env.VITE_API_KEY;

export const fetchMoviesCategories = () => {
  return async (dispatch: Dispatch) => {
    const data = await getMoviesCagories();
    dispatch(setCategories(data));
  };
};

export const getForIdCategory = (id: number, nameCategory: string) => {
  return async (dispatch: Dispatch<MoviesLoadedAction>) => {
    if (nameCategory === "Action") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=2&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch(setAction(data.results)));
    }
    if (nameCategory === "Adventure") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=5&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch(setAdventure(data.results)));
    }

    if (nameCategory === "Family") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=3&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch(setFamily(data.results)));
    }
    if (nameCategory === "Fantasy") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=6&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch(setFantasy(data.results)));
    }
    if (nameCategory === "Comedy") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=1&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch(setComedies(data.results)));
    }
  };
};

