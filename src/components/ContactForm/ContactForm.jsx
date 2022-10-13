import { useRef } from 'react';
import PropTypes from 'prop-types';
import { HiUserAdd } from 'react-icons/hi';
import { Formik } from 'formik';

import { contactValidationSchema } from 'validation/contact-validation';

import { FormInput } from 'components/FormInput';
import { StyledForm, FormSubmitBtn } from './ContactForm.styled';

const INITIAL_VALUE = {
  name: '',
  number: '',
};

export function ContactForm({ onContactFormSubmit }) {
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  function blurFormInputs() {
    nameInputRef.current.blur();
    numberInputRef.current.blur();
  }

  function handleFormSubmit(values, { setSubmitting, resetForm }) {
    setSubmitting(true);
    onContactFormSubmit(values);
    resetForm();
    blurFormInputs();
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleFormSubmit}
      validationSchema={contactValidationSchema}
    >
      {({
        isSubmitting,
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
      }) => (
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
            disabled={isSubmitting}
            aria-label="form submit button"
          >
            <HiUserAdd size="100%" />
          </FormSubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onContactFormSubmit: PropTypes.func.isRequired,
};
