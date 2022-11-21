import styled from 'styled-components';

export const Container = styled.section`
  padding: ${p => p.theme.space[5]} 0;
`;

export const ContantBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 260px;

  margin: 0 auto;
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[2]};

  background-color: ${p => p.theme.colors.bgSecondary};

  border: ${p => p.theme.borders.default};
  border-color: ${p => p.theme.colors.borderPrimary};
  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.seaGreen};
`;
