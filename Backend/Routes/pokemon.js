const express = require('express');
const router = express.Router();

// Sample data for demonstration purposes
const samplePokemon = [
  { id: 1, name: 'Pikachu', type: 'Electric', level: 25 },
  { id: 2, name: 'Charmander', type: 'Fire', level: 15 },
  { id: 3, name: 'Squirtle', type: 'Water', level: 12 },
  { id: 4, name: 'Bulbasaur', type: 'Grass/Poison', level: 14 },
  { id: 5, name: 'Eevee', type: 'Normal', level: 20 },
  { id: 6, name: 'Gyarados', type: 'Water/Flying', level: 30 },
  { id: 7, name: 'Jigglypuff', type: 'Normal/Fairy', level: 10 },
  { id: 8, name: 'Snorlax', type: 'Normal', level: 35 }
];

// GET endpoint to retrieve all Pokémon
router.get('/', (req, res) => {
  res.json(samplePokemon);
});

// POST endpoint to add a new Pokémon
router.post('/', (req, res) => {
  const newPokemon = req.body;

  // Validate that all required fields are provided
  if (!newPokemon.id || !newPokemon.name || !newPokemon.type || !newPokemon.level) {
    return res.status(400).json({ error: 'All fields are required: id, name, type, level' });
  }

  // Add the new Pokémon to the sample data array
  samplePokemon.push(newPokemon);

  res.status(201).json({ message: 'New Pokémon added', data: newPokemon });
});

module.exports = router;
