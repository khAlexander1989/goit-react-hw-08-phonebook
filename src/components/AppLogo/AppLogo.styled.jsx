import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageLink = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const Text = styled.span`
  color: ${p => p.theme.colors.seaGreen};
`;

export const AccentText = styled.span`
  color: ${p => p.theme.colors.accent};
`;
