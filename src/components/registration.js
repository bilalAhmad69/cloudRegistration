import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {db} from '../firebase'
import Error from './error'
import { doc, addDoc , getDoc, collection} from "firebase/firestore"; 
import Home from './home';
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [guardian, setGuardian] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [data, setData]= useState(null);
  const [error , setError] = useState(false);
  const usersRef = collection(db, 'users');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDocument = {
      name: name,
      id: id,
      password: password,
      grade: grade,
      guardian: guardian,
      phone: phone,
      dob: dob,
    };
    addDoc(usersRef, newDocument)
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
      const newDocRef = doc(usersRef, docRef.id);
      return getDoc(newDocRef);
    })
    .then(docSnap => {
       setData(docSnap.data())
    })
    .catch(error => {
      console.error('Error adding document: ', error);
      setError(true);
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
  if(error){
    <Error message = {"some thing went wrong"} />
  }
  if(data != null) {
    return <Home  data={data}/>
  }
  return (
    <div style={formStyles}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h1>
      <form onSubmit={handleSubmit}>
      <label style={labelStyles}>Student Id:</label>
        <input
          type="text"
          style={inputStyles}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label style={labelStyles}>Name:</label>
        <input
          type="text"
          style={inputStyles}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <label style={labelStyles}>Grade:</label>
        <input
          type="text"
          style={inputStyles}
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <label style={labelStyles}>Password:</label>
        <input
          type="password"
          style={inputStyles}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label style={labelStyles}>DOB:</label>
        <input
          type="text"
          style={inputStyles}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
         <label style={labelStyles}>Guardian:</label>
        <input
          type="text"
          style={inputStyles}
          value={guardian}
          onChange={(e) => setGuardian(e.target.value)}
        />
         <label style={labelStyles}>Phone Number:</label>
        <input
          type="text"
          style={inputStyles}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        
        <div style = {{display:"flex" , justifyContent:'center'}}>
        <button type="submit" style={buttonStyles}>
          Register
        </button>
        </div>
        <div>
        <Link to="/">Already have an account? Sign in here!</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
