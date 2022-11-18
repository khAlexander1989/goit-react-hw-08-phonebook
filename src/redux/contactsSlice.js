import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
// import { isAnyOf } from '@reduxjs/toolkit';
import { STATUS } from 'utils/constants';

// const thunks = [fetchContacts, addContact, deleteContact];

// const getThunkActions = actionType => thunks.map(thunk => thunk[actionType]);

const initialState = {
  items: [],
  fetchingStatus: 'idle',
  deletionStatus: 'idle',
  aditionStatus: 'idle',
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

      .addCase(deleteContact.pending, (state, action) => {
        state.deletionStatus = STATUS.PENDING;
        state.itemToDeleteId = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.deletionStatus = STATUS.RESOLVED;
        state.error = null;
        state.itemToDeleteId = null;
        state.items = [...state.items].filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.deletionStatus = STATUS.REJECTED;
        state.itemToDeleteId = null;
        state.error = action.payload;
      }),

  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchContacts.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //     })

  //     .addCase(addContact.fulfilled, (state, action) => {
  //       state.items.push(action.payload);
  //     })

  //     .addCase(deleteContact.fulfilled, (state, action) => {
  //       state.items = [...state.items].filter(
  //         contact => contact.id !== action.payload
  //       );
  //     })

  //     .addMatcher(isAnyOf(...getThunkActions('fulfilled')), state => {
  //       state.status = STATUS.RESOLVED;
  //       state.error = null;
  //     })

  //     .addMatcher(isAnyOf(...getThunkActions('pending')), state => {
  //       state.status = STATUS.PENDING;
  //     })

  //     .addMatcher(isAnyOf(...getThunkActions('rejected')), (state, action) => {
  //       state.status = STATUS.REJECTED;
  //       state.error = action.payload;
  //     });
  // },
});

export const contactsReducer = contactsSlice.reducer;
