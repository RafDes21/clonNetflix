import { Dispatch } from "redux";

import {
  setPopular,
  setTeather,
  setChildren,
  setComedies,
  setTops,
} from "../slices/movieHomeSlice";
import { getChildren, getPopular, getTheater } from "../../services/moviesHome";
import { transformMovieData } from "../../utils/movieUtils";
import { MovieData } from "../../types/types";

// popular
export const fetchPopular = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getPopular();
      const transformedData: MovieData[] = transformMovieData(data);
      dispatch(setPopular(transformedData));
    } catch (error) {
      console.log("Error in fetchPopular thunk", error);
    }
  };
};

export const fetchTeather = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getTheater();
      const transformedData: MovieData[] = transformMovieData(data);
      dispatch(setTeather(transformedData));
    } catch (error) {
      console.log("Error in fetchTheater thunk", error);
    }
  };
};

export const fetchChildren = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getChildren();
      const transformedData: MovieData[] = transformMovieData(data);
      dispatch(setChildren(transformedData));
    } catch (error) {
      console.log("Error in fetchChildren thunk", error);
    }
  };
};



// comedies
// export const getComedy = () => {
//   return async (dispatch: Dispatch<PopularLoadedAction>) => {
//     const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&with_genres=35&with_cast=23659&sort_by=revenue.desc`;

//     const res = await fetch(api).then((response) => {
//       if (!response.ok) {
//         throw new Error("error");
//       }
//       return response.json();
//     });
//     dispatch(setComedies(res.results));
//   };
// };
// tops
// export const getTop = () => {
//   return async (dispatch: Dispatch<PopularLoadedAction>) => {
//     const api = `https://api.themoviedb.org/3/discover/movie?api_key=${env}&primary_release_year=2020&sort_by=popularity.desc`;

//     const res = await fetch(api).then((response) => {
//       if (!response.ok) {
//         throw new Error("error");
//       }

//       return response.json();
//     });

//     dispatch(setTops(res.results));
//   };
// };

