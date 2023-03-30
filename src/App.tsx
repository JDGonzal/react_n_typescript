import { Counter } from "./components/Counter";
import { Users } from "./components/Users";
import { TimerMaster } from "./components/TimerMaster";
import { CounterRed } from "./components/CounterRed";
import { Form } from './components/Form';
import { Form2 } from './components/Form2';
import { Todo } from './todo/Todo';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Todo/>
      <hr />
      <h2>customHooks</h2>
      <Form/>
      <hr />
      <Form2/>
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
