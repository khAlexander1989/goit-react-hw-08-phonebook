import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${p => p.theme.colors.bgPrimary};
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1200px;
  height: 70px;

  padding: 0 ${p => p.theme.space[3]};
  margin: 0 auto;
`;
