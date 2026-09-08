import React, { useState } from 'react'
import Navbar from './components/Navbar'

export const App = () => {
    const [Theme, setTheme] = useState("light")
  return (
    <div>
<h1> theme is {Theme}</h1>
<Navbar Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}
export default App