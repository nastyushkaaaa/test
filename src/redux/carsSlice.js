import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    entities: [],
    status: null,
    error: null,
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
  },
});

export const carsReducer = carsSlice.reducer;
