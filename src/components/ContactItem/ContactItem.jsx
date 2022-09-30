import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactDeleteBtn,
} from './ContactItem.styled';

export function ContactItem({ name, number, onContactItemDelete }) {
  return (
    <Contact>
      <ContactName>{name}:</ContactName>{' '}
      <ContactNumber>{number};</ContactNumber>
      <ContactDeleteBtn type="button" onClick={onContactItemDelete}>
        <FaTrash size="100%" />
      </ContactDeleteBtn>
    </Contact>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactItemDelete: PropTypes.func.isRequired,
};
