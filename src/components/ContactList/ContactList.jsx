import { useSelector } from 'react-redux';

import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem';
import { Item } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Box as="ul" p={2}>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </Box>
  );
}
