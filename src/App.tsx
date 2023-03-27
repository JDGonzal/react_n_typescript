import { Counter } from "./components/Counter";
import { Users } from "./components/Users";
import { TimerMaster } from './components/TimerMaster';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h1>useState</h1>
      <Counter />
      <Users />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerMaster/>
    </>
  );
}

export default App;
