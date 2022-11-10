import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { isAnyOf } from '@reduxjs/toolkit';

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
        return { ...state, items: [...action.payload] };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return { ...state, items: [...state.items, action.payload] };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== action.payload),
        };
      })
      .addMatcher(isAnyOf(...getThunkActions('fulfilled')), state => {
        return { ...state, status: 'resolved', error: null };
      })
      .addMatcher(isAnyOf(...getThunkActions('pending')), state => {
        return { ...state, status: 'pending' };
      })
      .addMatcher(isAnyOf(...getThunkActions('rejected')), (state, action) => {
        return { ...state, status: 'rejected', error: action.payload };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
