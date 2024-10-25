
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbaar.css';

const Navbaar = () => {
  return (
    <nav className="navbar">
      <h1>Job Portal</h1>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/jobseeker-login">Job Seeker Login</Link></li>
        <li><Link to="/employer-login">Employer Login</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbaar;
