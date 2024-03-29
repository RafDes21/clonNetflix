import { Dispatch } from "redux";

import {
  setPopular,
  setTeather,
  setChildren,
  setComedies,
  setTops,
} from "../slices/movieHomeSlice";
import {
  getChildren,
  getComedy,
  getPopular,
  getTheater,
  getTop,
} from "../../services/moviesHome";
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

export const fetchComedy = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getComedy();
      const transformedData: MovieData[] = transformMovieData(data);
      dispatch(setComedies(transformedData));
    } catch (error) {
      console.log("Error in fetchComedy thunk", error);
    }
  };
};

export const fetchTop = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await getTop();
      const transformedData: MovieData[] = transformMovieData(data);
      dispatch(setTops(transformedData));
    } catch (error) {
      console.log("Error in fetchTops thunk", error);
    }
  };
};
