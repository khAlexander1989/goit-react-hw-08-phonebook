import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  column-gap: ${p => p.theme.space[1]};
`;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.textPrimary};
`;

export const Text = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 18px;
  color: ${p => p.theme.colors.textPrimary};
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${p => p.theme.space[2]};

  padding: 0 ${p => p.theme.space[2]};
  height: 30px;

  border: none;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.textWhite};

  transition: background-color 250ms ease-in-out;

  :hover,
  :focus {
    outline: none;
    background-color: ${p =>
      p.disabled ? p.theme.colors.accent : p.theme.colors.blue};
  }
`;
