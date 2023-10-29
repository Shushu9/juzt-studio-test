import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Cart from './pages/Cart';
import FullCar from "./pages/FullCar";
import MainLayout from "./layouts/MainLayout";

import './scss/app.scss';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        <Route path="car/:id" element={<FullCar />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
