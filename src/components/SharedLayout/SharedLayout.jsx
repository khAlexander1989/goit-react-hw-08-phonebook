import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from 'components/AppBar';
import { Container } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
