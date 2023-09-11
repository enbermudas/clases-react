import axios from "axios";
import { useState, useEffect } from "react";

interface Character {
  id: number;
  name: string;
  episode: Array<string>;
  image: string;
}

export default function Clase5() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Función de fetching
  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );

      setCharacters(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar páginas
  const handleChangePage = (value: number) => {
    const nextPage = currentPage + value;
    setCurrentPage(nextPage);
  };

  // Cambiar de página
  useEffect(() => {
    if (currentPage === 1 && isLoading) return;
    fetchCharacters();
  }, [currentPage]);

  // Primera carga?
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div id="app">
      <div className="navbar">
        <button onClick={() => handleChangePage(-1)}>Página Anterior</button>
        <button onClick={() => handleChangePage(1)}>Página Siguiente</button>
      </div>

      {isLoading && <h1>Está cargando...</h1>}

      {!isLoading && (
        <div className="characters">
          {characters.length !== 0 &&
            characters.map((character) => {
              return (
                <div
                  className="character"
                  key={character.id}
                  style={{
                    background: `url(${character.image})`,
                  }}
                >
                  <div className="name">
                    {character.name} | Episodios: {character.episode.length}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

/**
 * R&M
 *
 * - (X) Al cargar, muestre la primera página de personajes
 * - (X) Cada personaje debe mostrar su imagen, el nombre y la cantidad de episodios en los que aparece
 * - (X) Tenga dos botones (prev, next) para cambiar de páginas
 * - (X) Al cambiar de página, debo actualizar la lista de personajes
 *
 * TAREITA:
 *
 * - El personaje debe tener un botón que, al hacer click en él, muestre un componente con más información (la que quieran)
 *   OPCIONALES
 * - Debe ocultarse al cambiar de página
 * - Se puede ocultar haciendo click en un botón dentro de él
 *
 * - Mostrar un botón que lleve a la última página
 * - Mostrar un botón que lleve a la primera página
 * - Definir limites para las páginas (no ir a 0 ni a 43) (deshabilitar los botones)
 * - Crear un componente "Character" para reutilizar el código
 * - El usuario NO DEBERÍA PODER clickear un botón durante la carga
 */
