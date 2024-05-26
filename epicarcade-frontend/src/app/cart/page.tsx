'use client';

import React, { useEffect } from 'react';
import './ShoppingCart.css';

const ShoppingCart: React.FC = () => {
  // Dummy data for demonstration
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Handle checkout logic here
    alert('Checkout clicked!');
  };

  useEffect(() => {
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
      checkoutButton.addEventListener('click', handleCheckout);
      return () => {
        checkoutButton.removeEventListener('click', handleCheckout);
      };
    }
  }, []);

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar">
        <h2>Cart Summary</h2>
        <div className="summary-details">
          <p>Total Items: {cartItems.length}</p>
          <p>Total Price: ${totalPrice}</p>
        </div>
        <button id="checkout-button" className="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
