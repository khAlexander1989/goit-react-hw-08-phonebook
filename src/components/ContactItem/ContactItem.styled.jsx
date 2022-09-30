import styled from 'styled-components';

export const Contact = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 40px;
  padding: ${p => p.theme.space[2]};
`;
export const ContactName = styled.span`
  font-weight: bold;
`;
export const ContactNumber = styled.span`
  margin-left: ${p => p.theme.space[2]};
`;
export const ContactDeleteBtn = styled.button`
  margin-left: auto;
  width: 25px;
  height: 25px;

  background-color: transparent;
  color: ${p => p.theme.colors.red};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.default};
  border-color: ${p => p.theme.colors.red};

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.bgPrimary};
  }
`;
