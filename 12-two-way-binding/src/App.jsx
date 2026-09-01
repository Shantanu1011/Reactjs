import React, { useState } from 'react'

const App = () => {
 
  const [title, setTitle] = React.useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Form Submitted", title);
    setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" placeholder="Enter your name" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App