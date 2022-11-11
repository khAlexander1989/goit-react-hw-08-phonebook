import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactDeleteBtn,
} from './ContactItem.styled';

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete() {
    setIsDeleting(true);
    dispatch(deleteContact(id)).finally(() => setIsDeleting(false));
  }

  return (
    <Contact>
      <ContactName>{name}:</ContactName>{' '}
      <ContactNumber>{number};</ContactNumber>
      <ContactDeleteBtn
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
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
