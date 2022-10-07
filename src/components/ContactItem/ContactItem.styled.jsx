import styled from 'styled-components';
import { IconBtn } from 'components/IconBtn';

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

export const ContactDeleteBtn = styled(IconBtn)`
  margin-left: auto;
  color: ${p => p.theme.colors.red};
  border-color: ${p => p.theme.colors.red};

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.bgPrimary};
  }
`;
