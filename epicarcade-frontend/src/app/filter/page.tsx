import React, { useState } from 'react';
import './searchgame.css';

export default function SearchGame() {
  const [title, setTitle] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    // Implementasi logika pencarian di sini
    console.log(`Searching for title: ${title} with price range: ${minPrice} - ${maxPrice}`);
    // Anda bisa menambahkan logika untuk memanggil API atau filter data di sini
  };

  return (
    <div className="search-container">
      <h1 className="search-title">Search Games</h1>
      <div className="input-group">
        <label htmlFor="title">Game Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter game title"
        />
      </div>
      <div className="input-group">
        <label htmlFor="minPrice">Minimum Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Enter minimum price"
        />
      </div>
      <div className="input-group">
        <label htmlFor="maxPrice">Maximum Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Enter maximum price"
        />
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}
