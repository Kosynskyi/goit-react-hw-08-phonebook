import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // ======register======
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // ======logIn======
    [logIn.pending]: state => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // ======logOut======
    [logOut.pending]: state => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: state => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // ======fetchCurrentUser======
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
