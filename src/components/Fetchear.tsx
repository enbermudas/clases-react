import { useState } from "react";

interface Campeon {
  id: string;
  name: string;
  key: string;
}

export default function Fetchear() {
  const [campeones, setCampeones] = useState<Object|null>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getCampeones = async () => {
    setIsFetching(true);

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

  if (isFetching) {
    return (<h1>Buscando campeones...</h1>);
  }

  return (
    <>
      {!campeones && <button onClick={getCampeones}>Buscar campeones!</button>}

      {campeones && <ul>
        {(
          Object.keys(campeones).map((nombre) => {
            const campeon: Campeon = campeones[nombre];
            return <li key={campeon.key} id={campeon.id}>{campeon.name}</li>
          })
        )}
      </ul>}
    </>
  );
}
