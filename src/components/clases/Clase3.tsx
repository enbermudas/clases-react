import { useEffect, useState } from "react";

interface Campeon {
  id: string;
  name: string;
  key: string;
}

export default function Clase3() {
  const [campeones, setCampeones] = useState<Object|null>();
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const getCampeones = async () => {
      try {
        const respuesta = await fetch("https://ddragon.leagueoflegends.com/cdn/13.17.1/data/es_MX/champion.json");
        const json = await respuesta.json();
        setCampeones(json.data);
      } catch (e) {
        console.log("Error:", e);
      } finally {
        console.log("Finalmente");
        setIsFetching(false); // Ya buscó la data
      }
    };

    getCampeones();
  }, []);

  // Si está cargando, retorno un loader
  if (isFetching) {
    return (<h1>Buscando campeones...</h1>);
  }

  return (
    <ul>
      {campeones ? (
        Object.keys(campeones).map((nombre) => {
          const campeon: Campeon = campeones[nombre];
          return <li key={campeon.key} id={campeon.id}>{campeon.name}</li>
        })
      ) : (
        <div>No hay campeones</div>
      )}
    </ul>
  );
}

/**
 * useEffect(callback, dependencias)
 *
 * callback: es una función a la que va a llamar cuando detecte un cambio
 * dependencias: es un arreglo con todos los estados que debe vigilar y sus dependencias
 *
 * - Configuración inicial
 * - Detectar cambios en el estado
 * - Manejar ciclos de vida
 * - Ejecutar llamados a una API
 *
 */
