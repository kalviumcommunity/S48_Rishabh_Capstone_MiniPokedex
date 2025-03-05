import React from 'react';
import { Link } from 'react-router-dom';
import './AddPokemon.css';

const AddPokemon = () => {
  return (
    <div className="full-page-container">
      <div className="form-container">
        <h2>Add New Pokémon</h2>
        <form>
          <input type="text" placeholder="Pokémon Name" required />
          <input type="text" placeholder="Type" required />
          <input type="number" placeholder="Level" required />
          <input type="text" placeholder="Image URL" required />
          <button type="submit">Add Pokémon</button>
        </form>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default AddPokemon;
