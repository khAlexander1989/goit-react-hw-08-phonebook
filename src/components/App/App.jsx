import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectStatus } from 'redux/selectors';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { ContactsTitle, AppTitle, ErrMsg } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { Box } from 'components/Box';
import { ContentLoader } from 'components/ContentLoader';
import { STATUS } from 'utils/constants';

export function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      p={2}
      width="450px"
      border="default"
      borderRadius="normal"
      borderColor="borderLightGrey"
    >
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Box p={2} position="relative">
        {status === STATUS.PENDING ? (
          <ContentLoader />
        ) : (
          error && <ErrMsg>{error}</ErrMsg>
        )}
      </Box>
      <ContactList />
    </Box>
  );
}
