import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { isAnyOf } from '@reduxjs/toolkit';
import { STATUS } from 'utils/constants';

const thunks = [fetchContacts, addContact, deleteContact];

const getThunkActions = actionType => thunks.map(thunk => thunk[actionType]);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = [...state.items].filter(
          contact => contact.id !== action.payload
        );
      })

      .addMatcher(isAnyOf(...getThunkActions('fulfilled')), state => {
        state.status = STATUS.RESOLVED;
        state.error = null;
      })

      .addMatcher(isAnyOf(...getThunkActions('pending')), state => {
        state.status = STATUS.PENDING;
      })

      .addMatcher(isAnyOf(...getThunkActions('rejected')), (state, action) => {
        state.status = STATUS.REJECTED;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
