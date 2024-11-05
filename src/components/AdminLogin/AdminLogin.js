// JobSeekerLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AdminLogin.css';
import { FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const AdminLogin= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/v1/api/jobseekers/login', formData);

      setSuccessMessage(response.data.message); // Display success message
      localStorage.setItem('token', response.data.token); // Store JWT token in local storage

      // Redirect or navigate to the dashboard or another page if needed
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const validateForm = () => {
    if (!username || !password) {
      setError('Both username and password are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleRegister = () => {
    navigate('/jobseeker'); // Navigate to registration page
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>

        {error && <div className="error-message">{error}</div>}

        <div className="input-box">
          <input
            type="text"
            name="fakeuser"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="new-username" // Avoid browser autofill
            required
          />
          <FaUserAlt className="icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="fakepassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password" // Avoid browser autofill
            required
          />
          <CiLock className="icon" />
        </div>

        <div className="remember-forgot">
          <div className="remember">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember">Remember</label>
          </div>
          <button type="button" className="forgot-password" onClick={() => navigate('/forgot-password')}>
            Forgot Password
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="register-link">
          <p>Don't have an account? 
            <button onClick={handleRegister} className="register-button">Register</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
