import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNameFilter(state, { payload }) {
      return { ...state, name: payload };
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
