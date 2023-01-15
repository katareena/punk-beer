import React, { FunctionComponent } from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';

const MainPage: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Search />

      </main>
    </>
  )
}

export default MainPage;
