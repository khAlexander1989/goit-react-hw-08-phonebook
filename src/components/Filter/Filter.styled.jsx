import styled from 'styled-components';

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[3]};
`;
export const FilterInput = styled.input`
  box-sizing: border-box;
  height: 35px;
  padding: ${p => p.theme.space[1]} ${p => p.theme.space[3]};

  border: ${p => p.theme.borders.default};
  border-radius: 100px;
  border-color: ${p => p.theme.colors.borderLightGrey};

  background-color: ${p => p.theme.colors.bgPrimary};

  transition: border 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    border-color: ${p => (p.hasError ? 'tomato' : p.theme.colors.accent)};
  }
`;
export const FilterLabel = styled.label`
  margin-left: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes[1]};
`;
