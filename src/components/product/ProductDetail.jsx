import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductList'; // Import products array from ProductList
import './ProductDetail.css'; // Assuming you have a CSS file for styling

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.imageUrl || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'default');
  const [selectedSize, setSelectedSize] = useState('Large'); // Default size
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__image-section">
        <div className="product-detail__thumbnails">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name}-${index}`}
              className={`product-detail__thumbnail ${selectedImage === image ? 'active' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="product-detail__image-container">
          <img src={selectedImage} alt={product.name} className="product-detail__image" />
        </div>
      </div>
      <div className="product-detail__info">
        <h1 className="product-detail__name">{product.name}</h1>
        <div className="product-detail__rating">
          {'★'.repeat(Math.floor(product.rating))} {product.rating} / 5
        </div>
        <p className="product-detail__price">
          {product.discount ? (
            <>
              <span className="product-detail__price--discounted">${product.price}</span>
              <span className="product-detail__price--original">${product.originalPrice}</span>
              <span className="product-detail__discount">-{product.discount}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </p>
        <p className="product-detail__description">
          {product.description}
        </p>
        <div className="product-detail__options">
          {product.colors && (
            <div className="product-detail__colors">
              <span>Select Color:</span>
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`product-detail__color ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          )}
          <div className="product-detail__sizes">
            <span>Choose Size:</span>
            {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
              <button
                key={size}
                className={`product-detail__size ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="product-detail__quantity">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="product-detail__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
