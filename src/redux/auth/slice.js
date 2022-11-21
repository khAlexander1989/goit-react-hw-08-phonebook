import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, refreshUser } from './operations';
import { STATUS } from 'utils/constants';

const initialState = {
  user: { name: null, email: null },
  token: null,
  registeringStatus: STATUS.IDLE,
  loggingInStatus: STATUS.IDLE,
  loggingOutStatus: STATUS.IDLE,
  refreshingStatus: STATUS.IDLE,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.registeringStatus = STATUS.PENDING;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registeringStatus = STATUS.RESOLVED;
        state.loggingInStatus = STATUS.RESOLVED;

        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.registeringStatus = STATUS.REJECTED;
      })

      .addCase(login.pending, state => {
        state.loggingInStatus = STATUS.PENDING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loggingInStatus = STATUS.RESOLVED;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loggingInStatus = STATUS.REJECTED;
      })

      .addCase(logout.pending, state => {
        state.loggingOutStatus = STATUS.PENDING;
      })
      .addCase(logout.fulfilled, (state, ation) => {
        state.loggingOutStatus = STATUS.RESOLVED;
        state.loggingInStatus = STATUS.IDLE;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loggingOutStatus = STATUS.REJECTED;
      })

      .addCase(refreshUser.pending, state => {
        state.refreshingStatus = STATUS.PENDING;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.refreshingStatus = STATUS.RESOLVED;
        state.loggingInStatus = STATUS.RESOLVED;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.refreshingStatus = STATUS.REJECTED;
      }),
});

export const authReducer = authSlice.reducer;
