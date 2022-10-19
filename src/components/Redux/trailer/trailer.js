import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/trailer/GET';
const GET_STORED = './redux/trailer/GET_STORED';

export default function trailerReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      localStorage.setItem(action.payload.imDbId, JSON.stringify(action.payload));
      return action.payload;
    case GET_STORED:
      return JSON.parse(localStorage.getItem(action.id));
    default:
      return state;
  }
}

const getTrailer = createAsyncThunk(
  GET,
  async (id) => {
    const response = await axios(`https://imdb-api.com/en/API/Trailer/k_sncsc4tf/${id}`);
    const data = await response.data;
    return data;
  },
);

const getStoredTrailer = (id) => ({
  type: GET_STORED,
  id,
});

export { getTrailer, getStoredTrailer };
