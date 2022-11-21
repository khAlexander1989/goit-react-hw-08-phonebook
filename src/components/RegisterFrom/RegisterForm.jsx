import { ClockLoader } from 'react-spinners';
import { MdEditNote } from 'react-icons/md';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { registerValidationSchema } from 'validation/register-validation';

import { FormInput } from 'components/FormInput';
import { Box } from 'components/Box';
import { StyledForm, RegistrationBtn } from './RegisterForm.styled';

import { register } from 'redux/auth/operations';
import { STATUS } from 'utils/constants';
import { useAuth } from 'hooks/useAuth';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const { registeringStatus } = useAuth();

  function handleFormSubmit(values) {
    dispatch(register(values)).unwrap().catch(Notify.failure);
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={registerValidationSchema}
    >
      {({ errors, touched, values, isValid, handleChange, handleBlur }) => (
        <StyledForm>
          <Box as="ul">
            <Box as="li">
              <FormInput
                name="name"
                type="text"
                label="User name"
                isFieldValid={!(touched.name && errors.name)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </Box>
            <Box as="li" mt="24px">
              <FormInput
                name="email"
                type="email"
                label="Email"
                isFieldValid={!(touched.email && errors.email)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Box>
            <Box as="li" mt="24px">
              <FormInput
                name="password"
                type="password"
                label="Password"
                isFieldValid={!(touched.password && errors.password)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Box>
          </Box>
          <RegistrationBtn
            type="submit"
            disabled={
              !isValid ||
              registeringStatus === STATUS.PENDING ||
              !values.password ||
              !values.email ||
              !values.name
            }
            aria-label="Registration button"
          >
            Register
            {registeringStatus === STATUS.PENDING ? (
              <ClockLoader size="16px" color="white" />
            ) : (
              <MdEditNote size="20px" />
            )}
          </RegistrationBtn>
        </StyledForm>
      )}
    </Formik>
  );
}
