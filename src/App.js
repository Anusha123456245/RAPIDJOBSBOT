import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbaar from './components/Navbaar';
import HomePage from './components/HomePage/HomePage'; 
import JobSeekerLogin from './components/JobSeekerLogin/JobSeekerLogin';
import EmployerLoginForm from './components/EmployerLoginForm/EmployerLoginForm';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbaar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobseeker-login" element={<JobSeekerLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/employer-login" element={<EmployerLoginForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
       
      </div>
    </Router>
    
  );
}

export default App;
