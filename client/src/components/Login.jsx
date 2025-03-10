import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/gallery');
  };

  return (
    <div className="full-page-container">
      <div className="login-nav">
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>
      
      <div className="form-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
