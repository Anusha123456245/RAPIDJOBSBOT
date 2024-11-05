// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  const handleJobSeeker = () => {
    navigate('/Jobseeker'); // Navigate to Job Seeker Registration page
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Job Portal</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h2>Job Categories</h2>
      <ul>
        {/* Add job categories here */}
      </ul>
      <h2>AI-Driven Job Suggestions</h2>
      <ul>
        {/* Add job suggestions here */}
      </ul>
      {/* Button to navigate to  Employer page */}
      <button onClick={handleJobSeeker}>Go to Jobseeker Registration</button>
    </div>
  );
};

export default HomePage;
