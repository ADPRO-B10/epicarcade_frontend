import React from 'react';
import Link from 'next/link';
import './homepage.css';

export default function Home(){
  return (
    <div className="container">
      <h1 className="title">EpicArcade</h1>
      <div className="button-container">
        <Link href="/review">
          <button className="button">Review Page</button>
        </Link>
        <Link href="/">
          <button className="button">History</button>
        </Link>
        <Link href="/">
          <button className="button">Buy Games</button>
        </Link>
        <Link href="/">
          <button className="button">Cart</button>
        </Link>
        <Link href="/checkout">
          <button className="button">Checkout</button>
        </Link>
        <Link href="/">
          <button className="button">Search Game</button>
        </Link>
      </div>
    </div>
  );
}
