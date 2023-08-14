import React from "react";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home.js";
import Products from "./pages/Products/Products";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/shanproducts/home" element={<Home />} />
        <Route path="/shanproducts/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
