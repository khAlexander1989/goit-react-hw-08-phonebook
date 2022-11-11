import { createAsyncThunk } from '@reduxjs/toolkit';
import { ERR_MSGS } from 'utils/constants';
import fetchAPI from '../utils/fetchContactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunckAPI) => {
    try {
      const contacts = await fetchAPI.fetchContacts();
      return contacts;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACTS_FETCHING);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunckAPI) => {
    try {
      const contact = await fetchAPI.addContact(name, number);
      return contact;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACT_CREATION);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/DeleteContact',
  async (id, thunckAPI) => {
    try {
      const deletedContact = await fetchAPI.deleteContact(id);
      return deletedContact.id;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACT_DELETION);
    }
  }
);
