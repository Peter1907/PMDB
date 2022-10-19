import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/top-series/GET';
const GET_STORED = './redux/top-series/GET_STORED';

export default function topSeriesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      localStorage.setItem('TOP_SERIES', JSON.stringify(action.payload.items));
      return action.payload.items;
    case GET_STORED:
      return JSON.parse(localStorage.getItem('TOP_SERIES'));
    default:
      return state;
  }
}

const getTopSeries = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/Top250TVs/k_0m1r0qhf');
    const data = await response.data;
    return data;
  },
);

const getStoredTopSeries = () => ({
  type: GET_STORED,
});

export { getTopSeries, getStoredTopSeries };
