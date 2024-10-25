import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
      const data = response.data;

      if (data.length === 0) {
        setError('Admin not found');
        return;
      }

      if (password === 'admin123') {
        alert('Admin Login Successful!');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} autoComplete="off">
        <input type="text" name="fake-field" style={{ display: 'none' }} />

        <h2>Admin Login</h2>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            name="unique-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
