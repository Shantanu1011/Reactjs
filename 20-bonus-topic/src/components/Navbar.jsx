import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        if(props.Theme==="light")
        {props.setTheme("dark")}
        else
            props.setTheme("light")
    }
  return (
    <div>
        <button onClick={changeTheme}> change the theme</button>
    </div>
  )
}

export default Navbar