import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/add">Add Pokémon</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
