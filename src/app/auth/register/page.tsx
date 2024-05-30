import React from 'react';
import Link from 'next/link';
import './RegisterPage.css';

export default function RegisterPage(){
  return (
    <div className="container">
      <h1 className="title">Register as :</h1>
      <div className="button-container">
        <Link href="/auth/register/buyer">
          <button className="button">Buyer</button>
        </Link>
        <Link href="/auth/register/seller">
          <button className="button">Seller</button>
        </Link>
      </div>
    </div>
  );
}
