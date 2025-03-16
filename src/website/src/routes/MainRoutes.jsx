import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Example from './Example';
import PageNotFound from './404';
import ECRoutes from './Ec';
import EURoutes from './Eu';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/example" element={<Example />} />
      <Route path="/ec/*" element={<ECRoutes />} />
      <Route path="/eu/*" element={<EURoutes />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
