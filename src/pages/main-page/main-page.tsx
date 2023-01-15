import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Search from '../../components/search/search';

const MainPage: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Search />
        <Outlet />
      </main>
    </>
  )
}

export default MainPage;
