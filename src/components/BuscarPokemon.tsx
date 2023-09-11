import { useState } from "react";

export default function BuscarPokemon() {
  const [pokemonID, setPokemonID] = useState<string>("");

  const handleSearch = async () => {
    if (pokemonID.trim() === "") return;

    try {
      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`
      );
      const json = await respuesta.json();
      console.log("Pokemon", json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pokeform">
      <h1>Actividad Opcional</h1>

      <input
        type="text"
        placeholder="Escribir un id"
        value={pokemonID}
        onChange={(e) => setPokemonID(e.target.value)}
        onClick={handleSearch}
      />

      <button onClick={handleSearch}>Buscar datos!</button>
    </div>
  );
}
