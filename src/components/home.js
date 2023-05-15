import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

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
    marginBottom: '15px',
    fontWeight: 'bold',
    fontSize: '16px',
    display:'block'
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
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Details</h1>
      <form >
    
      <label style={labelStyles}>Student Id:    10001</label>
        <label style={labelStyles}>Name:    Bilal Ahmad</label>
          <label style={labelStyles}>Grade:  10th</label>
        <label style={labelStyles}>DOB:   19-09-09</label>
         <label style={labelStyles}>Guardian:  Bilal</label>
         <label style={labelStyles}>Phone Number:   01290393</label>
      </form>
    </div>
  );
};

export default Home;
