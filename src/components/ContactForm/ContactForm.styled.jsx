import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: end;
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
`;

export const FormField = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;

  :not(:first-child) {
    margin-left: ${p => p.theme.space[2]};
  }
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  height: 25px;
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};

  border: ${p => p.theme.borders.default};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.borderLightGrey};

  transition: border 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    border-color: ${p => p.theme.colors.lightBlue};
  }
`;

export const FormFieldLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[0]};
`;

export const FormSubmitBtn = styled.button`
  margin-left: ${p => p.theme.space[2]};
  padding: ${p => p.theme.space[1]};
  border: none;
  border: ${p => p.theme.borders.default};
  border-color: ${p => p.theme.colors.lightBlue};
  border-radius: ${p => p.theme.radii.normal};

  background-color: transparent;
  color: ${p => p.theme.colors.lightBlue};

  width: 25px;
  height: 25px;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    background-color: ${p => p.theme.colors.lightBlue};
    color: white;
  }
`;
