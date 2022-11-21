import { useSelector } from 'react-redux';

import {
  selectUser,
  selectRegisteringStatus,
  selectLoggingInStatus,
  selectLoggingOutStatus,
  selectRefreshingStatus,
} from 'redux/auth/selectors';

export function useAuth() {
  return {
    user: useSelector(selectUser),
    registeringStatus: useSelector(selectRegisteringStatus),
    loggingInStatus: useSelector(selectLoggingInStatus),
    loggingOutStatus: useSelector(selectLoggingOutStatus),
    refreshingStatus: useSelector(selectRefreshingStatus),
  };
}
