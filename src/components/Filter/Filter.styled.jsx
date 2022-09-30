import styled from 'styled-components';
import { FormInput } from 'components/ContactForm/ContactForm.styled';

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
`;
export const FilterInput = styled(FormInput)``;
export const FilterLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[1]};
`;
