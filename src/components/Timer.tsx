import { useEffect, useRef, useState } from 'react';

type TimerArgs = { milliseconds: number};

export default function Timer({milliseconds}: TimerArgs) {

  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log(milliseconds);
    setSegundos(0);
    ref.current && clearInterval(ref.current);
    ref.current=setInterval(()=> setSegundos(s => s+1), milliseconds);

  }, [milliseconds])
  
  return (
    <>
    <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
