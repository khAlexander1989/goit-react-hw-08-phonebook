import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  color: ${p => p.theme.colors.seaGreen};

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
