import { ClockLoader } from 'react-spinners';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import { contactValidationSchema } from 'validation/contact-validation';

import { FormInput } from 'components/FormInput';
import { StyledForm } from 'components/EditContactForm/EditContactForm.styled';
import { AddContactBtn } from './ContactForm.styled';
import { Box } from 'components/Box';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { selectAditionStatus } from 'redux/contacts/selectors';
import { STATUS } from 'utils/constants';

export default function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const adidtionStatus = useSelector(selectAditionStatus);

  function isExistContact(contactName, contacts) {
    return contacts.some(
      ({ name }) => name.toUpperCase() === contactName.toUpperCase()
    );
  }

  function handleFormSubmit(values) {
    if (isExistContact(values.name, contacts)) {
      Notify.warning(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values))
      .unwrap()
      .then(() => Notify.success('Contact has added.'))
      .catch(Notify.failure)
      .finally(() => {
        onSubmit();
      });
  }

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={contactValidationSchema}
    >
      {({ errors, touched, values, isValid, handleChange, handleBlur }) => (
        <StyledForm>
          <Box as="ul">
            <Box as="li">
              <FormInput
                name="name"
                type="text"
                label="Name"
                isFieldValid={!(touched.name && errors.name)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </Box>
            <Box as="li" mt="24px">
              <FormInput
                name="number"
                type="tel"
                label="Number"
                isFieldValid={!(touched.number && errors.number)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
            </Box>
          </Box>
          <AddContactBtn
            type="submit"
            disabled={
              adidtionStatus === STATUS.PENDING ||
              !isValid ||
              !values.name ||
              !values.number
            }
            aria-label="form submit button"
          >
            Add contact
            {adidtionStatus === STATUS.PENDING && (
              <ClockLoader size="16px" color="white" />
            )}
          </AddContactBtn>
        </StyledForm>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
