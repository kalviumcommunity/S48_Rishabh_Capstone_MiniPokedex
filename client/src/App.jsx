import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPokemon from './components/AddPokemon';
import Gallery from './components/Gallery';
import './components/global.css';


function App() {
  return (
    <Router>
      {/* Navbar with only Gallery and Add Pokémon links */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddPokemon />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
