import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { CiLock } from "react-icons/ci";
import './JobSeekerLogin.css';

const JobSeekerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const formData = { email, password };
      const response = await axios.post('http://localhost:5000/v1/api/jobseekers/login', formData);

      setSuccessMessage(response.data.message);

      // Store token based on the remember choice
      if (remember) {
        localStorage.setItem('token', response.data.token); // Store in localStorage for "Remember Me"
      } else {
        sessionStorage.setItem('token', response.data.token); // Store in sessionStorage for one session
      }

      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!email || !password) {
      setError('Email and password are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleRegister = () => {
    navigate('/jobseeker');
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="new-email" 
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
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
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button
            type="button"
            className="forgot-password"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <button type="button" onClick={handleRegister} className="register-button">
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default JobSeekerLogin;
