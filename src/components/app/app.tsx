import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../../hooks/context';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import Catalog from '../catalog/catalog';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />}>
            <Route path='results' element={<Catalog /> } />
            {/* <Route path='results/:id' element={<Card /> } />
            <Route path='about' element={<AboutPage />} />
            <Route path='favorite 'element={<FavoritePage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
     
export default App;
