'use client';

import React, { useState } from 'react';
import './SellerForm.css';
import { useRouter } from 'next/navigation';

export default function SellerRegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordVerify) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    const user = {
      username,
      password,
    };
    //ini buat nanti masukin ke database

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      const data = await response.json();
      console.log('Success:', data);
      setSuccessMessage('Registration successful!');
      setErrorMessage('');
      router.push('/review');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Register as Seller</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </label>
          <label>
            Verify Password:
            <input
              type="password"
              value={passwordVerify}
              onChange={(e) => setPasswordVerify(e.target.value)}
              required
              className="input"
            />
          </label>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
}
