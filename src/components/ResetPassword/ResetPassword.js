import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css'; // Import CSS for this component

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      // Simulating API call to JSONPlaceholder
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      // Simulate success response
      alert('A password reset link has been sent to your email address.');
      setLoading(false);
      navigate('/login'); // Redirect to login page after reset
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!email) {
      setError('Email is required.');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className="reset-password-wrapper">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Reset Password</h1>

        {error && <div className="error-message">{error}</div>}

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off" // Avoid browser autofill
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>

        <div className="login-link">
          <p>Remember your password? 
            <button onClick={() => navigate('/login')} className="login-button">Login</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
