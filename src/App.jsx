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
    <BrowserRouter basename="ammar-s-shop">
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="logIn" element={<LogInPage />} />
        <Route path="signUP" element={<SignUpPage />} />
        <Route path="me" element={<AboutMePage /> } />
        
      </Routes>
    </BrowserRouter>
  );
};
export default App;
