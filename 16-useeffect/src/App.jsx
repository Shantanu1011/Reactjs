import React, { useEffect, useState } from 'react'

const App = () => {
/*const [num, setnum] = useState(0)
const [num2, setnum2] = useState(100)
useEffect(function(){
 
console.log("use effect");
},[num])  
return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
 <button 
 onMouseEnter={()=>{ setnum(num+1);}}
onMouseLeave={()=>{ setnum2(num2+1);}}
 >Click me</button>
    </div>
  )*/
   
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    function aChanging(){
console.log('a ki value change');

    }
    function bChanging(){
console.log('b ki value change');

    }
    useEffect(function(){
      bChanging();
        console.log('use effect is running');
    },[b])
    return(
      <div>
        <h1> A is {a}</h1>
        <h1> B is {b}</h1>

<button onClick={()=>{ setA(a+1); }}>ChangwA</button>
<button onClick={()=>{ setB(b+1); }}>changeb</button>
      </div>
    )
}

export default App