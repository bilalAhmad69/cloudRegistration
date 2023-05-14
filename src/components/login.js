import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email, password, age });
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '50rem',
    margin: '0 auto',
    justifyContent:'center',
    alignItems:'center',
    padding: '5px',
    paddingBottom:'10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyles = {
    width:'100%',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    display:'block'
  };

  const labelStyles = {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    textAlign:'center',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={formStyles}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyles}>Email:</label>
        <input
          type="email"
          style={inputStyles}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={labelStyles}>Password:</label>
        <input
          type="password"
          style={inputStyles}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style = {{display:"flex" , justifyContent:'center'}}>
        <button type="submit" style={buttonStyles}>
          Login
        </button>
        </div>
        <div>
        <Link to="/signup">Don't have an account? Sign up here!</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
