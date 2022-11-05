import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactDeleteBtn,
} from './ContactItem.styled';

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <Contact>
      <ContactName>{name}:</ContactName>{' '}
      <ContactNumber>{number};</ContactNumber>
      <ContactDeleteBtn
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        aria-label="contact delete button"
      >
        <FaTrash size="90%" />
      </ContactDeleteBtn>
    </Contact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
