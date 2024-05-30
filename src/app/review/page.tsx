import React from 'react';
import Link from 'next/link';
import './review.css';

export default function ReviewPage() {
  return (
    <div className="container">
      <h1 className="title">Review Page</h1>
      <div className="button-container">
        <Link href="/review/add-review">
          <button className="button">Add your review</button>
        </Link>
        <Link href="/review/all-review">
          <button className="button">See all reviews</button>
        </Link>
        <Link href="/">
          <button className="button">Home Page</button>
        </Link>
      </div>
    </div>
  );
}
