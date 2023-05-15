import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/login';
import RegistrationForm from './components/registration';
import Home from './components/home';
function App() {
  return (
   <>
 <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
