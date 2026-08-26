import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked')
  }
  function enter(){
    console.log('Mouse enter')
  }
  return (
    <div>
      <button onMouseEnter={enter} onClick={btnClicked}>click here</button>
<br></br>
      <button onClick={()=>{console.log('function is declare under tag')}}>function declare under tag</button>
    <br></br>
      <input onChange={function(elem){console.log(elem);}} type='text' placeholder='enter name'></input>
    <br></br>
    <input onChange={function(){console.log("user is typing");}} type='text' placeholder='enter name'></input>
    <br></br>
    <input onChange={function(elem){console.log(elem.target.value);}} type='text' placeholder='enter name'></input>

    </div>
  )
}

export default App