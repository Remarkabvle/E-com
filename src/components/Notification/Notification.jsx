import React from 'react';
import { Link } from 'react-router-dom';
import './Notification.scss';

const Notification = ({ product, onClose }) => {
  return (
    <div className="notification">
      <img src={product.imageUrl} alt={product.name} className="notification__image" />
      <div className="notification__content">
        <p><strong>Added to cart:</strong></p>
        <p>{product.name}</p>
      </div>
      <Link to="/cart" className="notification__button">
        Go to Cart
      </Link>
      <button className="notification__close" onClick={onClose}>×</button>
    </div>
  );
};

export default Notification;
