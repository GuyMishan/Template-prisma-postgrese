import { createSlice } from '@reduxjs/toolkit'
const axios = require("axios");

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    value: [],
  },
  reducers: {
    getGeneralData: (state, action) => {
      state.value = action.payload;
    },
    clearGeneralData: (state) => {
      state.value = [];
    },
  },
})

export const getGeneralDataFunc = (data) => async (dispatch) => {

  await axios.get(`http://localhost:8000/api/general`)
    .then(response => {
      dispatch(getGeneralData(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
};

export const { getGeneralData, clearGeneralData } = generalSlice.actions

export default generalSlice.reducer