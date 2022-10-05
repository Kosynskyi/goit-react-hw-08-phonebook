import { createSlice } from '@reduxjs/toolkit';

const initialFilter = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
