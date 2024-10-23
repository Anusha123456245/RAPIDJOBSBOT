
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbaar.css'; 

const Navbaar = () => {
  return (
    <nav className="navbar">
      <h1>Job Portal</h1>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup"> Sign Up</Link>
        <Link to="/employer-login">EmployerLogin</Link>
      </div>
    </nav>
  );
};

export default Navbaar;
