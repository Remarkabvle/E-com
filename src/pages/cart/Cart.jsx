import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.scss";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h2 className="cart-page__title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-page__empty">Your cart is empty</p>
        ) : (
          <ul className="cart-page__list">
            {cart.map((item) => (
              <li key={item.id} className="cart-page__item">
                <img src={item.imageUrl} alt={item.name} className="cart-page__item-image" />
                <div className="cart-page__item-details">
                  <h3 className="cart-page__item-name">{item.name}</h3>
                  <p className="cart-page__item-price">${item.price}</p>
                </div>
                <button 
                  className="cart-page__remove-button" 
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
