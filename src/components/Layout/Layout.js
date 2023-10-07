import { AppBar } from 'components/AppBar.js/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fullback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
