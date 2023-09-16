import { createContext, useState } from "react";
import { useContext } from "react";

export const AppContext = createContext({});

export default function Clase8() {
  const [username] = useState<string>("Kike");


  return (
    <>
      <AppContext.Provider value={{ username }}>
        {/* Tiene accesso al contexto */}
        <Heading/>
      </AppContext.Provider>

      {/* Este no tiene acceso al contexto */}
      <Heading/>
    </>
  )
}

function Heading() {
  const appContext = useContext(AppContext);

  console.log(appContext);

  return <div>Heading</div>
}
