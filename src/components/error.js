import React from 'react';

const Error = ({message}) => {
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '50rem',
    margin: '0 auto',
    justifyContent:'center',
    alignItems:'center',
    padding: '40px',
    background:"red",
    paddingBottom:'10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };


  const labelStyles = {
    marginBottom: '15px',
    fontWeight: 'bold',
    fontSize: '16px',
    display:'block'
  };
  return (
    <div style={formStyles}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Details</h1>
      <label style={labelStyles}>{message}</label>
    </div>
  );
};

export default Error;
