import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';
import Footer from '../Footer';

const responseFacebook = (response) => {
  console.log("Login Result", response);  
}

const componentClicked = (data) => {
  console.warn(data)
}

const SignUp = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration submission here
  };

  return (
    <>
      <div className="container mt-4 border p-3 rounded">
        <h1>Register with KYN</h1>
        <form onSubmit={handleSubmit} >
          
            
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control form-control-sm"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-control form-control-sm"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              className="form-control form-control-sm"
              id="contactNumber"
              type="text"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              className="form-control form-control-sm"
              id="address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              className="form-control form-control-sm"
              id="emailAddress"
              type="email"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control form-control-sm"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
            />
          </div><br></br><center>
                     <button className="btn btn-dark" type="submit">
            Register
          </button></center>
 
        </form>
      </div>

      <div className="container mt-4">
  <FacebookLogin
  
    className="btn-sm"
    appId="123767917119046"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
  />
</div>

          
        
        
  
        <Footer />
      </>
    );
  };
  
  export default SignUp;


