import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/top-movies/GET';
const GET_STORED = './redux/top-movies/GET_STORED';
const FILTER = './redux/top-movies/FILTER';
const REMOVE_FILTER = './redux/top-movies/REMOVE_FILTER';

export default function topMoviesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const data = action.payload.items;
      const modData = data.map((item) => ({
        ...item,
        image: item.image.replace('UX128_CR0,', ''),
      }));
      localStorage.setItem('TOP_MOVIES', JSON.stringify(modData));
      return modData;
    }
    case GET_STORED:
      return JSON.parse(localStorage.getItem('TOP_MOVIES'));
    case FILTER: {
      const list = JSON.parse(localStorage.getItem('TOP_MOVIES'));
      const param = new RegExp(action.text, 'ig');
      const modList = list.filter((item) => (item[action.category].match(param)));
      return modList;
    }
    case REMOVE_FILTER:
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

const filterTopMovies = (category, text) => ({
  type: FILTER,
  category,
  text,
});

const removeTopMoviesFilter = () => ({
  type: REMOVE_FILTER,
});

export {
  getTopMovies,
  getStoredTopMovies,
  filterTopMovies,
  removeTopMoviesFilter,
};
