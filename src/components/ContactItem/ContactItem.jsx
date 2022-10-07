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
      <ContactDeleteBtn
        type="button"
        onClick={onContactItemDelete}
        aria-label="contact delete button"
      >
        <FaTrash size="90%" />
      </ContactDeleteBtn>
    </Contact>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactItemDelete: PropTypes.func.isRequired,
};
