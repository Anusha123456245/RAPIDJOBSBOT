
import React, { useState } from 'react';
import './HomePage.css'; 

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  
  const jobCategories = ['IT & Software', 'Marketing', 'Design', 'Sales', 'Customer Support'];

  
  const jobSuggestions = [
    'Frontend Developer - Remote',
    'Digital Marketing Specialist',
    'UX/UI Designer',
    'Sales Manager',
    'Customer Support Executive',
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
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
        {jobCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h2>AI-Driven Job Suggestions</h2>
      <ul>
        {jobSuggestions.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
