const samplePokemon = [
    { id: 1, name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', stats: 'HP: 35, Attack: 55, Defense: 40', intro: 'An Electric-type Pokémon known for its speed and agility.' },
    { id: 2, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', stats: 'HP: 39, Attack: 52, Defense: 43', intro: 'A Fire-type Pokémon with a fierce flame at the tip of its tail.' },
    { id: 3, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', stats: 'HP: 44, Attack: 48, Defense: 65', intro: 'A Water-type Pokémon known for its protective shell.' },
    { id: 4, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', stats: 'HP: 45, Attack: 49, Defense: 49', intro: 'A Grass/Poison-type Pokémon with a plant bulb on its back.' },
    { id: 5, name: 'Eevee', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png', stats: 'HP: 55, Attack: 55, Defense: 50', intro: 'A Normal-type Pokémon known for its multiple evolution options.' },
    { id: 6, name: 'Jigglypuff', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', stats: 'HP: 115, Attack: 45, Defense: 20', intro: 'A Normal/Fairy-type known for its captivating singing.' },
    { id: 7, name: 'Meowth', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png', stats: 'HP: 40, Attack: 45, Defense: 35', intro: 'A mischievous Normal-type Pokémon often obsessed with coins.' },
    { id: 8, name: 'Psyduck', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png', stats: 'HP: 50, Attack: 52, Defense: 48', intro: 'A Water-type Pokémon that experiences frequent headaches.' },
    { id: 9, name: 'Snorlax', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', stats: 'HP: 160, Attack: 110, Defense: 65', intro: 'A massive Normal-type Pokémon famous for its enormous appetite.' },
    { id: 10, name: 'Gengar', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', stats: 'HP: 60, Attack: 65, Defense: 60', intro: 'A Ghost/Poison-type Pokémon known for its sinister grin.' },
    { id: 11, name: 'Alakazam', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png', stats: 'HP: 55, Attack: 50, Defense: 45', intro: 'A Psychic-type Pokémon with incredible intellect.' },
    { id: 12, name: 'Machop', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png', stats: 'HP: 70, Attack: 80, Defense: 50', intro: 'A Fighting-type Pokémon that loves training its muscles.' },
    { id: 13, name: 'Growlithe', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png', stats: 'HP: 55, Attack: 70, Defense: 45', intro: 'A loyal Fire-type Pokémon often used by police.' },
    { id: 14, name: 'Oddish', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png', stats: 'HP: 45, Attack: 50, Defense: 55', intro: 'A Grass/Poison-type Pokémon that grows by moonlight.' },
    { id: 15, name: 'Dratini', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png', stats: 'HP: 41, Attack: 64, Defense: 45', intro: 'A Dragon-type Pokémon that grows into a mighty serpent.' },
    { id: 16, name: 'Mew', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', stats: 'HP: 100, Attack: 100, Defense: 100', intro: 'A mythical Psychic-type Pokémon said to contain all genes.' }
  ];
  
  export default samplePokemon;
  