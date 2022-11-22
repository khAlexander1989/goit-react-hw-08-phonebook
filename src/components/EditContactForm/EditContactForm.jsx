import PropTypes from 'prop-types';
import { ClockLoader } from 'react-spinners';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { contactValidationSchema } from 'validation/contact-validation';

import { FormInput } from 'components/FormInput';
import { StyledForm, SaveChangesBtn } from './EditContactForm.styled';

import { updateContact } from 'redux/contacts/operations';
import { selectUpdatingStatus, selectContacts } from 'redux/contacts/selectors';
import { STATUS } from 'utils/constants';
import { Notify } from 'notiflix';
import { Box } from 'components/Box';

export default function EditContactForm({
  contact: { id, name, number },
  onSubmit,
}) {
  const dispatch = useDispatch();
  const updatingStatus = useSelector(selectUpdatingStatus);
  const contacts = useSelector(selectContacts);

  function isExistContact(contactName, contacts) {
    return contacts.some(
      ({ name }) => name.toUpperCase() === contactName.toUpperCase()
    );
  }

  async function handleFormSubmit(values) {
    if (isExistContact(values.name, contacts)) {
      Notify.warning(`${values.name} is already in contacts`);
      return;
    }

    dispatch(updateContact({ id, ...values }))
      .unwrap()
      .then(() => Notify.success('Contact has updated.'))
      .catch(Notify.failure)
      .finally(() => {
        onSubmit();
      });
  }

  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleFormSubmit}
      validationSchema={contactValidationSchema}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
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
          <SaveChangesBtn
            type="submit"
            disabled={
              (values.name === name && values.number === number) ||
              updatingStatus === STATUS.PENDING
            }
            aria-label="form submit button"
          >
            Save changes
            {updatingStatus === STATUS.PENDING && (
              <ClockLoader size="16px" color="white" />
            )}
          </SaveChangesBtn>
        </StyledForm>
      )}
    </Formik>
  );
}

EditContactForm.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};
