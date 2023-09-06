import { useState } from "react";

import Input from "../Input";

import "./Clase2.css";

export default function Clase2() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    // Previene el comportamiento por defecto del SUBMIT en un form
    e.preventDefault();

    console.log("SUBMIT", username, email, password, address);
    // Validas los campos
    // Te comunicas con la base de datos
    // Esperas la respuesta de la base de datos
    // Le das un feedback al usuario
    // ????
    // Profit
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Usuario"
        identificador="username"
        value={username}
        manejarCambio={setUsername}
      />

      <Input
        label="Correo"
        identificador="email"
        value={email}
        manejarCambio={setEmail} type="email"
      />

      <Input
        label="Contraseña"
        identificador="password"
        value={password}
        manejarCambio={setPassword} type="password"
      />

      <Input
        label="Dirección"
        identificador="address"
        value={address}
        manejarCambio={setAddress}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}
