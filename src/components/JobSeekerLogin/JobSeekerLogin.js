import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './JobSeekerLogin.css';
import { FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Logging in with:', { username, password, remember });
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

  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>

        {error && <div className="error-message">{error}</div>}

        <div className='input-box'>
          <input
            type="text"
            name="fakeuser"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />
          <FaUserAlt className='icon' />
        </div>

        <div className='input-box'>
          <input
            type="password"
            name="fakepassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          <CiLock className='icon' />
        </div>

        <div className='remember-forgot'>
          <div className="remember">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember">Remember</label>
          </div>
          <button type="button" className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password
          </button>
        </div>

        <button type="submit">Login</button>

        <div className='register-link'>
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
