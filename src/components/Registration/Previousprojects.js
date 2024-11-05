import React, { useState } from 'react';
import { Box, Typography, Divider, Button, Grid } from '@mui/material';

const Previousprojects = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: '',
    profileSummary: '',
    onlineProfile: '',
    workSample: '',
    whitePaper: '',
    presentation: '',
    patent: '',
    certification: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData({
      ...projectData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('previousProjects', JSON.stringify(projectData));
    alert('Data saved to LocalStorage!');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Grid item xs={12} md={8} lg={6}>
        <Box sx={{ maxWidth: 750, margin: 'auto', padding: 4, backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Previous Projects</Typography>
            <Divider sx={{ mb: 2 }} />

            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="h6">Projects</Typography>
              <input
                type="text"
                placeholder="Enter Project Title"
                name="projectTitle"
                value={projectData.projectTitle}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', marginTop: '8px', border: '1px solid #ccc', borderRadius: '4px', transition: 'border-color 0.3s' }}
                onFocus={(e) => (e.target.style.borderColor = '#3f51b5')}
                onBlur={(e) => (e.target.style.borderColor = '#ccc')}
              />
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="h6">Profile Summary</Typography>
              <input
                type="text"
                placeholder="Enter Profile Summary"
                name="profileSummary"
                value={projectData.profileSummary}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', marginTop: '8px', border: '1px solid #ccc', borderRadius: '4px', transition: 'border-color 0.3s' }}
                onFocus={(e) => (e.target.style.borderColor = '#3f51b5')}
                onBlur={(e) => (e.target.style.borderColor = '#ccc')}
              />
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="h6" sx={{ mb: 1 }}>Accomplishments</Typography>

            {['onlineProfile', 'workSample', 'whitePaper', 'presentation', 'patent', 'certification'].map((field, index) => (
              <Box key={index} sx={{ marginBottom: 3 }}>
                <Typography variant="h6">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</Typography>
                <input
                  type="text"
                  placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}`}
                  name={field}
                  value={projectData[field]}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', marginTop: '8px', border: '1px solid #ccc', borderRadius: '4px', transition: 'border-color 0.3s' }}
                  onFocus={(e) => (e.target.style.borderColor = '#3f51b5')}
                  onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                />
              </Box>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
              <Button type="submit" variant="contained" color="primary" sx={{ padding: '10px 20px', fontWeight: 'bold' }}>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Previousprojects;
