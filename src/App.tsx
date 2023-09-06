import { useState } from "react";

import NoMeDesmontes from "./components/NoMeDesmontes";

import "./App.css";

export default function App() {
  const [mostrar, setMostrar] = useState<boolean>(true);

  if (mostrar) {
    return (
      <>
        <button onClick={() => setMostrar(false)}>Cambiar</button>
        <NoMeDesmontes message="Miguelito"/>
      </>
      )
  } else {
    return (
      <>
        <button onClick={() => setMostrar(true)}>Cambiar</button>
        <NoMeDesmontes message="Kikito"/>
      </>
    )
  }
}
