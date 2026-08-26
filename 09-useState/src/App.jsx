import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={()=>{setNum(num+1);}}>increase</button>
      <button onClick={()=>{setNum(num-1);}}>decrease</button>
      <h1>{num}</h1>
    </div>
  )
}

export default App