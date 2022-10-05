import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
