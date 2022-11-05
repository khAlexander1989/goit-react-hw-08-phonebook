import { Box } from 'components/Box';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { ContactsTitle, AppTitle } from './App.styled';

export function App() {
  return (
    <Box
      p={2}
      width="450px"
      border="default"
      borderRadius="normal"
      borderColor="borderLightGrey"
    >
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />

      <ContactList />
    </Box>
  );
}
