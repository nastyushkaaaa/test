import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';
import axios from 'axios';

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

export const addCarToFavorite = createAsyncThunk(
  'cars/addCarToFavorite',
  async (text, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/favorites', text);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
