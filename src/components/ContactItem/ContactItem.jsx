import PropTypes from 'prop-types';
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { ClockLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import {
  selectDeletionStatus,
  selectItemToDeleteId,
} from 'redux/contacts/selectors';
import { STATUS } from 'utils/constants';
import Modal from 'components/Modal';
import EditContactForm from 'components/EditContactForm';
import { theme } from '../../theme';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactEditBtn,
  ContactDeleteBtn,
} from './ContactItem.styled';
import { useState } from 'react';
import { Notify } from 'notiflix';

export function ContactItem({ contact }) {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const status = useSelector(selectDeletionStatus);
  const itemToDeleteId = useSelector(selectItemToDeleteId);

  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(state => !state);
  }

  function handleDeleteContact() {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        Notify.success('Contact has deleted.');
      })
      .catch(Notify.failure);
  }

  const isCurrentItemDeleting =
    status === STATUS.PENDING && id === itemToDeleteId;

  return (
    <Contact>
      <ContactName>{name}:</ContactName>{' '}
      <ContactNumber>{number};</ContactNumber>
      <ContactEditBtn
        type="button"
        onClick={toggleModal}
        aria-label="contact edit button"
      >
        <FaUserEdit size="80%" />
      </ContactEditBtn>
      <ContactDeleteBtn
        type="button"
        onClick={handleDeleteContact}
        disabled={isCurrentItemDeleting}
        aria-label="contact delete button"
      >
        {isCurrentItemDeleting ? (
          <ClockLoader size="20px" color={theme.colors.orange} />
        ) : (
          <FaTrashAlt size="70%" />
        )}
      </ContactDeleteBtn>
      {showModal && (
        <Modal closeModal={toggleModal} title="Edit contact">
          <EditContactForm contact={contact} onSubmit={toggleModal} />
        </Modal>
      )}
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
