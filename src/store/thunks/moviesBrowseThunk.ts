import { Dispatch } from "redux";
import {
  setPopular,
  setTheatres,
  setChildren,
  setComedies,
  setTops,
  setMovieRender,
} from "../slices/moviesBrowsSlice";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface PopularLoadedAction {
  type: string;
  payload: Movie[];
}

const env = import.meta.env.VITE_API_KEY;

// popular
export const getPopular = () => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&sort_by=popularity.desc`;
    try {
      const res = await fetch(api).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      });

      dispatch(setPopular(res.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieRandom = () => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const random_number = Math.floor(Math.random() * 20) + 1;
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&sort_by=popularity.desc`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });
console.log("tambien");

    dispatch(setMovieRender(res.results[random_number]));
  };
};
// theatres
export const getTheatres = () => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });
    dispatch(setTheatres(res.results));
  };
};

// children
export const getChildren = () => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });
    dispatch(setChildren(res.results));
  };
};

// comedies
export const getComedy = () => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&with_genres=35&with_cast=23659&sort_by=revenue.desc`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });
    dispatch(setComedies(res.results));
  };
};
// tops
export const getTop = () => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&primary_release_year=2020&sort_by=popularity.desc`;

    const res = await fetch(api).then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.json();
    });
    dispatch(setTops(res.results));
  };
};
