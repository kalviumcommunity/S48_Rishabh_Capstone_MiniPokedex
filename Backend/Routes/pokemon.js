// routes/pokemon.js
const express = require('express');
const router = express.Router();

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

module.exports = router;
