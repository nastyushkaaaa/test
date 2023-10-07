import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, addCarToFavorite } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    entities: [],
    status: null,
    error: null,
    favourite: false,
  },
  extraReducers: {
    [fetchCars.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCars.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [fetchCars.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [addCarToFavorite.pending]: state => {
      state.status = 'addLoading';
      state.error = null;
    },
    [addCarToFavorite.fulfilled]: (state, { payload }) => {
      state.status = 'addResolved';
      state.favourite = true;
    },
    [addCarToFavorite.rejected]: (state, { payload }) => {
      state.status = 'addRejected';
      state.error = payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
