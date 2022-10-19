import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/pop-series/GET';
const GET_STORED = './redux/pop-series/GET_STORED';

export default function popSeriesReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      localStorage.setItem('POP_SERIES', JSON.stringify(action.payload.items));
      return action.payload.items;
    case GET_STORED:
      return JSON.parse(localStorage.getItem('POP_SERIES'));
    default:
      return state;
  }
}

const getPopSeries = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/MostPopularTVs/k_0m1r0qhf');
    const data = await response.data;
    return data
  },
);

const getStoredPopSeries = () => ({
  type: GET_STORED,
});

export { getPopSeries, getStoredPopSeries };
