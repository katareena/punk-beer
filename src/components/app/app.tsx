import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../../hooks/use-context';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import Catalog from '../catalog/catalog';
import LostPage from '../../pages/lost-page/lost-page';
import AboutPage from '../../pages/about-page/about-page';
import Product from '../product/product';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />}>
            <Route path='results/:page' element={<Catalog /> } />
            <Route path='results/:page/:id' element={<Product />} />
          </Route>

          <Route path={AppRoute.About} element={<AboutPage />} />

          <Route path={AppRoute.MyFavorite} element={
              <LostPage title='Coming soon...'/>
            } 
          />

          <Route path={AppRoute.NoFoundPage} element={
              <LostPage title='404. Page not found'/>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
     
export default App;
