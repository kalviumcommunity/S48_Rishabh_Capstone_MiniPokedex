import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const samplePokemon = [
  { id: 1, name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', stats: 'HP: 35, Attack: 55, Defense: 40', intro: 'An Electric-type Pokémon known for its speed and agility.' },
  { id: 2, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', stats: 'HP: 39, Attack: 52, Defense: 43', intro: 'A Fire-type Pokémon with a fierce flame at the tip of its tail.' },
  { id: 3, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', stats: 'HP: 44, Attack: 48, Defense: 65', intro: 'A Water-type Pokémon known for its protective shell.' },
  { id: 4, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', stats: 'HP: 45, Attack: 49, Defense: 49', intro: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
  { id: 5, name: 'Vaporeon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png', stats: 'HP: 55, Attack: 55, Defense: 50', intro: 'A Normal-type Pokémon known for its multiple evolution options.' },
  { id: 6, name: 'Raquaza', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png', stats: 'HP: 115, Attack: 45, Defense: 20', intro: 'A Normal/Fairy-type known for its captivating singing.' },
  { id: 7, name: 'Glaceon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png', stats: 'HP: 40, Attack: 45, Defense: 35', intro: 'A mischievous Normal-type Pokémon often obsessed with coins.' },
  { id: 8, name: 'Zoroark', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png', stats: 'HP: 50, Attack: 52, Defense: 48', intro: 'A Water-type Pokémon that experiences frequent headaches.' },
  { id: 9, name: 'Snorlax', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', stats: 'HP: 160, Attack: 110, Defense: 65', intro: 'A massive Normal-type Pokémon famous for its enormous appetite.' },
  { id: 10, name: 'Gengar', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', stats: 'HP: 60, Attack: 65, Defense: 60', intro: 'A Ghost/Poison-type Pokémon known for its sinister grin.' },
  { id: 11, name: 'Alakazam', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png', stats: 'HP: 55, Attack: 50, Defense: 45', intro: 'A Psychic-type Pokémon with incredible intellect.' },
  { id: 12, name: 'Lucario', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png', stats: 'HP: 70, Attack: 80, Defense: 50', intro: 'A Fighting-type Pokémon that loves training its muscles.' },
  { id: 13, name: 'Arcanine', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png', stats: 'HP: 55, Attack: 70, Defense: 45', intro: 'A loyal Fire-type Pokémon often used by police.' },
  { id: 14, name: 'Zptos', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png', stats: 'HP: 45, Attack: 50, Defense: 55', intro: 'A Grass/Poison-type Pokémon that grows by moonlight.' },
  { id: 15, name: 'Mightyena', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png', stats: 'HP: 41, Attack: 64, Defense: 45', intro: 'A Dragon-type Pokémon that grows into a mighty serpent.' },
  { id: 16, name: 'Mew', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', stats: 'HP: 100, Attack: 100, Defense: 100', intro: 'A mythical Psychic-type Pokémon said to contain all genes.' },
  { id: 17, name: 'Umbreon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png', stats: 'HP: 45, Attack: 30, Defense: 35', intro: 'A Bug-type Pokémon that evolves into Butterfree.' },
  { id: 18, name: 'Moltres', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png', stats: 'HP: 40, Attack: 35, Defense: 30', intro: 'A Bug/Poison-type Pokémon that evolves into Beedrill.' },
  { id: 19, name: 'Blastoise', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', stats: 'HP: 40, Attack: 45, Defense: 40', intro: 'A Normal/Flying-type Pokémon known for its speed.' },
  { id: 20, name: 'Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', stats: 'HP: 30, Attack: 56, Defense: 35', intro: 'A Normal-type Pokémon that is quick and cunning.' },
  { id: 21, name: 'Zekrom', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png', stats: 'HP: 60, Attack: 55, Defense: 50', intro: 'A Bug/Poison-type Pokémon known for its fuzzy appearance.' },
  { id: 22, name: 'Ninetales', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png', stats: 'HP: 40, Attack: 50, Defense: 40', intro: 'A Water-type Pokémon that evolves into Poliwhirl.' },
  { id: 23, name: 'Articuno', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png', stats: 'HP: 25, Attack: 20, Defense: 15', intro: 'A Psychic-type Pokémon that sleeps most of the time.' },
  { id: 24, name: 'Machamp', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png', stats: 'HP: 80, Attack: 100, Defense: 70', intro: 'A Fighting-type Pokémon that is strong and determined.' }
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
    <div className="gallery-page">
      <div className="gallery-nav">
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>

      <h2 className="gallery-title">Pokémon Gallery</h2>
      <div className="gallery-grid">
        {samplePokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className="gallery-card"
            onClick={() => handleCardClick(pokemon)}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="gallery-image"
            />
            <h3 className="gallery-name">{pokemon.name}</h3>
          </div>
        ))}
      </div>

      {selectedPokemon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <img
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              className="modal-image"
            />
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