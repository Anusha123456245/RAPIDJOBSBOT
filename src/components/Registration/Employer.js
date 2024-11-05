import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Box } from '@mui/material';

const Employer = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Employer Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="companyName"
                label="Company Name"
                fullWidth
                required
                value={formData.companyName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="contactNumber"
                label="Contact Number"
                fullWidth
                required
                value={formData.contactNumber}
                onChange={handleChange}
                type="tel"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Employer;
