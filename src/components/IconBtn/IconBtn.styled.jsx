import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.space[1]};
  border: none;
  /* border: ${p => p.theme.borders.default}; */
  border-radius: ${p => p.theme.radii.round};

  background-color: transparent;
  opacity: ${p => (p.disabled ? 0.4 : 1)};

  width: 35px;
  height: 35px;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
  }
`;
