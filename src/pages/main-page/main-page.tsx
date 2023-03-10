import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import { useGlobalContext } from '../../hooks/use-context';

const MainPage: FunctionComponent = (): JSX.Element => {
  const { resultTitle, isSearchActive } = useGlobalContext();

  return (
    <>
      <Header />
      <main>
        <Search />
        { !isSearchActive && resultTitle && <h2 className='message'>{resultTitle}</h2> }
        <Outlet />
      </main>
    </>
  )
}

export default MainPage;
