import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// list of Pokemon names
const pokemons = [
  "charizard",
  "dragonite",
  "venusaur",
  "alakazam",
  "snorlax",
  "mewtwo",
  "raichu",
  "blastoise",
  "gengar",
  "arcanine",
];

// Function to create a Pokémon object with name, image, and hit points
const pokemonObj = (name, img, hit = 0) => {
  return { name, img, hit };
};

// Base URL for the Pokémon API
const link = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  // Container array that will hold Pokémon objects
  const [pokemonObjContainer, setPokemonObjContainer] = useState([]);

  // Create pokemon obj for each pokemon and store it in container array
  useEffect(() => {
    const fetchPokemonData = async () => {
      const promises = pokemons.map(async (pokemonName) => {
        try {
          const response = await fetch(`${link}${pokemonName}`);
          const data = await response.json();
          const pokemonId = data.id;
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
          return pokemonObj(pokemonName, imgUrl);
        } catch (err) {
          console.error(`Error fetching data for ${pokemonName}:`, err);
          return null; // Handle error by returning null
        }
      });
      const result = await Promise.all(promises);
      setPokemonObjContainer([...result]);
    };

    fetchPokemonData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Pokémon Memory Game</h1>
        <ul>
          {pokemonObjContainer.map((pokemon, index) => (
            <li key={index}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} alt={pokemon.name} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
