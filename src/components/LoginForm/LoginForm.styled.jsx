import styled from 'styled-components';
import { Form } from 'formik';
import { LogoutBtn } from 'components/UserMenu/UserMenu.styled';

export const StyledForm = styled(Form)`
  margin-top: ${p => p.theme.space[3]};
`;

export const LoginBtn = styled(LogoutBtn)`
  margin-top: ${p => p.theme.space[4]};

  width: 100%;
  height: 35px;

  opacity: ${p => (p.disabled ? 0.5 : 1)};
`;
