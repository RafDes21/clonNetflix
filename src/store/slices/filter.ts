import { createSlice } from "@reduxjs/toolkit";

interface FilterMovies {
  movies: [];
}

const initialState: FilterMovies = {
  movies: [],
};

const filterMoviesSlice = createSlice({
  name: "filterMovies",
  initialState,
  reducers: {
    setFilterMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setFilterMovies } = filterMoviesSlice.actions;

export default filterMoviesSlice.reducer;
