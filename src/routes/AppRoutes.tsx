import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from '../config/layout/DefaultLayout';
import Home from '../pages/Home';
import Search from '../pages/Search';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
        <Route path="/search" element={<DefaultLayout component={Search} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
