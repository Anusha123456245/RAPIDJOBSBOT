import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbaar from './components/Navbaar';
import HomePage from './components/HomePage/HomePage'; 
import JobSeekerLogin from './components/JobSeekerLogin/JobSeekerLogin';
import EmployerLoginForm from './components/EmployerLoginForm/EmployerLoginForm';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'; 
import Jobseeker from './components/Registration/Jobseeker';
import Employer from './components/Registration/Employer';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Personaldetails from './components/Registration/Personaldetails';
import Qualificationdetails from './components/Registration/Qualificationdetails';
import Previousprojects from './components/Registration/Previousprojects'; // Import the Previousprojects component
import UserProfile from './components/Registration/UserProfile';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbaar /> {/* Include Navbaar if needed */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobseeker-login" element={<JobSeekerLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/employer-login" element={<EmployerLoginForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/personaldetails" element={<Personaldetails />} />
          <Route path="/qualificationdetails" element={<Qualificationdetails />} />
          <Route path="/previousprojects" element={<Previousprojects />} /> {/* New route for Previous Projects */}
          <Route path="/userprofile" element={<UserProfile />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
