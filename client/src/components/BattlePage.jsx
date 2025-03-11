import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BattlePage.css';
import samplePokemon from './samplePokemon';

const BattlePage = () => {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [battleResult, setBattleResult] = useState(null);
  const [winner, setWinner] = useState(null);

  const calculatePower = (pokemon) => {
    const stats = pokemon.stats.split(', ').reduce((acc, stat) => {
      const [name, value] = stat.split(': ');
      acc[name] = parseInt(value);
      return acc;
    }, {});
    return stats.HP + stats.Attack + stats.Defense;
  };

  const simulateBattle = () => {
    if (!pokemon1 || !pokemon2) return;

    const p1Power = calculatePower(pokemon1);
    const p2Power = calculatePower(pokemon2);

    if (p1Power > p2Power) {
      setBattleResult(`${pokemon1.name} wins!`);
      setWinner(pokemon1);
    } else if (p2Power > p1Power) {
      setBattleResult(`${pokemon2.name} wins!`);
      setWinner(pokemon2);
    } else {
      setBattleResult("It's a tie!");
      setWinner(null);
    }
  };

  return (
    <div className="battle-page">
      <div className="battle-nav">
        <Link to="/" className="home-button">Home</Link>
      </div>
      <h2 className="battle-title">Pokémon Battle Arena</h2>
      
      <div className="battle-container">
        <div className="pokemon-selector">
          <select 
            onChange={(e) => setPokemon1(samplePokemon.find(p => p.id === parseInt(e.target.value)))}
            defaultValue=""
          >
            <option value="" disabled>Select Pokémon 1</option>
            {samplePokemon.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          
          {pokemon1 && (
            <div className="pokemon-card">
              <img src={pokemon1.image} alt={pokemon1.name} />
              <h3>{pokemon1.name}</h3>
              <p>{pokemon1.stats}</p>
            </div>
          )}
        </div>

        <div className="vs-circle">VS</div>

        <div className="pokemon-selector">
          <select 
            onChange={(e) => setPokemon2(samplePokemon.find(p => p.id === parseInt(e.target.value)))}
            defaultValue=""
          >
            <option value="" disabled>Select Pokémon 2</option>
            {samplePokemon.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          
          {pokemon2 && (
            <div className="pokemon-card">
              <img src={pokemon2.image} alt={pokemon2.name} />
              <h3>{pokemon2.name}</h3>
              <p>{pokemon2.stats}</p>
            </div>
          )}
        </div>
      </div>

      <button 
        className="battle-button"
        onClick={simulateBattle}
        disabled={!pokemon1 || !pokemon2}
      >
        Start Battle!
      </button>

      {battleResult && (
        <div className="battle-result">
          <h3>{battleResult}</h3>
          {pokemon1 && <p>{pokemon1.name} Power: {calculatePower(pokemon1)}</p>}
          {pokemon2 && <p>{pokemon2.name} Power: {calculatePower(pokemon2)}</p>}
          {winner && (
            <div className="winner-animation">
              <img src={winner.image} alt={winner.name} className="winner-image" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BattlePage;
