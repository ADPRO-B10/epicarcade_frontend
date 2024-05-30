'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './BuyerForm.css';

export default function BuyerRegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
      email,
      password,
      role: "2"
    };

    try {
      const response = await fetch('http://34.128.91.126/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      const data = await response.json(); // Read and parse the response as JSON
      console.log('Success:', data);
      setSuccessMessage('Registration successful!');
      setErrorMessage('');
      router.push('/auth/login'); // Redirect to /auth/login page
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Register as Buyer</h1>
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
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
