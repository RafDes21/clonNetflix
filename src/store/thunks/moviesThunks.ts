import { Dispatch } from "redux";
import {
  setAction,
  setAdventure,
  setFamily,
  setFantasy,
  setComedies,
  setCategories,
  setMovieRender,
} from "../slices/movieSlice";

interface MoviesLoadedAction {
  type: string;
  payload: Object[];
}

const env = import.meta.env.VITE_API_KEY;

export const getMoviesCategories = () => {
  return async (dispatch: Dispatch<MoviesLoadedAction>) => {
    const API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${env}&language=en-US`;
    const result = await fetch(API).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      } else {
        return response.json();
      }
    });

    dispatch(setCategories(result.genres));
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
        .then((data) => dispatch(setAction(data.results)));
    }
    if (nameCategory === "Fantasy") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=6&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
      .then((response) => response.json())
      .then((data) => dispatch(setAction(data.results)));
  }
    if (nameCategory === "Comedy") {
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=1&with_genres=${id}&sort_by=popularity.desc`;
      await fetch(API)
      .then((response) => response.json())
      .then((data) => dispatch(setAction(data.results)));
  }
}};

export const getMoviesRandom = () => {
  return async (dispatch: Dispatch<MoviesLoadedAction>) => {
    const random_number = Math.floor(Math.random() * 20) + 1;
    const idRandom = 16;
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&page=1&with_genres=${idRandom}&sort_by=popularity.desc`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });

    dispatch(setMovieRender(res.results[random_number]));
  };
};
