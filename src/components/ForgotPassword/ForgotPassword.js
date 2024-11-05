import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessage(`A password reset link has been sent to ${email}.`);
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <div className='input-box'>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
