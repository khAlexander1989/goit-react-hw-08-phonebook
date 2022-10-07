import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  height: 25px;
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};

  border: ${p => p.theme.borders.default};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p =>
    p.isFieldValid ? p.theme.colors.borderLightGrey : p.theme.colors.error};

  transition: border 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    border-color: ${p =>
      p.isFieldValid ? p.theme.colors.lightBlue : p.theme.colors.error};
  }
`;

export const InputLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[0]};
`;

export const ErrorMsg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.error};
`;
