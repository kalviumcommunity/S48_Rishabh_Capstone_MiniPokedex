import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* New left navigation button for Gallery */}
      <div className="nav-left">
        <Link to="/gallery">
          <button className="home-button">Gallery</button>
        </Link>
      </div>
      {/* Existing right navigation for Sign Up and Login */}
      <div className="nav-right">
        <Link to="/signup">
          <button className="home-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
      </div>
      
      <h1>Welcome to Pokémon Battle!</h1>
      <p className="subtitle">
        The Mini Pokedex project aims to create an engaging platform for Pokémon enthusiasts <br /> 
        to explore and manage Pokémon data and simulate epic battles!
      </p>

      <div className="sticker-container">
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
          alt="Pikachu" 
          className="pokemon-sticker" 
        />
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
          alt="Bulbasaur" 
          className="pokemon-sticker" 
        />
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" 
          alt="Charmander" 
          className="pokemon-sticker" 
        />
      </div>

      <p className="description">
        Choose your Pokémon, form your team, and challenge trainers around the world. 
        Discover rare Pokémon, track your progress, and become the ultimate Pokémon Master!
      </p>

      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png" 
        alt="Articuno" 
        className="legendary-left"
      />
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" 
        alt="Mewtwo" 
        className="legendary-right"
      />
    </div>
  );
};

export default HomePage;
