import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './checkout.css';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('Default');
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const buyerId = 'buyer123'; // fetch user id
    fetch(`/orders/user/${buyerId}`)
      .then(response => response.json())
      .then(data => setOrder(data));
  }, []);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePay = () => {
    fetch('/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: order.id,
        amount: order.totalPrice,
      }),
    })
      .then(response => response.json())
      .then(data => {
        fetch(`/payments/${data.id}/method`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentMethod),
        })
          .then(() => {
            fetch(`/payments/${data.id}/process`, {
              method: 'POST',
            })
            .then(response => response.json()) // Convert the response to JSON
            .then(paymentStatus => {
              // Now you can use paymentStatus
              if (paymentStatus === 'Success') {
                // Handle success case
              } else if (paymentStatus === 'Rejected') {
                // Handle rejection case
              }
            });
          });
      });
  };

  return (
    <div className="container">
      <h1 className="title">Checkout</h1>
      <h2>Order Summary</h2>
      {order && (
        <div>
          <p>Buyer ID: {order.buyerId}</p>
          <p>Total Price: {order.totalPrice}</p>
          <h2>Order Games</h2>
          {order.orderGames.map((game, index) => (
            <div key={index}>
              <p>Game ID: {game.gameId}</p>
              <p>Quantity: {game.quantity}</p>
            </div>
          ))}
          <h2>Initial Payment</h2>
          <p>Payment ID: {order.payment.id}</p>
          <p>Payment Method: {order.payment.method}</p>
          <p>Payment Status: {order.payment.status}</p>
          <p>Payment Amount: {order.payment.amount}</p>
        </div>
      )}
      <h2>Payment Method</h2>
      <select value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="default">Default</option>
        {/* Add more options as needed */}
      </select>
      <div className="button-container">
        <button className="button" onClick={handlePay}>Pay</button>
        <Link href="/">
          <button className="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}