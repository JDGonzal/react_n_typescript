import { useReducer } from "react";

//Inital Status, it will not modify this one
const initialState = {
  contador: 0,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

//To modify I'll use a reducer as a function
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  // The reducer must no change status, not save in local storage.

  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "custom":
      return {
        ...state,
        contador: action.payload,
      };
    default:
      return state;
  }
};

export const CounterRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <div>
      <h2>Contador: {contadorState.contador}</h2>
      <button
        className="btn btn-outline-info"
        onClick={() => {
          dispatch({ type: "incrementar" });
        }}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          dispatch({ type: "decrementar" });
        }}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          dispatch({ type: "custom", payload: 100 });
        }}
      >
        100
      </button>
    </div>
  );
};
