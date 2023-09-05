import { useState } from "react";

import Navbar from "../Navbar";
import Button from "../Button";

// Base de datos de mentiritas

const usuarios = [
  {
    id: 1,
    username: "enbermudas"
  },
  {
    id: 2,
    username: "miguelito"
  },
  {
    id: 3,
    username: "leizer"
  },
  {
    id: 4,
    username: "macoix"
  }
];

// Componentes

export default function Clase1() {
  // [nombreDelEstado, setNombreDelEstado]
  // Se hace así por convención (para que otro programador entienda lo que está viendo)
  const [username, setUsername] = useState<string>("kakarotinho");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  // Los componentes de React (funciones) deben retonar código JSX válido (leer README)
  return (
    <>
      <Navbar id={1} username={username} />

      {/* Renderizado de listas */}
      <ul>
        {
          usuarios.map((user) => {
            return (
              // El componente padre debe tener un campo key obligatorio
              <li key={user.id}>{user.username}</li>
            )
          })
        }
      </ul>

      {/* Reutiliza código: puedo colocar n cantidad de Button en cualquier componente */}
      <Button id="button-1">Kike</Button>

      <Button id="button-2">{"KiKiKiTo".toLowerCase()}</Button>

      {/* Manejar eventos en componentes */}
      <input type="text" onChange={handleOnChange} />
    </>
  )
}
