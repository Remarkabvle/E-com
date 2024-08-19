import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Wishlist from './pages/wishlist/Wishlist';
// import ProductDetail from './pages/productDetail/ProductDetail'; \
import SiteHeader from './components/header/Header';
// import Footer from './components/footer/Footer';
import { WishlistProvider } from './context/WishlistContext';
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <SiteHeader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetail/>} /> 
        </Routes>
        {/* <Footer/> */}
      </Router>
    </WishlistProvider>
  );
}

export default App;
