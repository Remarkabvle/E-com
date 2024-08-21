import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const isProductInCart = cart.some(item => item.id === product.id);

    if (!isProductInCart) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const product = cart.find(item => item.id === productId);

    if (product) {
      const confirmDelete = window.confirm(
        `Are you sure you want to remove ${product.name} from your cart?`
      );

      if (confirmDelete) {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
      }
    }
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
