import React, { useState } from 'react';
import { Box, Chip, Typography, Divider, Button, Grid, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState(['Computer operating', 'Typing']);
  const [employment, setEmployment] = useState('');
  const [education, setEducation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        skills,
        employment,
        education,
      });
      console.log('Profile data saved:', response.data);
    } catch (error) {
      console.error('There was an error saving the profile data!', error);
    }
  };

  return (
    <Grid container >
      <Grid item xs={12} sm={8} md={6}>
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, backgroundColor: '#f5f5f5' }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="h6">Key Skills</Typography>
              <EditIcon fontSize="small" sx={{ cursor: 'pointer', marginLeft: 1 }} />
              <Box sx={{ marginTop: 1 }}>
                {skills.map((skill, index) => (
                  <Chip key={index} label={skill} sx={{ marginRight: 1 }} />
                ))}
              </Box>
              <TextField
                fullWidth
                label="Add New Skill"
                value={''}
                onChange={(e) => setSkills([...skills, e.target.value])}
                sx={{ marginTop: 2 }}
              />
            </Box>

            <Divider />

            <Box sx={{ marginBottom: 3, marginTop: 3 }}>
              <Typography variant="h6">Employment</Typography>
              <Typography color="textSecondary">
                Your employment details will help recruiters understand your experience.
              </Typography>
              <TextField
                fullWidth
                label="Employment"
                value={employment}
                onChange={(e) => setEmployment(e.target.value)}
                sx={{ marginTop: 2 }}
              />
            </Box>

            <Divider />

            <Box sx={{ marginBottom: 3, marginTop: 3 }}>
              <Typography variant="h6">Education</Typography>
              <TextField
                fullWidth
                label="Education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                sx={{ marginTop: 2 }}
              />
              <Box sx={{ marginTop: 2 }}>
                <Button size="small">Add doctorate/PHD</Button>
                <Button size="small" sx={{ marginLeft: 1 }}>Add master/post-graduation</Button>
                <Button size="small" sx={{ marginLeft: 1 }}>Add class X</Button>
              </Box>
            </Box>

            <Divider />

            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
              Save Profile
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
