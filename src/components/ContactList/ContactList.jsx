import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem';
import { Item } from './ContactList.styled';

export function ContactList({ contacts, onContactDelete }) {
  function handleContactItemDelete(id) {
    onContactDelete(id);
  }

  return (
    <Box as="ul" p={2}>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem
            name={name}
            number={number}
            onContactDelete={onContactDelete}
            onContactItemDelete={() => handleContactItemDelete(id)}
          />
        </Item>
      ))}
    </Box>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
