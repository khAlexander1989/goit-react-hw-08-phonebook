import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Box } from 'components/Box';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { ContactsTitle, AppTitle } from './App.styled';
import * as LSApi from 'utils/localeStorageApi';
import { LS_DATA_KEY } from 'utils/constants';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const serializedContacts = LSApi.getDataFromLocalStorage(LS_DATA_KEY);
    if (serializedContacts) {
      const deserializedContacts = LSApi.deserializeData(serializedContacts);
      this.setState({ contacts: deserializedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const serializedContacts = LSApi.serializeData(this.state.contacts);
      LSApi.addDataToLocalStorage(LS_DATA_KEY, serializedContacts);
    }
  }

  changeFilterValue = value => this.setState({ filter: value });

  isExistContact = (contactName, contacts) =>
    contacts.some(
      ({ name }) => name.toUpperCase() === contactName.toUpperCase()
    );

  addContact = ({ name, number }) => {
    if (this.isExistContact(name, this.state.contacts)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = keyword => {
    return this.state.contacts.filter(({ name }) =>
      name.toUpperCase().includes(keyword.toUpperCase())
    );
  };

  orderContacts = contacts => {
    return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts(filter);
    const orderedContacts = this.orderContacts(filteredContacts);

    return (
      <Box
        p={2}
        width="450px"
        border="default"
        borderRadius="normal"
        borderColor="borderLightGrey"
      >
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onContactFormSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter
          onFilterChange={this.changeFilterValue}
          filterValue={this.state.filter}
        />

        <ContactList
          contacts={orderedContacts}
          onContactDelete={this.deleteContact}
        />
      </Box>
    );
  }
}
