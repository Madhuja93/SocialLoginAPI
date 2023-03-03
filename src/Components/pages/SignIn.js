import React, { Component, useState } from 'react';
import '../../App.css';
import FacebookLogin from 'react-facebook-login';
import Footer from '../Footer';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const responseFacebook = (response) => {
  console.log("Login Result", response);
}

const componentClicked = (data) => {
  console.warn(data)
}

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle sign-in logic
  };

  return (
    <>
      <div className="container mt-4 border p-3 rounded">
      <h1>Sign In with KYN</h1>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            /><br></br>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="text-center my-4">
        <FacebookLogin
          appId="123767917119046"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          buttonClassName="btn btn-primary"
        />
      </div>
      <Footer />
    </>
  );
}

export default SignInPage;
