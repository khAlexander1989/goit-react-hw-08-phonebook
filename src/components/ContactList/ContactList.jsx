import { useSelector } from 'react-redux';

import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem';
import { Item } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getFilters).name;

  const filteredContacts = [...contacts].filter(({ name }) =>
    name.toUpperCase().includes(nameFilter.toUpperCase())
  );

  const orderedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Box as="ul" p={2}>
      {orderedContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </Box>
  );
}
