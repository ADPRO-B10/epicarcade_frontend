import React from 'react';
import Link from 'next/link';
import './AuthPage.css';

export default function AuthPage(){
  return (
    <div className="container">
      <h1 className="title">EpicArcade</h1>
      <div className="button-container">
        <Link href="/auth/register/">
          <button className="button">Register</button>
        </Link>
        <Link href="/auth/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </div>
  );
}
