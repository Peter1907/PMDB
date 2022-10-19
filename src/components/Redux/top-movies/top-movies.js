import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/top-movies/GET';
const GET_STORED = './redux/top-movies/GET_STORED';

export default function topMoviesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const data = action.payload.items;
      const modData = data.map((item) => ({
        ...item,
        image: item.image.replace('@._V1_UX128_CR0,12,128,176_AL_.jpg', '@._V1_.jpg'),
      }));
      localStorage.setItem('TOP_MOVIES', JSON.stringify(modData));
      return modData;
    }
    case GET_STORED:
      return JSON.parse(localStorage.getItem('TOP_MOVIES'));
    default:
      return state;
  }
}

const getTopMovies = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/Top250Movies/k_sncsc4tf');
    const data = await response.data;
    return data;
  },
);

const getStoredTopMovies = () => ({
  type: GET_STORED,
});

export { getTopMovies, getStoredTopMovies };
