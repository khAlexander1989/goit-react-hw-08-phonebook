import { useSelector } from 'react-redux';

import { Container } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem';
import { Item } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </Container>
  );
}
