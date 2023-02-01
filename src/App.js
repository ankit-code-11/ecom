import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { productList } from './redux/Action/productAction';
import Product from './component/Product';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/').then(res => res.json()).then(response => setData(response));

    productList(data);
  }, [])
  console.log(data)
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product  /> }/>
      </Route>
    </Routes>
  );
}

export default App;
