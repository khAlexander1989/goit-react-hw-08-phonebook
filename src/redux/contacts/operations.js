import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ERR_MSGS } from 'utils/constants';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunckAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACTS_FETCHING);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunckAPI) => {
    try {
      const response = await axios.post('contacts', contactData);
      return response.data;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACT_CREATION);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contactData }, thunckAPI) => {
    try {
      const response = await axios.patch(`contacts/${id}`, contactData);
      return response.data;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACT_UPDATING);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/DeleteContact',
  async (id, thunckAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data;
    } catch {
      return thunckAPI.rejectWithValue(ERR_MSGS.CONTACT_DELETION);
    }
  }
);
