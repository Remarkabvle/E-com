import React, { useContext, useState } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import { FaTrashAlt } from 'react-icons/fa'; 
import './Wishlist.scss'; 

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const openModal = (product) => {
    setItemToRemove(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToRemove(null);
  };

  const handleConfirm = () => {
    if (itemToRemove) {
      removeFromWishlist(itemToRemove.id);
    }
    closeModal();
  };

  return (
    <div className="wishlist-container">
      {wishlist.length > 0 ? (
        <>
          <div className="wishlist-content">
            <h2 className="wishlist-title">Your Wishlist</h2>
            <div className="wishlist-grid">
              {wishlist.map((product) => (
                <div key={product.id} className="wishlist-item">
                  <div className="wishlist-item__image-container">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="wishlist-item__image"
                    />
                    <div className="wishlist-item__icons">
                      <span
                        className="wishlist-item__icon"
                        onClick={() => openModal(product)}
                      >
                        <FaTrashAlt /> {/* Use the trash icon */}
                      </span>
                    </div>
                  </div>
                  <div className="wishlist-item__details">
                    <h3 className="wishlist-item__name">{product.name}</h3>
                    <div className="wishlist-item__rating-container">
                      <div className="wishlist-item__stars">
                        {'⭐'.repeat(Math.floor(product.rating))}
                      </div>
                      <span className="wishlist-item__rating">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="wishlist-item__price-container">
                      <span className="wishlist-item__current-price">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className="wishlist-item__old-price">
                            ${product.originalPrice}
                          </span>
                          <span className="wishlist-item__discount">
                            {product.discount}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="wishlist-empty">
          <h2>Your Wishlist is Empty!</h2>
          <p>Start adding items to your wishlist and watch it grow.</p>
          <img
            src="https://www.shopperswarehouse.com/assets/e_website/assets/site_image/empty_wishlist.png"
            alt="Empty Wishlist"
            className="wishlist-empty-image"
          />
        </div>
      )}

      {isModalOpen && (
        <div className="confirmation-modal-overlay">
          <div className="confirmation-modal-content">
            <h2>Confirm Removal</h2>
            <p>Are you sure you want to remove "{itemToRemove.name}" from your wishlist?</p>
            <div className="confirmation-modal-buttons">
              <button className="confirmation-modal-button" onClick={handleConfirm}>Yes, Remove</button>
              <button className="confirmation-modal-button" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
