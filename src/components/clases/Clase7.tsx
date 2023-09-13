import { useEffect, useReducer } from "react";

interface State {
  password: string;
  passwordError: boolean;
}

interface Action {
  type: string; // qué parte del estado debo modificar?
  value: string | boolean;
}

const initialState: State = {
  password: "",
  passwordError: false,
};

const actionTypes = {
  password: "password",
  passwordError: "passwordError",
};

// esta función es llamada por dispatch(action)
// react le pasa el state automáticamente
// debe retornar SI O SI el state (modificado o no)
const reducer = (state: State, action: Action) => {
  return {
    ...state,
    [action.type]: action.value,
  };
};

export default function Clase7() {
  // [estado, funcionParaSolicitarUnCambio] = (funcionParaCambiarElEstado, EstadoInicial)
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value: string, fieldName: string) => {
    if (fieldName === actionTypes.password) {
      const isValid = /^\d+$/.test(value);
      dispatch({ type: actionTypes.passwordError, value: !isValid }); // despachando error (mostrar u ocultar)
    }

    // dispatch(action)
    dispatch({ type: fieldName, value });
  };

  useEffect(() => {
    console.log("Password", state.password);
  }, [state.password]);

  return (
    <div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) => handleChange(e.target.value, actionTypes.password)}
        />

        {state.passwordError && (
          <span>La contraseña solo puede tener números.</span>
        )}
      </div>
    </div>
  );
}
