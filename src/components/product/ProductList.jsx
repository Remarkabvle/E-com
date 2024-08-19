import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaHeart as HeartOutline, FaHeart as HeartFilled, FaShoppingCart } from "react-icons/fa";
import "./Product.scss";
import Notification from '../Notification/Notification'; // Import Notification
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

export const products = [
  { id: 1, name: "T-shirt with Tape Details", price: 120, rating: 4.5, originalPrice: null, discount: null, imageUrl: "https://rukminim2.flixcart.com/image/850/1000/krkyt8w0/kids-t-shirt/q/4/7/9-10-years-ght0031-mode-by-red-tape-original-imag5cyy6vatxsuq.jpeg?q=90&crop=false" },
  { id: 2, name: "Skinny Fit Jeans", price: 240, rating: 3.5, originalPrice: 260, discount: "20%", imageUrl: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67035990_TG.jpg?imwidth=2048&imdensity=1&ts=1708418028090" },
  { id: 3, name: "Checkered Shirt", price: 180, rating: 4.5, originalPrice: null, discount: null, imageUrl: "https://images.onlyandsons.com/22025979/4210217/003/onlysons-checkeredshirt-green.jpg?v=c14e170b9041f51aee222a286f3e0a9b&format=webp&width=1280&quality=90&key=25-0-3" },
  { id: 4, name: "Sleeve Striped T-shirt", price: 130, rating: 4.5, originalPrice: 160, discount: "30%", imageUrl: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67050648_99.jpg?imwidth=2048&imdensity=1&ts=1698939178764" },
  { id: 5, name: "Casual Hoodie", price: 150, rating: 4.0, originalPrice: 180, discount: "15%", imageUrl: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 6, name: "Formal Shoes", price: 200, rating: 4.2, originalPrice: 250, discount: "20%", imageUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 7, name: "Classic Watch", price: 300, rating: 4.8, originalPrice: 350, discount: "10%", imageUrl: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 8, name: "Leather Belt", price: 80, rating: 3.9, originalPrice: 100, discount: "20%", imageUrl: "https://files.ekmcdn.com/e7ea31/images/38mm-real-full-grain-mens-leather-belt-antique-brown-5866-1-p.jpg" },
  { id: 9, name: "Sunglasses", price: 90, rating: 4.3, originalPrice: 110, discount: "18%", imageUrl: "https://images.pexels.com/photos/371032/pexels-photo-371032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 10, name: "Denim Jacket", price: 220, rating: 4.4, originalPrice: 270, discount: "18%", imageUrl: "https://images.pexels.com/photos/3750708/pexels-photo-3750708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  // { id: 11, name: "Running Shoes", price: 160, rating: 4.6, originalPrice: 200, discount: "20%", imageUrl: "https://images.pexels.com/photos/2259926/pexels-photo-2259926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { id: 12, name: "Summer Dress", price: 130, rating: 4.1, originalPrice: 150, discount: "13%", imageUrl: "https://images.pexels.com/photos/1366701/pexels-photo-1366701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [showNotification, setShowNotification] = useState(false); // State for notification
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const handleWishlistClick = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="arrival-section">
      <div className="container">
        <h2 className="arrival-section__title">NEW ARRIVALS</h2>
        <div className="arrival-section__grid">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="arrival-item">
              <div className="arrival-item__image-container">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="arrival-item__image"
                  />
                </Link>
                <div className="arrival-item__icons">
                  {isInWishlist(product.id) ? (
                    <HeartFilled
                      className="arrival-item__icon active"
                      onClick={() => handleWishlistClick(product)}
                    />
                  ) : (
                    <HeartOutline
                      className="arrival-item__icon"
                      onClick={() => handleWishlistClick(product)}
                    />
                  )}
                  <FaShoppingCart 
                    className="arrival-item__icon" 
                    onClick={() => handleAddToCart(product)}
                  />
                </div>
              </div>
              <div className="arrival-item__details">
                <h3 className="arrival-item__name">
                  {product.name}
                </h3>
                <div className="arrival-item__rating-container">
                  <div className="arrival-item__stars">
                    {"⭐".repeat(Math.floor(product.rating))}
                  </div>
                  <span className="arrival-item__rating">
                    {product.rating}/5
                  </span>
                </div>
                <p className="arrival-item__price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <button className="arrival-section__load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
      {showNotification && (
        <Notification 
          product={selectedProduct} 
          onClose={() => setShowNotification(false)} 
        />
      )}
    </div>
  );
};

export default ProductList;
