import { useRef } from "react";

export default function Clase4() {
  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) return;

    const formData = new FormData(form);

    console.log(Object.fromEntries(formData));

    // validar
    // enviar
    // manejar respuesta
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input type="text" name="username" />
      </div>

      <div>
        <label htmlFor="email">Correo</label>
        <input type="email" name="email" />
      </div>

      <div>
        <label htmlFor="password">Contrasenia</label>
        <input type="password" name="password" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

/**
 * useRef
 *
 * - En algunos formularios
 * - Cuando quiero referenciar un elemento en el DOM y hacer algún tipo de manipulación
 * - Cuando una librería me dice que lo use
 */
