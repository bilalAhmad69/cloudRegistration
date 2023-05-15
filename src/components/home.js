import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Home = ({data}) => {
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
      <label style={labelStyles}>Student Id:    {data.id}</label>
        <label style={labelStyles}>Name:    {data.name}</label>
          <label style={labelStyles}>Grade:  {data.grade}</label>
        <label style={labelStyles}>DOB:   {data.dob}</label>
         <label style={labelStyles}>Guardian: {data.guardian}</label>
         <label style={labelStyles}>Phone Number:   {data.phone}</label>
         <div> <Link to="/" >Logout</Link></div>
    </div>
  );
};

export default Home;
