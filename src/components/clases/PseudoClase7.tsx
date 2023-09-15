import { useReducer } from "react";

interface Action {
  field: ActionType;
  value: string;
}

interface State {
  username: string;
  email: string;
  password: string;
  address: string;
}

enum ActionType {
  "username", "email", "password", "address"
}

interface Field {
  id: ActionType;
  name: string;
  type: "text" | "email" | "password";
}

const initialState = {
  username: "",
  email: "",
  password: "",
  address: ""
};

/**
 * state: el estado ACTUAL de la aplicación
 * action: el cambio que se hará sobre el estado (action puede ser de cualquier tipo)
 *
 * DEBE retonar state SI O SI
 */
const reducer = (state: State, action: Action): State => {
  switch (action.field) {
    case ActionType.username:
      return {
        ...state,
        username: action.value
      }
    case ActionType.email:
      return {
        ...state,
        email: action.value
      }
    case ActionType.password:
      return {
        ...state,
        password: action.value
      }
    case ActionType.address:
      return {
        ...state,
        address: action.value
      }
    default:
      return state;
  }

  // Esto solo funciona en cambios simples y directos => llave: valor
  // return {
  //   ...state,
  //   [action.field]: action.value,
  // };
};

const fields: Array<Field> = [
  {
    id: ActionType.username,
    name: "username",
    type: "text",
  },
  {
    id: ActionType.email,
    name: "email",
    type: "email",
  },
  {
    id: ActionType.password,
    name: "password",
    type: "password",
  },
  {
    id: ActionType.address,
    name: "address",
    type: "text",
  }
];

export default function PseudoClase7() {
  /**
   * state: estado ACTUAL de la aplicación
   * dispatch: función para solicitar cambios en el estado // dispatch(action)
   *
   * reducer: función que cambia el estado
   * initialState: el estado INICIAL
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{JSON.stringify(state)}</div>
        {fields.map((field) => {
          return (
            <Input
              key={field.id}
              id={field.id}
              type={field.type}
              value={state[field.name as keyof typeof state]}
              handleDispatch={dispatch}
            />
          )
        })}
    </div>
  );
};

// ---------------------------------------- OTRO ARCHIVO

interface InputProps {
  id: ActionType;
  value: string;
  handleDispatch: (action: { field: ActionType, value: string }) => void;
  type: string;
}

function Input({ id, value, handleDispatch, type }: InputProps) {
  return (
    <input
      id={String(id)}
      type={type}
      value={value}
      onChange={(e) => handleDispatch({ field: id, value: e.target.value })}
    />
  );
}
