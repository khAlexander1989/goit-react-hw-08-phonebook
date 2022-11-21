import RegisterFrom from 'components/RegisterFrom';
import { Container, ContantBox, Title } from './Register.styled';

export default function Register() {
  return (
    <Container>
      <ContantBox>
        <Title>Register</Title>
        <RegisterFrom />
      </ContantBox>
    </Container>
  );
}
