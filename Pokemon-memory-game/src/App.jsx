import { useState, useEffect, useCallback } from "react";
import "./App.css";

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

const pokemonObj = (name, img) => {
  return { name, img, hit: 0 };
};

const link = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemonObjContainer, setPokemonObjContainer] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

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
          return null;
        }
      });
      const result = await Promise.all(promises);
      setPokemonObjContainer(result.filter((pokemon) => pokemon !== null));
    };

    fetchPokemonData();
  }, []);

  // Shuffle function to randomize the Pokémon array
  const shuffle = useCallback(() => {
    setPokemonObjContainer((prevContainer) => {
      const newArray = [...prevContainer];
      for (let index = newArray.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [newArray[index], newArray[swapIndex]] = [
          newArray[swapIndex],
          newArray[index],
        ];
      }
      return newArray;
    });
  }, []);

  // Add pokemon's hit
  const updateHit = (index) => {
    pokemonObjContainer[index].hit++;
    if (pokemonObjContainer[index].hit < 2) {
      setScore((prev) => prev + 1);
      console.log("Score: " + score);
      shuffle();
    } else {
      if (score > maxScore) {
        setMaxScore(score);
      }
      setScore(0);
      pokemonObjContainer.map((pokemon) => {
        pokemon.hit = 0;
      });
    }
  };

  useEffect(() => {
    console.log("maxScore: " + maxScore);
  }, [maxScore]);
  return (
    <div className="App">
      <h1>Pokémon Memory Game</h1>
      <ul>
        {pokemonObjContainer.map((pokemon, index) => (
          <li
            key={index}
            className="cell"
            onClick={() => {
              updateHit(index);
            }}
          >
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
