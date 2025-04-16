import React from 'react';
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Slider from './components/slider/Slider';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AllProducts from './pages/all products/AllProducts';
import SingleProduct from './pages/single product/SingleProduct';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div>
     <Router>
     <Routes>
     <Route path="/" element ={<Home/>} />
     <Route path="/register" element ={<Register/>} />
     <Route path="/login" element ={<Login/>} />
     <Route path="/products" element ={<AllProducts/>} />
     <Route path="/product/:id" element ={<SingleProduct/>} />
     <Route path="/cart" element ={<Cart/>} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;

