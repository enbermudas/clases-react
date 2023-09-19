import axios from "axios";
import { useLoaderData } from "react-router-dom";

const fetchCharacters = async (page: string) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

interface LoaderParams {
  id: string;
}

export async function loaderClase9({ params }: { params: LoaderParams }) {
  const characters = await fetchCharacters(params.page);
  return { characters, params };
}

export default function Clase9() {
  const { characters, params} = useLoaderData();

  console.log("CHARACTERS", characters);
  console.log("PARAMS", params);

  return (
    <div id="clase9">Clase 9</div>
  );
}
