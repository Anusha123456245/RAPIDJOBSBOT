import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, Typography, FormControl, InputLabel, Select, Box } from '@mui/material';

const Professionaldetails = () => {
  const [formData, setFormData] = useState({
    professionName: '',
    currentJob: '',
    experience: '',
    technicalSkills: '',
    licenses: '',
    careerObjective: '',
  });

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
  };

  return (
    <Grid  justifyContent="center" alignItems="center" style={{ minHeight: '100vh', }}>
      <Grid container item xs={12} md={6} >
        <Box sx={{ p: 4,  backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" align="center" gutterBottom>
              Professional Skills
            </Typography>

            <Grid container spacing={3}>
              
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel required>Profession Name</InputLabel>
                  <Select
                    name="professionName"
                    value={formData.professionName}
                    onChange={handleChange}
                    label="Profession Name"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                    <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                    <MenuItem value="Product Manager">Product Manager</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Job"
                  name="currentJob"
                  placeholder="Job Role"
                  value={formData.currentJob}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="experience"
                  placeholder="In months"
                  value={formData.experience}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

             
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Technical Skills</InputLabel>
                  <Select
                    name="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={handleChange}
                    label="Technical Skills"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="JavaScript">JavaScript</MenuItem>
                    <MenuItem value="Python">Python</MenuItem>
                    <MenuItem value="Java">Java</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Professional licenses/Certifications"
                  name="licenses"
                  placeholder="Licenses/Certifications"
                  value={formData.licenses}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Career Objective"
                  name="careerObjective"
                  placeholder="Career objective"
                  value={formData.careerObjective}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              
              <Grid item xs={12} container >
                <Button variant="text" color="primary">
                  Skip
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Professionaldetails;
