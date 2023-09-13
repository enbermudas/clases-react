import { useEffect, useReducer } from "react";

interface State {
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  password: string;
  age: number;
}

interface Action {
  type: string; // qué parte del estado debo modificar?
  value: string;
}

const initialState: State = {
  firstName: "",
  lastName: "",
  fullName: "",
  username: "",
  email: "",
  password: "",
  age: 0,
};

const actionTypes = {
  firstName: "firstName",
  lastName: "lastName",
  fullName: "fullName",
  age: "age",
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

export default function Clase6() {
  // [estado, funcionParaSolicitarUnCambio] = (funcionParaCambiarElEstado, EstadoInicial)
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value: string, fieldName: string) => {
    // dispatch(action)
    dispatch({ type: fieldName, value });
  };

  useEffect(() => {
    dispatch({
      type: actionTypes.fullName,
      value: `${state.firstName} ${state.lastName}`,
    });
  }, [state.firstName, state.lastName]);

  return (
    <div>
      <div>
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          id="firstName"
          value={state.firstName}
          onChange={(e) => handleChange(e.target.value, actionTypes.firstName)}
        />
        <span>El nombre es: {state.firstName}</span>
      </div>

      <div>
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          id="lastName"
          value={state.lastName}
          onChange={(e) => handleChange(e.target.value, actionTypes.lastName)}
        />
        <span>El apellido es: {state.lastName}</span>
      </div>

      <span>El nombre completo es {state.fullName}</span>

      <div>
        <label htmlFor="age">Edad</label>
        <input
          type="text"
          id="age"
          value={state.age}
          onChange={(e) => handleChange(e.target.value, actionTypes.age)}
        />
        <span>La edad es: {state.age}</span>
      </div>
    </div>
  );
}
