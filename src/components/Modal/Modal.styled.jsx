import styled from 'styled-components';
import { IconBtn } from 'components/IconBtn';

export const BackDrop = styled.div`
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: ${p => p.theme.space[4]} ${p => p.theme.space[2]};

  width: 20%;

  border-radius: 5px;
  background-color: white;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes[4]};
`;

export const CloseBtn = styled(IconBtn)`
  position: absolute;
  right: 5px;
  top: 5px;

  width: 28px;
  height: 28px;

  color: ${p => p.theme.colors.accent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.orange};
  }
`;
