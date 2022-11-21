import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
`;

export const SaveChangesBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 48px auto 0 auto;
  column-gap: 8px;

  height: 35px;
  width: 70%;

  border-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.accent};
  opacity: ${p => (p.disabled ? 0.4 : 1)};

  border: ${p => p.theme.borders.default};
  border-radius: ${p => p.theme.radii.normal};

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    background-color: ${p =>
      p.disabled ? p.theme.colors.accent : p.theme.colors.blue};
  }
`;
