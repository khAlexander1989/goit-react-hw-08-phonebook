import AppLogo from 'components/AppLogo';
import Auth from 'components/Auth';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { STATUS } from 'utils/constants';
import { Header, Container } from './AppBar.styled';

export default function AppBar() {
  const { loggingInStatus } = useAuth();

  return (
    <Header>
      <Container>
        <AppLogo />
        {loggingInStatus === STATUS.RESOLVED ? <UserMenu /> : <Auth />}
      </Container>
    </Header>
  );
}
