import styled from 'styled-components';
import { FormInput } from 'components/ContactForm/ContactForm.styled';

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
`;
export const FilterInput = styled.input`
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
    border-color: ${p => (p.hasError ? 'tomato' : p.theme.colors.lightBlue)};
  }
`;
export const FilterLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[1]};
`;
