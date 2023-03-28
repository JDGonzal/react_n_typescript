import { Counter } from "./components/Counter";
import { Users } from "./components/Users";
import { TimerMaster } from "./components/TimerMaster";
import { CounterRed } from "./components/CounterRed";
import { Form } from './components/Form';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>customHooks</h2>
      <Form/>
      <hr />
      <h2>useReducer</h2>
      <CounterRed />
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerMaster />
      <hr />
      <h1>useState</h1>
      <Counter />
      <Users />
    </>
  );
}

export default App;
