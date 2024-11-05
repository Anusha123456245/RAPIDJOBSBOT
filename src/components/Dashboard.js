import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove tokens from storage
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/jobseeker-login'); // Redirect to login page
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your dashboard where you can view and manage your activities.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
