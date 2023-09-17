import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = slice.reducer;
export const { addFilter } = slice.actions;
