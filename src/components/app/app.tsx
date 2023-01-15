import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../../hooks/context';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import AboutPage from '../../pages/about-page/about-page';
import NoFoundPage from '../../pages/no-found-page/no-found-page';
import Catalog from '../catalog/catalog';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />}>
            <Route path='results' element={<Catalog /> } />
            {/* <Route path='results/:id' element={<Card /> } /> */}
          </Route>

          <Route path={AppRoute.About} element={<AboutPage />} />
          {/* <Route path={AppRoute.MyFavorite} element={<FavoritePage />} /> */}
          <Route path={AppRoute.NoFoundPage} element={<NoFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
     
export default App;
