import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/pop-movies/GET';
const GET_STORED = './redux/pop-movies/GET_STORED';

export default function popMoviesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      localStorage.setItem('POP_MOVIES', JSON.stringify(action.payload.items));
      return action.payload.items;
    case GET_STORED:
      return JSON.parse(localStorage.getItem('POP_MOVIES'));
    default:
      return state;
  }
}

const getPopMovies = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/MostPopularMovies/k_0m1r0qhf');
    const data = await response.data;
    return data;
  },
);

const getStoredPopMovies = () => ({
  type: GET_STORED,
});

export { getPopMovies, getStoredPopMovies };
