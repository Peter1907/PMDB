import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { itemsData } from '../../../apiData/itemsData';

const GET = './redux/details/GET';
const GET_STORED = './redux/details/GET_STORED';
const CLEAR = './redux/details/CLEAR';

export default function detailsReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      sessionStorage.setItem(`D_${action.payload.id}`, JSON.stringify(action.payload));
      return action.payload;
    case GET_STORED:
      return JSON.parse(sessionStorage.getItem(`D_${action.id}`));
    default:
      return state;
  }
}

const getDetails = createAsyncThunk(
  GET,
  async (id) => {
    const response = await axios(`https://imdb-api.com/en/API/Title/k_0m1r0qhf/${id}`);
    const data = response.data.errorMessage ? itemsData[`D_${id}`] : response.data;
    return data;
  },
);

const getStoredDetails = (id) => ({
  type: GET_STORED,
  id,
});

const clearDetails = () => ({
  type: CLEAR,
});

export { getDetails, getStoredDetails, clearDetails };
