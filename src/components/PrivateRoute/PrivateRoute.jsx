import { Navigate } from 'react-router-dom';

import { STATUS } from 'utils/constants';
import { useAuth } from 'hooks/useAuth';

export default function PrivateRoute({ element: Element, redirectTo }) {
  const { loggingInStatus, refreshingStatus } = useAuth();

  const shouldRedirect =
    loggingInStatus !== STATUS.RESOLVED && refreshingStatus !== STATUS.PENDING;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Element;
}
