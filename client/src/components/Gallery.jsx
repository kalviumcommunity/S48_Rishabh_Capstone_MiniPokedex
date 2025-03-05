import React, { useState } from 'react';
import './Gallery.css';

const samplePokemon = [
  { id: 1, name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', stats: 'HP: 35, Attack: 55, Defense: 40', intro: 'An Electric-type Pokémon known for its speed and agility.' },
  { id: 2, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', stats: 'HP: 39, Attack: 52, Defense: 43', intro: 'A Fire-type Pokémon with a fierce flame at the tip of its tail.' },
  { id: 3, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', stats: 'HP: 44, Attack: 48, Defense: 65', intro: 'A Water-type Pokémon known for its protective shell.' },
  { id: 4, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', stats: 'HP: 45, Attack: 49, Defense: 49', intro: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
  { id: 5, name: 'Eevee', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png', stats: 'HP: 55, Attack: 55, Defense: 50', intro: 'A Normal-type Pokémon known for its multiple evolution options.' },
  { id: 6, name: 'Jigglypuff', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', stats: 'HP: 115, Attack: 45, Defense: 20', intro: 'A Normal/Fairy-type known for its captivating singing.' },
  { id: 7, name: 'Meowth', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png', stats: 'HP: 40, Attack: 45, Defense: 35', intro: 'A mischievous Normal-type Pokémon.' },
  { id: 8, name: 'Psyduck', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', stats: 'HP: 50, Attack: 52, Defense: 48', intro: 'A Water-type Pokémon that is often confused.' },
  { id: 9, name: 'Snorlax', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', stats: 'HP: 160, Attack: 110, Defense: 65', intro: 'A massive Normal-type Pokémon known for its slumber.' }
];

const Gallery = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Pokémon Gallery</h2>
      <div className="gallery-grid">
        {samplePokemon.map((pokemon) => (
          <div key={pokemon.id} className="gallery-card" onClick={() => handleCardClick(pokemon)}>
            <img src={pokemon.image} alt={pokemon.name} className="gallery-image" />
            <h3 className="gallery-name">{pokemon.name}</h3>
          </div>
        ))}
      </div>
      
      {selectedPokemon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <img src={selectedPokemon.image} alt={selectedPokemon.name} className="modal-image" />
            <h2>{selectedPokemon.name}</h2>
            <p className="modal-stats">{selectedPokemon.stats}</p>
            <p className="modal-intro">{selectedPokemon.intro}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
