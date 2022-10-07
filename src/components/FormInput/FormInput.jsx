import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Field, ErrorMessage } from 'formik';

import { Box } from 'components/Box';
import { Input, InputLabel, ErrorMsg } from './FormInput.styled';

export function FormInput({ name, label, isFieldValid, ...otherProps }) {
  const inputId = nanoid();
  return (
    <Box position="relative" display="flex" flexGrow="2" flexDirection="column">
      <InputLabel htmlFor={inputId}>{label}:</InputLabel>
      <Field
        name={name}
        as={Input}
        id={inputId}
        isFieldValid={isFieldValid}
        {...otherProps}
      />
      <ErrorMessage component={ErrorMsg} name={name} />
    </Box>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isFieldValid: PropTypes.bool.isRequired,
};
