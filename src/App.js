import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
