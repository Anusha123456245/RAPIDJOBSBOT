import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Box, 
  IconButton, 
  InputAdornment 
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const EmployerLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!validateForm()) return; // Check for valid input before submission

    try {
      const response = await axios.post('http://localhost:5000/v1/api/jobseekers/login', formData);

      setSuccessMessage(response.data.message); // Display success message
      localStorage.setItem('token', response.data.token); // Store JWT token in local storage

      // Redirect or navigate to the dashboard or another page if needed
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        {errorMessage && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography color="primary" align="center" sx={{ mb: 2 }}>
            {successMessage}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            required
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EmployerLoginForm;
