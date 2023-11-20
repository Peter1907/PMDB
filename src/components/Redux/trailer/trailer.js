import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { trailerData } from '../../../apiData/trailerData';

const GET = './redux/trailer/GET';
const GET_STORED = './redux/trailer/GET_STORED';

export default function trailerReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      sessionStorage.setItem(`T_${action.payload.imDbId}`, JSON.stringify(action.payload));
      return action.payload;
    case GET_STORED:
      return JSON.parse(sessionStorage.getItem(`T_${action.id}`));
    default:
      return state;
  }
}

const getTrailer = createAsyncThunk(
  GET,
  async (id) => {
    const response = await axios(`https://imdb-api.com/en/API/Trailer/k_sncsc4tf/${id}`);
    const data = response.data.errorMessage
      ? trailerData[`T_${id}`] || trailerData['Default']
      : response.data;
    return data;
  },
);

const getStoredTrailer = (id) => ({
  type: GET_STORED,
  id,
});

export { getTrailer, getStoredTrailer };
