import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Select, InputLabel, FormControl, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Personaldetails = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    gender: '',
    nationality: '',
    languagePreference: '',
    healthCondition: ''
  });
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Navigate to Qualificationdetails after submitting personal details
    navigate('/qualificationdetails');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Box sx={{ p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" align="center" gutterBottom>
              Personal Details
            </Typography>
            <Grid container spacing={3}>
              {/* Form fields for personal details */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  placeholder="DD-MM-YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={formData.gender}
                    name="gender"
                    onChange={handleChange}
                    label="Gender"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Nationality</InputLabel>
                  <Select
                    value={formData.nationality}
                    name="nationality"
                    onChange={handleChange}
                    label="Nationality"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="American">American</MenuItem>
                    <MenuItem value="Canadian">Canadian</MenuItem>
                    <MenuItem value="Indian">Indian</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Language Preference</InputLabel>
                  <Select
                    value={formData.languagePreference}
                    name="languagePreference"
                    onChange={handleChange}
                    label="Language Preference"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Disability/Health Condition"
                  name="healthCondition"
                  placeholder="Any specific health condition?"
                  value={formData.healthCondition}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} container>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                <Button variant="text" color="primary">
                  Skip
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personaldetails;
