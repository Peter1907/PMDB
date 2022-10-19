import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/in-theaters/GET';
const GET_STORED = './redux/in-theaters/GET_STORED';

export default function inTheatersReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      localStorage.setItem('IN_THEATERS', JSON.stringify(action.payload.items));
      return action.payload.items;
    case GET_STORED:
      return JSON.parse(localStorage.getItem('IN_THEATERS'));
    default:
      return state;
  }
}

const getInTheaters = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/InTheaters/k_sncsc4tf');
    const data = await response.data;
    return data;
  },
);

const getStoredInTheaters = () => ({
  type: GET_STORED,
});

export { getInTheaters, getStoredInTheaters };
