import styled from 'styled-components';
import { IconBtn } from 'components/IconBtn';

export const Container = styled.section`
  padding: ${p => p.theme.space[4]} 0;
  margin: 0 auto;
`;

export const ContactsTitle = styled.h2`
  font-size: 28px;

  color: ${p => p.theme.colors.seaGreen};

  text-align: center;
`;

export const ErrMsg = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;

  font-size: ${p => p.theme.fontSizes[1]};
  color: ${p => p.theme.colors.error};
`;

export const OpenAddContactModalBtn = styled(IconBtn)`
  position: fixed;
  right: 20px;
  bottom: 20px;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.textWhite};

  transition: transform 250ms ease-in-out, background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${p =>
      p.disabled ? p.theme.colors.accent : p.theme.colors.blue};
  }
`;
