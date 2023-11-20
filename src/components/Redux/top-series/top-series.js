import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOP_SERIES } from '../../../apiData/topSeries';

const GET = './redux/top-series/GET';
const GET_STORED = './redux/top-series/GET_STORED';
const FILTER = './redux/top-series/FILTER';
const REMOVE_FILTER = './redux/top-series/REMOVE_FILTER';

export default function topSeriesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const data = action.payload.items || action.payload;
      const modData = data.map((item) => ({
        ...item,
        image: item.image.replace('UX128_CR0', 'UX350'),
      }));
      sessionStorage.setItem('TOP_SERIES', JSON.stringify(modData));
      return modData;
    }
    case GET_STORED:
      return JSON.parse(sessionStorage.getItem('TOP_SERIES'));
    case FILTER: {
      const list = JSON.parse(sessionStorage.getItem('TOP_SERIES'));
      const param = new RegExp(action.text, 'ig');
      const modList = list.filter((item) => (item[action.category].match(param)));
      return modList;
    }
    case REMOVE_FILTER:
      return JSON.parse(sessionStorage.getItem('TOP_SERIES'));
    default:
      return state;
  }
}

const getTopSeries = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/Top250TVs/k_sncsc4tf');
    const data = response.data.errorMessage ? TOP_SERIES : response.data;
    return data;
  },
);

const getStoredTopSeries = () => ({
  type: GET_STORED,
});

const filterTopSeries = (category, text) => ({
  type: FILTER,
  category,
  text,
});

const removeTopSeriesFilter = () => ({
  type: REMOVE_FILTER,
});

export {
  getTopSeries,
  getStoredTopSeries,
  filterTopSeries,
  removeTopSeriesFilter,
};
