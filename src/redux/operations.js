import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const cars = await api.fetchCars();
      return cars;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
