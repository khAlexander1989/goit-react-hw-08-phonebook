import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ErrorMessage } from 'formik';

import { Box } from 'components/Box';
import { Input, InputLabel, ErrorMsg } from './FormInput.styled';

export const FormInput = forwardRef(
  ({ name, label, isFieldValid, ...otherProps }, ref) => {
    const inputId = nanoid();
    return (
      <Box
        position="relative"
        display="flex"
        flexGrow="2"
        flexDirection="column"
      >
        <InputLabel htmlFor={inputId}>{label}:</InputLabel>
        <Input
          name={name}
          id={inputId}
          isFieldValid={isFieldValid}
          ref={ref}
          {...otherProps}
        />
        <ErrorMessage component={ErrorMsg} name={name} />
      </Box>
    );
  }
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isFieldValid: PropTypes.bool.isRequired,
};
