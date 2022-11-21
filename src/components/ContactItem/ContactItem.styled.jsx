import styled from 'styled-components';
import { IconBtn } from 'components/IconBtn';

export const Contact = styled.span`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: ${p => p.theme.space[2]};
`;

export const ContactName = styled.span`
  font-weight: bold;
  color: ${p => p.theme.colors.textPrimary};
`;

export const ContactNumber = styled.span`
  margin-left: ${p => p.theme.space[2]};
  color: ${p => p.theme.colors.textPrimary};
`;

export const ContactDeleteBtn = styled(IconBtn)`
  margin-left: ${p => p.theme.space[2]};
  color: #3f7976;
  border-color: transparent;

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.orange};
  }
`;

export const ContactEditBtn = styled(IconBtn)`
  margin-left: auto;
  color: #3f7976;
  border-color: transparent;

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.bgPrimary};

    color: ${p => p.theme.colors.accent};
  }
`;

export const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
`;
