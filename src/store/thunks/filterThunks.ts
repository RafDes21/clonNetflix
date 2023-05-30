import { Dispatch } from "redux";
import { setFilterMovies } from "../slices/filter";

interface PopularLoadedAction {
  type: string;
  payload: Object[];
}

export const fetchFilterMovies = (keyword: string | null) => {
  return async (dispatch: Dispatch<PopularLoadedAction>) => {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=e7e16089afd28414ef3120b577232770&language=en-US&page=1&include_adult=false?&query=${keyword}`;
    try {
      const res = await fetch(api).then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      });

      dispatch(setFilterMovies(res.results));
    } catch (error) {
      console.log(error);
    }
  };
};
