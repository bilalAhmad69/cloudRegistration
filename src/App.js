import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/login';
import RegistrationForm from './components/registration';
function App() {
  return (
   <>
 <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
