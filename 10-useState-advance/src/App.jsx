import React, { useState } from 'react'

const App = () => {
 
  const [num, setNum] = useState({user:'sarthak',age:20});
  const btnClick=()=>{
    const newNum={...num};
    newNum.user='shantanu';
    newNum.age=56;
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnClick}>click here</button>
    </div> 
  )
}

export default App