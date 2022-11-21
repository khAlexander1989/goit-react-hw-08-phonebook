import { Container, ContantBox, Title, RegistrationLink } from './Login.styled';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <Container>
      <ContantBox>
        <Title>Login</Title>
        <LoginForm />
        <RegistrationLink to="/register">Registation</RegistrationLink>
      </ContantBox>
    </Container>
  );
}
