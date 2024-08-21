import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import "./Cart.scss";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <h2 className="cart-page__title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-page__empty">Your cart is empty</p>
        ) : (
          <div className="cart-page__content">
            <ul className="cart-page__list">
              {cart.map((item) => (
                <li key={item.id} className="cart-page__item">
                  <img src={item.imageUrl} alt={item.name} className="cart-page__item-image" />
                  <div className="cart-page__item-details">
                    <h3 className="cart-page__item-name">{item.name}</h3>
                    <p className="cart-page__item-size">Size: {item.size}</p>
                    <p className="cart-page__item-color">Color: {item.color}</p>
                    <p className="cart-page__item-price">${item.price}</p>
                  </div>
                  <div className="cart-page__item-actions">
                    <button 
                      className="cart-page__quantity-button cart-page__quantity-button--decrease"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="cart-page__quantity">{item.quantity}</span>
                    <button 
                      className="cart-page__quantity-button cart-page__quantity-button--increase"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      <FaPlus />
                    </button>
                    <button 
                      className="cart-page__remove-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
