import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { addFilter } = slice.actions;
