import React from "react";
import Home from "./pages/Home";
import "./App.css";
import LogInPage from "./pages/LogInPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AboutMePage from "./pages/AboutMePage";
import SignUpPage from "./pages/SignUpPAGE";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Cart" element={<CartPage />} />
        <Route path="Shop" element={<ShopPage />} />
        <Route path="/:productId" element={<ProductPage />} />
        <Route path="LogIn" element={<LogInPage />} />
        <Route path="SignUP" element={<SignUpPage />} />
        <Route path="/Me" element={<AboutMePage /> } />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
