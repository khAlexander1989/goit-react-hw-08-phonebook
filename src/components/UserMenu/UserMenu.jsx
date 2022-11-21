import { useDispatch } from 'react-redux';
import { HiOutlineLogout } from 'react-icons/hi';
import { ClockLoader } from 'react-spinners';

import { useAuth } from 'hooks/useAuth';
import { STATUS } from 'utils/constants';
import { logout } from 'redux/auth/operations';
import { Container, UserName, Text, LogoutBtn } from './UserMenu.styled';

export default function UserMenu() {
  const {
    user: { name },
    loggingOutStatus,
  } = useAuth();

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container>
      <Text>Welcome, </Text>
      <UserName>{name}</UserName>
      <LogoutBtn type="button" onClick={handleLogout}>
        Logout
        {loggingOutStatus === STATUS.PENDING ? (
          <ClockLoader size="16px" color="white" />
        ) : (
          <HiOutlineLogout size="60%" />
        )}
      </LogoutBtn>
    </Container>
  );
}
