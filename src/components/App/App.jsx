import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import Notiflix from 'notiflix';

import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';

import { notifyOptions } from 'utils/constants';
import { useAuth } from 'hooks/useAuth';
import { STATUS } from '../../utils/constants';

Notiflix.Notify.init(notifyOptions);

const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export default function App() {
  const dispatch = useDispatch();
  const { refreshingStatus } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return refreshingStatus === STATUS.PENDING ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/login"
          element={<RestrictedRoute element={<Login />} redirectTo="/" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute element={<Register />} redirectTo="/" />}
        />
        <Route
          index
          element={<PrivateRoute element={<Contacts />} redirectTo="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
