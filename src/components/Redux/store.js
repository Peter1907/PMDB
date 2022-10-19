import { combineReducers, configureStore } from '@reduxjs/toolkit';
import detailsReducer from './details/details';
import inTheatersReducer from './in-theaters/in-theaters';
import popMoviesReducer from './pop-movies/pop-movies';
import popSeriesReducer from './pop-series/pop-series';
import topMoviesReducer from './top-movies/top-movies';
import topSeriesReducer from './top-series/top-series';
import trailerReducer from './trailer/trailer';

const peterReducer = combineReducers({
  topMovies: topMoviesReducer,
  topSeries: topSeriesReducer,
  popMovies: popMoviesReducer,
  popSeries: popSeriesReducer,
  inTheaters: inTheatersReducer,
  trailer: trailerReducer,
  details: detailsReducer,
});

const store = configureStore({
  reducer: peterReducer,
});

export default store;
