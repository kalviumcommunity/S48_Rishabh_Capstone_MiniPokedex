import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import AddPokemon from './components/AddPokemon';
import Gallery from './components/Gallery';
import './global.css';
import BattlePage from './components/BattlePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddPokemon />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
