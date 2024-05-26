'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import './LoginForm.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await fetch('http://34.128.91.126/api/auth/login', {
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
      setSuccessMessage('Login successful!');
      setErrorMessage('');

      // Set cookies
      Cookies.set('user', JSON.stringify(data), { expires: 1 });
      console.log('Cookie set:', Cookies.get('user'));

      router.push('/review');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
}
