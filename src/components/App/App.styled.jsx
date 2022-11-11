import styled from 'styled-components';

export const AppTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes[4]};
  text-transform: uppercase;
  text-align: center;
`;
export const ContactsTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[3]};
  text-transform: uppercase;

  border-top: ${p => p.theme.borders.default};
  border-color: ${p => p.theme.colors.borderLightGrey};
  margin-top: ${p => p.theme.space[4]};
  padding-top: ${p => p.theme.space[2]};

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
  color: red;
`;
