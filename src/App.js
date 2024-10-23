
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbaar from './components/Navbaar';
import JobSeekerLogin from './components/JobSeekerLogin/JobSeekerLogin';
import SignUpForm from './components/SignUpForm';
import EmployerLoginForm from './components/EmployerLoginForm/EmployerLoginForm';



function App() {
  return (
    <Router>
      <div className="App">
     <Navbaar/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<JobSeekerLogin />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/employer-login" element={<EmployerLoginForm />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App;
