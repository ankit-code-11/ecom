import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from './component/Product';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product  /> }/>
      </Route>
    </Routes>
  );
}

export default App;
