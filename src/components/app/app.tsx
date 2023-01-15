import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        {/* <Route path={AppRoute.About} element={<AboutPage />} />
        <Route path={AppRoute.MyFavorite} element={<FavoritePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
     
export default App;
