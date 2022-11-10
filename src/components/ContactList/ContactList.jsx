import { useSelector } from 'react-redux';

import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem';
import { Item } from './ContactList.styled';
import {
  selectError,
  selectFilteredContacts,
  selectStatus,
} from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'resolved') {
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

  if (status === 'rejected') {
    return <p>{error}</p>;
  }
}
