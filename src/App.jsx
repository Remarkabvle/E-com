import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Wishlist from './pages/wishlist/Wishlist';
// import Footer from './components/footer/Footer';
import SiteHeader from './components/header/Header';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import ProductDetail from './components/product/ProductDetail';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin'; 

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
