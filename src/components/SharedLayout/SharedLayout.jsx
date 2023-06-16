import React from 'react';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
