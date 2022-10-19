import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/details/GET';
const GET_STORED = './redux/details/GET_STORED';

export default function detailsReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      console.log(action.payload);
      localStorage.setItem(action.payload.id, JSON.stringify(action.payload));
      return action.payload;
    case GET_STORED:
      return JSON.parse(localStorage.getItem(action.id));
    default:
      return state;
  }
}

const getDetails = createAsyncThunk(
  GET,
  async (id) => {
    const response = await axios(`https://imdb-api.com/en/API/Title/k_sncsc4tf/${id}`);
    const data = await response.data;
    return data
  },
);

const getStoredDetails = (id) => ({
  type: GET_STORED,
  id,
});

export { getDetails, getStoredDetails };
