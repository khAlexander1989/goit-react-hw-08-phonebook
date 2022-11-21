import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from './operations';
import { STATUS } from 'utils/constants';

const initialState = {
  items: [],
  fetchingStatus: STATUS.IDLE,
  aditionStatus: STATUS.IDLE,
  updatingStatus: STATUS.IDLE,
  deletionStatus: STATUS.IDLE,
  itemToDeleteId: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(fetchContacts.pending, state => {
        state.fetchingStatus = STATUS.PENDING;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.fetchingStatus = STATUS.RESOLVED;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.fetchingStatus = STATUS.REJECTED;
        state.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.aditionStatus = STATUS.PENDING;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.aditionStatus = STATUS.RESOLVED;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.aditionStatus = STATUS.REJECTED;
        state.error = action.payload;
      })

      .addCase(updateContact.pending, state => {
        state.updatingStatus = STATUS.PENDING;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.updatingStatus = STATUS.RESOLVED;
        state.error = null;
        const idx = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(idx, 1, action.payload);
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.updatingStatus = STATUS.REJECTED;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state, action) => {
        state.deletionStatus = STATUS.PENDING;
        state.itemToDeleteId = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.deletionStatus = STATUS.RESOLVED;
        state.error = null;
        state.itemToDeleteId = null;
        state.items = [...state.items].filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.deletionStatus = STATUS.REJECTED;
        state.itemToDeleteId = null;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
