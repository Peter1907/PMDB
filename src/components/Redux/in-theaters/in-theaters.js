import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IN_THEATERS } from '../../../apiData/inTheaters';

const GET = './redux/in-theaters/GET';
const GET_STORED = './redux/in-theaters/GET_STORED';
const UPDATE = './redux/in-theaters/UPDATE';

export default function inTheatersReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const data = action.payload.items || action.payload;
      const modData = data.map((item) => ({
        ...item,
        image: item.image.replace(/_UX128_CR0_|_AL_/, '_UX350_'),
      }));
      sessionStorage.setItem('IN_THEATERS', JSON.stringify(modData));
      return [modData[0], modData.slice(1, 4)];
    }
    case GET_STORED: {
      const modData = JSON.parse(sessionStorage.getItem('IN_THEATERS'));
      return [modData[0], modData.slice(1, 4)];
    }
    case UPDATE: {
      const data = JSON.parse(sessionStorage.getItem('IN_THEATERS'));
      const modData = [data[0], data.slice(1, action.count)];
      return modData;
    }
    default:
      return state;
  }
}

const getInTheaters = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://imdb-api.com/en/API/InTheaters/k_sncsc4tf');
    const data = response.data.errorMessage ? IN_THEATERS : response.data;
    return data;
  },
);

const getStoredInTheaters = () => ({
  type: GET_STORED,
});

const updateInTheaters = (count) => ({
  type: UPDATE,
  count,
});

export { getInTheaters, getStoredInTheaters, updateInTheaters };
