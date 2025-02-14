import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Pokémon Battle!</h1>
      <p>Choose your Pokémon and engage in epic battles!</p>
      <div className="button-container">
        <Link to="/signup">
          <button className="home-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
