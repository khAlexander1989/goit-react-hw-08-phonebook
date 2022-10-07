import styled from 'styled-components';
import { Form } from 'formik';
import { IconBtn } from 'components/IconBtn';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: end;
  column-gap: ${p => p.theme.space[2]};
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
`;

export const FormSubmitBtn = styled(IconBtn)`
  border-color: ${p => p.theme.colors.lightBlue};
  color: ${p => p.theme.colors.lightBlue};

  width: 25px;
  height: 25px;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  :hover,
  :focus {
    background-color: ${p =>
      p.disabled ? 'transparent' : p.theme.colors.lightBlue};
    color: ${p =>
      p.disabled ? p.theme.colors.lightBlue : p.theme.colors.bgPrimary};
  }
`;
