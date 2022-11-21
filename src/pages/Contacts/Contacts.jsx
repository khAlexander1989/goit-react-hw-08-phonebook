import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiUserAdd } from 'react-icons/hi';

import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import ContentLoader from 'components/ContentLoader';
import {
  ErrMsg,
  Container,
  ContactsTitle,
  OpenAddContactModalBtn,
} from './Contacts.styled';
import { Box } from 'components/Box';
import { selectError, selectFetchingStatus } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { STATUS } from 'utils/constants';
import { useState } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const fetchingStatus = useSelector(selectFetchingStatus);

  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(showModal => !showModal);
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Box position="relative">
        {fetchingStatus === STATUS.PENDING ? (
          <ContentLoader />
        ) : (
          fetchingStatus === STATUS.REJECTED && <ErrMsg>{error}</ErrMsg>
        )}
      </Box>
      <ContactList />
      <OpenAddContactModalBtn
        type="button"
        aria-label="opening modal window button"
        onClick={toggleModal}
      >
        <HiUserAdd size="70%" />
      </OpenAddContactModalBtn>
      {showModal && (
        <Modal title={'Add Contact'} closeModal={toggleModal}>
          <ContactForm onSubmit={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
