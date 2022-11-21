import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: ${p => p.theme.space[4]};
`;

export const Item = styled.li`
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.bgSecondary};
  }

  border-top: ${p => p.theme.borders.default};

  :last-child {
    border-bottom: ${p => p.theme.borders.default};
    border-color: ${p => p.theme.colors.borderPrimary};
  }

  border-color: ${p => p.theme.colors.borderPrimary};
`;
