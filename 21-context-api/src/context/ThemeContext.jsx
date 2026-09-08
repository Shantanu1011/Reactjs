import React from 'react'
import { createContext } from 'react'
 
export const PostdataContext= createContext()
const ThemeContext = (props) => {
  return (
    <div>
<PostdataContext.Provider value='shantanu'>
 {props.children}
</PostdataContext.Provider>
    </div>
  )
}

export default ThemeContext