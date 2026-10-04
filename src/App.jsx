import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Products from"./pages/products";
import Footer from "./components/Footer";
import Cart from "./pages/cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";










function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;