import { useRef } from 'react';
import { HiUserAdd } from 'react-icons/hi';
import { ClockLoader } from 'react-spinners';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { contactValidationSchema } from 'validation/contact-validation';

import { FormInput } from 'components/FormInput';
import { StyledForm, FormSubmitBtn } from './ContactForm.styled';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { selectAditionStatus } from 'redux/selectors';
import { STATUS } from 'utils/constants';

const INITIAL_VALUE = {
  name: '',
  number: '',
};

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const status = useSelector(selectAditionStatus);

  const nameInputRef = useRef();
  const numberInputRef = useRef();

  function blurFormInputs() {
    nameInputRef.current.blur();
    numberInputRef.current.blur();
  }

  function isExistContact(contactName, contacts) {
    return contacts.some(
      ({ name }) => name.toUpperCase() === contactName.toUpperCase()
    );
  }

  function handleFormSubmit(values, { resetForm }) {
    if (isExistContact(values.name, contacts)) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values)).finally(() => {
      resetForm();
      blurFormInputs();
    });
  }

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleFormSubmit}
      validationSchema={contactValidationSchema}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <StyledForm>
          <FormInput
            name="name"
            type="text"
            label="Name"
            ref={nameInputRef}
            isFieldValid={!(touched.name && errors.name)}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <FormInput
            name="number"
            type="tel"
            label="Number"
            ref={numberInputRef}
            isFieldValid={!(touched.number && errors.number)}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
          />
          <FormSubmitBtn
            type="submit"
            disabled={status === STATUS.PENDING}
            aria-label="form submit button"
          >
            {status === STATUS.PENDING ? (
              <ClockLoader size="16px" color="#3171E7" />
            ) : (
              <HiUserAdd size="100%" />
            )}
          </FormSubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
}
