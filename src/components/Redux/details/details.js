import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { itemsData } from '../../../apiData/itemsData';

const GET = './redux/details/GET';
const GET_STORED = './redux/details/GET_STORED';
const CLEAR_DATA = './redux/details/CLEAR_DATA';

export default function detailsReducer(state = [], action) {
  switch (action.type) {
    case `${GET}/fulfilled`:
      sessionStorage.setItem(`D_${action.payload.id}`, JSON.stringify(action.payload));
      return action.payload;
    case GET_STORED:
      return JSON.parse(sessionStorage.getItem(`D_${action.id}`));
    case CLEAR_DATA:
      return [];
    default:
      return state;
  }
}

const getDetails = createAsyncThunk(GET, async (id) => {
  const response = await axios(`https://tv-api.com/en/API/Title/k_0m1r0qhf/${id}`);
  const data = response.data.errorMessage
    ? itemsData[`D_${id}`] || itemsData['Default']
    : response.data;
  return data;
});

const getStoredDetails = (id) => ({
  type: GET_STORED,
  id,
});

const clearDetailsData = () => ({
  type: CLEAR_DATA,
});

export { getDetails, getStoredDetails, clearDetailsData };
