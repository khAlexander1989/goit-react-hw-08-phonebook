import { ClockLoader } from 'react-spinners';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { HiOutlineLogin } from 'react-icons/hi';

import { loginValidationSchema } from 'validation/login-validation';

import { FormInput } from 'components/FormInput';
import { Box } from 'components/Box';
import { StyledForm, LoginBtn } from './LoginForm.styled';

import { login } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { STATUS } from 'utils/constants';

export default function LoginForm() {
  const dispatch = useDispatch();

  const { loggingInStatus } = useAuth();

  function handleFormSubmit(values) {
    dispatch(login(values)).unwrap().catch(Notify.failure);
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ errors, touched, values, isValid, handleChange, handleBlur }) => (
        <StyledForm>
          <Box as="ul">
            <Box as="li">
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
          <LoginBtn
            type="submit"
            aria-label="Registration button"
            disabled={
              !isValid ||
              loggingInStatus === STATUS.PENDING ||
              !values.password ||
              !values.email
            }
          >
            Login
            {loggingInStatus === STATUS.PENDING ? (
              <ClockLoader size="16px" color="white" />
            ) : (
              <HiOutlineLogin size="18px" />
            )}
          </LoginBtn>
        </StyledForm>
      )}
    </Formik>
  );
}
