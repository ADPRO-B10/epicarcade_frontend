'use client';

import React, { useEffect, useState } from 'react';
import './AllReviews.css';

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [games, setGames] = useState({});

  useEffect(() => {
    fetch('http://34.34.219.228/reviews/list-reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        fetch('http://34.34.219.228/reviews/games')
          .then(response => response.json())
          .then(gamesData => {
            const gamesDict = {};
            gamesData.forEach(game => {
              gamesDict[game.id] = game.name;
            });
            setGames(gamesDict);
          })
          .catch(error => {
            console.error('Error fetching games:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://34.34.219.228/reviews/delete-review/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      setReviews(reviews.filter(review => review.id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className="container">
      <h1>All Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h2 className="id-games">Id-game: {games[review.id_game] || review.id_game}</h2>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <button
              className="delete-button"
              onClick={() => handleDelete(review.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="no-reviews">No reviews available.</p>
      )}
    </div>
  );
}
