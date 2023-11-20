import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { POP_MOVIES } from '../../../apiData/popMovies';

const GET = './redux/pop-movies/GET';
const GET_STORED = './redux/pop-movies/GET_STORED';
const FILTER = './redux/pop-movies/FILTER';
const REMOVE_FILTER = './redux/pop-movies/REMOVE_FILTER';

export default function popMoviesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const data = action.payload.items || action.payload;
      const modData = data.map((item) => ({
        ...item,
        image: item.image.replace('UX128_CR0,', 'UX350_'),
      }));
      sessionStorage.setItem('POP_MOVIES', JSON.stringify(modData));
      return modData;
    }
    case GET_STORED:
      return JSON.parse(sessionStorage.getItem('POP_MOVIES'));
    case FILTER: {
      const list = JSON.parse(sessionStorage.getItem('POP_MOVIES'));
      const param = new RegExp(action.text, 'ig');
      const modList = list.filter((item) => (item[action.category].match(param)));
      return modList;
    }
    case REMOVE_FILTER:
      return JSON.parse(sessionStorage.getItem('POP_MOVIES'));
    default:
      return state;
  }
}

const getPopMovies = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/MostPopularMovies/k_sncsc4tf');
    const data = response.data.errorMessage ? POP_MOVIES : response.data;
    return data;
  },
);

const filterPopMovies = (category, text) => ({
  type: FILTER,
  category,
  text,
});

const removePopMoviesFilter = () => ({
  type: REMOVE_FILTER,
});

const getStoredPopMovies = () => ({
  type: GET_STORED,
});

export {
  getPopMovies,
  getStoredPopMovies,
  filterPopMovies,
  removePopMoviesFilter,
};
