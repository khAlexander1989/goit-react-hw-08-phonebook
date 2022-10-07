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
  function handleFormSubmit(values, { setSubmitting, resetForm }) {
    setSubmitting(true);
    onContactFormSubmit(values);
    resetForm();
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleFormSubmit}
      validationSchema={contactValidationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <StyledForm>
          <FormInput
            name="name"
            type="text"
            label="Name"
            isFieldValid={!(touched.name && errors.name)}
          />
          <FormInput
            name="number"
            type="tel"
            label="Number"
            isFieldValid={!(touched.number && errors.number)}
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
