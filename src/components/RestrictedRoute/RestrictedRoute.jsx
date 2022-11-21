import { Navigate } from 'react-router-dom';

import { STATUS } from 'utils/constants';
import { useAuth } from 'hooks/useAuth';

export default function RestrictedRoute({ element: Element, redirectTo }) {
  const { loggingInStatus } = useAuth();

  return loggingInStatus === STATUS.RESOLVED ? (
    <Navigate to={redirectTo} />
  ) : (
    Element
  );
}
