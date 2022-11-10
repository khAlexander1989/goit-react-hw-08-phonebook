import axios from 'axios';

import { MOCK_API_URL } from './constants';

axios.defaults.baseURL = MOCK_API_URL;

async function fetchContacts() {
  const response = await axios.get('contacts');
  return response.data;
}

async function addContact(name, number) {
  const response = await axios.post('contacts', { name, number });
  return response.data;
}

async function deleteContact(id) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
}

const fetchFunctions = { fetchContacts, addContact, deleteContact };

export default fetchFunctions;
