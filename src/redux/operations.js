import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../utils/fetchContactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunckAPI) => {
    try {
      const contacts = await fetchAPI.fetchContacts();
      return contacts;
    } catch (err) {
      return thunckAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunckAPI) => {
    try {
      const contact = await fetchAPI.addContact(name, number);
      return contact;
    } catch (err) {
      return thunckAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/DeleteContact',
  async (id, thunckAPI) => {
    try {
      const deletedContact = await fetchAPI.deleteContact(id);
      return deletedContact.id;
    } catch (err) {
      return thunckAPI.rejectWithValue(err.message);
    }
  }
);
