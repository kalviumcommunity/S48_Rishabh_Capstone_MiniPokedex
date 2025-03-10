import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="full-page-container">
      <div className="signup-nav">
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>
      
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;