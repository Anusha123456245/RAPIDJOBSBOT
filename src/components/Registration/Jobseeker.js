import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Jobseeker = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    surname: '',
    email: '',
    password: '',
    mobile: '',
    workStatus: 'fresher',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (simple example)
    if (!formData.firstName || !formData.lastName || !formData.surname || !formData.email || !formData.password || !formData.mobile) {
      setError('All fields are required.');
      return;
    }

    try {
      // Simulating an API call
      console.log('Registration data:', formData);
      alert('Registration successful!');

      // Redirecting to Personal Details page
      navigate('/personaldetails'); // Redirect to the Personal Details page
    } catch (err) {
      console.error('Registration error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  // Inline styles for the component
  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    select: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h1 style={styles.heading}>Register</h1>

        {error && <div style={styles.errorMessage}>{error}</div>}

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
          style={styles.input} // optional
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select
          name="workStatus"
          value={formData.workStatus}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="fresher">Fresher</option>
          <option value="experienced">Experienced</option>
        </select>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Jobseeker;
