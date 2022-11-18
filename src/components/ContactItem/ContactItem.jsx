import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { ClockLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectDeletionStatus, selectItemToDeleteId } from 'redux/selectors';
import { STATUS } from 'utils/constants';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactDeleteBtn,
} from './ContactItem.styled';

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const status = useSelector(selectDeletionStatus);
  const itemToDeleteId = useSelector(selectItemToDeleteId);

  const isCurrentItemDeleting =
    status === STATUS.PENDING && id === itemToDeleteId;

  return (
    <Contact>
      <ContactName>{name}:</ContactName>{' '}
      <ContactNumber>{number};</ContactNumber>
      <ContactDeleteBtn
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        disabled={isCurrentItemDeleting}
        aria-label="contact delete button"
      >
        {isCurrentItemDeleting ? (
          <ClockLoader size="16px" color="#E54D62" />
        ) : (
          <FaTrash size="90%" />
        )}
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
