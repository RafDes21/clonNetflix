import { Dispatch } from "redux";
import {
  setNews,
  setCrime,
  setFamily,
  setKids,
  setComedies,
  setCategories,
  setSerRender,
} from "../slices/series";

interface SeriesLoadedAction {
  type: string;
  payload: Object[];
}

export const getSeriesCategories = () => {
  return async (dispatch: Dispatch<SeriesLoadedAction>) => {
    const API =
      "https://api.themoviedb.org/3/genre/tv/list?api_key=e7e16089afd28414ef3120b577232770&language=en-US";
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
  return async (dispatch: Dispatch<SeriesLoadedAction>) => {
    if (nameCategory === "News") {
      const API = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;
      const result = await fetch(API).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        } else {
          return response.json();
        }
      });
      dispatch(setNews(result.results));
    }
    if (nameCategory === "Crime") {
      const API = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;
      const result = await fetch(API).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        } else {
          return response.json();
        }
      });
      dispatch(setCrime(result.results));
    }
    if (nameCategory === "Family") {
      const API = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;
      const result = await fetch(API).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        } else {
          return response.json();
        }
      });
      dispatch(setFamily(result.results));
    }
    if (nameCategory === "Kids") {
      const API = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;
      const result = await fetch(API).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        } else {
          return response.json();
        }
      });
      dispatch(setKids(result.results));
    }
    if (nameCategory === "Comedy") {
      const API = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${id}&sort_by=popularity.desc`;
      const result = await fetch(API).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        } else {
          return response.json();
        }
      });
      dispatch(setComedies(result.results));
    }
  };
};

export const getSeriesRandom = () => {
  return async (dispatch: Dispatch<SeriesLoadedAction>) => {
    const random_number = Math.floor(Math.random() * 20) + 1;
    const idRandom = 16;
    const api = `https://api.themoviedb.org/3/discover/tv?api_key=e7e16089afd28414ef3120b577232770&page=1&with_genres=${idRandom}&sort_by=popularity.desc`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });

    dispatch(setSerRender(res.results[random_number]));
  };
};
