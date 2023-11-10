import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { POP_SERIES } from '../../../apiData/popSeries';

const GET = './redux/pop-series/GET';
const GET_STORED = './redux/pop-series/GET_STORED';
const FILTER = './redux/pop-series/FILTER';
const REMOVE_FILTER = './redux/pop-series/REMOVE_FILTER';

export default function popSeriesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const data = action.payload.items || action.payload;
      const modData = data.map((item) => ({
        ...item,
        image: item.image.replace('UX128_CR0', 'UX350'),
      }));
      sessionStorage.setItem('POP_SERIES', JSON.stringify(modData));
      return modData;
    }
    case GET_STORED:
      return JSON.parse(sessionStorage.getItem('POP_SERIES'));
    case FILTER: {
      const list = JSON.parse(sessionStorage.getItem('POP_SERIES'));
      const param = new RegExp(action.text, 'ig');
      const modList = list.filter((item) => (item[action.category].match(param)));
      return modList;
    }
    case REMOVE_FILTER:
      return JSON.parse(sessionStorage.getItem('POP_SERIES'));
    default:
      return state;
  }
}

const getPopSeries = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/MostPopularTVs/k_0m1r0qhf');
    const data = response.data.errorMessage ? POP_SERIES : response.data;
    return data;
  },
);

const getStoredPopSeries = () => ({
  type: GET_STORED,
});

const filterPopSeries = (category, text) => ({
  type: FILTER,
  category,
  text,
});

const removePopSeriesFilter = () => ({
  type: REMOVE_FILTER,
});

export {
  getPopSeries,
  getStoredPopSeries,
  filterPopSeries,
  removePopSeriesFilter,
};
