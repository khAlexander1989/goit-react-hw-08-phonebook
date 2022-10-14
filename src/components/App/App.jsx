import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Box } from 'components/Box';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { ContactsTitle, AppTitle } from './App.styled';
import * as LSApi from 'utils/localeStorageApi';
import { LS_DATA_KEY } from 'utils/constants';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const serializedContacts = LSApi.getDataFromLocalStorage(LS_DATA_KEY);

    return serializedContacts
      ? LSApi.deserializeData(serializedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  useEffect(() => {
    LSApi.addDataToLocalStorage(LS_DATA_KEY, LSApi.serializeData(contacts));
  }, [contacts]);

  function changeFilterValue(value) {
    setFilter(value);
  }

  function isExistContact(contactName, contacts) {
    contacts.some(
      ({ name }) => name.toUpperCase() === contactName.toUpperCase()
    );
  }

  function addContact({ name, number }) {
    if (isExistContact(name, contacts)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  }

  function deleteContact(id) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  }

  function filterContacts(keyword) {
    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(keyword.toUpperCase())
    );
  }

  function orderContacts(contacts) {
    return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <Box
      p={2}
      width="450px"
      border="default"
      borderRadius="normal"
      borderColor="borderLightGrey"
    >
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onContactFormSubmit={addContact} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onFilterChange={changeFilterValue} filterValue={filter} />

      <ContactList
        contacts={orderContacts(filterContacts(filter))}
        onContactDelete={deleteContact}
      />
    </Box>
  );
}
