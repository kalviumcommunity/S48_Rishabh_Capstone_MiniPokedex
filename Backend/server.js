const express = require('express');
const cors = require('cors');
const app = express();
const pokemonRoutes = require('./Routes/pokemon.js');

app.use(cors());
app.use(express.json()); // This is necessary to parse JSON bodies

app.use('/api/pokemon', pokemonRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
