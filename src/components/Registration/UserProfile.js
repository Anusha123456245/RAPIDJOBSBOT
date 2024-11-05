import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  Card,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Stack,
  Snackbar,
  Alert,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Download,
  Edit,
  CheckCircle,
  AddCircleOutline,
  Phone,
  Email,
} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

function UserProfile() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [headline, setHeadline] = useState('');
  const [headlineError, setHeadlineError] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState('');
  const [photoURL, setPhotoURL] = useState(null); 
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phone)) {
      setPhoneError('Invalid phone number. Must be 10 digits.');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateHeadline = () => {
    if (headline.trim() === '') {
      setHeadlineError('Headline cannot be empty.');
      return false;
    }
    setHeadlineError('');
    return true;
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024 && ['image/jpeg', 'image/png'].includes(file.type)) {
      setPhoto(file);
      setPhotoError('');
      setIsPhotoAdded(true);
      const url = URL.createObjectURL(file);
      setPhotoURL(url); 
    } else {
      setPhotoError('Only JPG and PNG formats under 2MB are allowed.');
      setIsPhotoAdded(false);
    }
  };

  const handleSubmit = () => {
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    if (isPhoneValid && isEmailValid) {
      setSnackbarMessage('Profile updated successfully!');
      setSnackbarOpen(true);
    }
  };

  const handleVerifyMobile = () => {
    if (!validatePhone()) return;
    setSnackbarMessage('Mobile number verified successfully!');
    setSnackbarOpen(true);
  };

  const handleSaveHeadline = () => {
    if (validateHeadline()) {
      setShowDialog(false);
      setSnackbarMessage('Headline added successfully!');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ padding: 3, maxWidth: '800px', margin: '0 auto', backgroundColor: '#f8f8f8', borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h4" fontWeight="bold">RAPIDJOBSBOT</Typography>
        <Box>
          <Button variant="contained" sx={{ mr: 1, backgroundColor: '#1976d2' }}>Login</Button>
          <Button variant="contained" sx={{ backgroundColor: '#1976d2', borderColor: '#1976d2' }}>Register</Button>
        </Box>
      </Box>

      <Card sx={{ display: 'flex', alignItems: 'center', p: 2, my: 3, backgroundColor: '#e0f7fa', borderRadius: 2 }}>
        <Avatar
          src={photoURL} 
          sx={{ width: 80, height: 80, mr: 2 }}
        >
          {photoURL ? '' : 'SR'} 
        </Avatar>
        <Box flexGrow={1}>
          <Typography variant="h6">Sahaja Rani</Typography>
          <Typography variant="body2" color="text.secondary">Profile last updated - 16 Dec, 2023</Typography>
          <Typography variant="body2">Hyderabad, INDIA</Typography>
          <Typography variant="body2">Fresher</Typography>
          <Button variant="text" size="small"  sx={{ mt: 1 ,backgroundColor: '#1976d2'}}>Add availability to join</Button>
        </Box>
        <Box textAlign="right">
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            size="small"
            label="Phone"
            error={!!phoneError}
            helperText={phoneError}
            InputProps={{
              startAdornment: <Phone />,
            }}
            sx={{ mb: 1, width: '200px' }}
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size="small"
            label="Email"
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              startAdornment: <Email />,
            }}
            sx={{ width: '200px' }}
          />
        </Box>
      </Card>

      <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
        <Button variant="contained" startIcon={<CheckCircle />} sx={{ backgroundColor: 'green' }} onClick={handleVerifyMobile}>Verify mobile number</Button>
        <Button variant="contained" startIcon={<AddCircleOutline />} sx={{ backgroundColor: 'blue' }} component="label">
          Add photo
          <input
            type="file"
            hidden
            accept="image/jpeg, image/png"
            onChange={handlePhotoUpload}
          />
        </Button>
        <Button variant="contained" startIcon={<Edit />} sx={{ backgroundColor: 'purple' }} onClick={() => setShowDialog(true)}>Add resume headline</Button>
      </Stack>
      {photoError && <Typography variant="body2" color="error">{photoError}</Typography>}

      <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, mb: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Box>
          <Typography variant="h6">Resume</Typography>
          <Typography variant="body2">Sahaja.docx</Typography>
          <Typography variant="body2" color="text.secondary">Uploaded on Apr 27, 2021</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="contained" startIcon={<Download />} sx={{ mr: 1 }}>Download</Button>
          <IconButton color="primary"><Edit /></IconButton>
          <IconButton color="secondary"><DeleteIcon /></IconButton>
        </Box>
      </Card>

      <Box display="flex" mb={3}>
        <Card sx={{ flex: 1, p: 2, mr: 2, backgroundColor: '#e0f7fa', borderRadius: 2 }}>
          <Typography variant="h6">Create your resume in 3 easy steps</Typography>
          <List>
            <ListItem><ListItemText primary="1. Complete Your Profile by Adding Missing Details" /></ListItem>
            <ListItem><ListItemText primary="2. Select a Template for Your Resume" /></ListItem>
            <ListItem><ListItemText primary="3. Enhance Your Content with AI Assistance" /></ListItem>
          </List>
          <Button variant="contained" fullWidth>Create resume</Button>
        </Card>
        <Card sx={{ flex: 1, p: 2, backgroundColor: '#e8f5e9', borderRadius: 2 }}>
          <Typography variant="h6">Quick Links</Typography>
          <List>
            {['Resume', 'Resume headline', 'Key skills', 'Education', 'IT skills', 'Projects', 'Projects summary', 'Accomplishments', 'Career profile', 'Personal details'].map((item, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText primary={item} />
                <Button size="small" variant="text">Add</Button>
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>

      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Add Resume Headline</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Headline"
            fullWidth
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            error={!!headlineError}
            helperText={headlineError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveHeadline}>Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default UserProfile;
