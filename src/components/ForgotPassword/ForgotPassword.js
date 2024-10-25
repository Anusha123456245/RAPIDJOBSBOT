// src/components/ForgotPassword/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // Ensure to style this component

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const response = await axios.post('https://your-api-url/forgot-password', {
        email,
      });

      if (response.data.success) {
        setSuccessMessage('Password reset email sent! Please check your inbox.');
        // Optionally navigate back to login page
        // navigate('/login'); 
      } else {
        setError('Failed to send password reset email. Please try again.');
      }
    } catch (err) {
      console.error('Error during password reset:', err);
      setError('An error occurred while sending the reset email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleResetPassword} autoComplete="off">
        <h2>Forgot Password</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Email'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
