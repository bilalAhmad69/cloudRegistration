import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {db} from '../firebase'
import { getDocs , collection , where , query} from "firebase/firestore"; 
import Home from './home';
import Error from './error'
const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [data , setData] = useState(null)
  const userRef = collection(db, 'users');
  const [error , setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query(userRef, where('id', '==', id), where('password', '==', password));
getDocs(q)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
     setData(doc.data());
    });
  })
  .catch((error) => {
    setError(true);
    console.log("Error getting documents: ", error);
  });
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
  if(error) {
   return <Error message={"password or id is wrong"}/>
  }
   if(data != null){
    return <Home  data = {data}/>
   }
  return (
    <div style={formStyles}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyles}>Student Id:</label>
        <input
          type="text"
          style={inputStyles}
          value={id}
          onChange={(e) => setId(e.target.value)}
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
