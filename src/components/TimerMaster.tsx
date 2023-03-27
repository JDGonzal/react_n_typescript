import Timer from './Timer';
import { useState } from 'react';

export const TimerMaster = () => {
  const [milliSec, setMilliSec] = useState(1000);

  return (
    <div>
      <span>
        Milisegundos: {milliSec}
      </span>
      <br />
      <button className='btn btn-outline-success' 
      onClick={()=>setMilliSec(1000)}>
        1000
      </button>
      <button className='btn btn-outline-success'
      onClick={()=>setMilliSec(2000)}>
        2000
      </button>
      <Timer milliseconds={milliSec}/>
    </div>
  )
}
