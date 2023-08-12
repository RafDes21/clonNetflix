import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import movieHomeReducer from "./slices/movieHomeSlice";
import seriesReducer from "./slices/series";
import filterReducer from "./slices/filter";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieHome: movieHomeReducer,
    series: seriesReducer,
    filter: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
