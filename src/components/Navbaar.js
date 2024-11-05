import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png';
import './Navbaar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { CgProfile } from "react-icons/cg";

const Navbaar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="navbar">
      <img src={image} className="logo" alt="Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobseeker-login">Login</Link></li>
        <li><Link to="/employer-login">Companies</Link></li>
        <li><Link to="/admin-login">Services</Link></li>
        <li><Link to="/Jobseeker">Register</Link></li>
        <li><Link to="/admin-login">Jobs</Link></li>
      </ul>

      {/* Search Box */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </form>

      <NotificationsNoneIcon style={{ color: 'white', marginLeft: '15px' }} />
      
      {/* Link to User Profile */}
      <Link to="/userprofile">
        <CgProfile style={{ width: '30px', height: '30px', color: 'white', marginLeft: '15px' }} />
      </Link>
    </nav>
  );
};

export default Navbaar;
