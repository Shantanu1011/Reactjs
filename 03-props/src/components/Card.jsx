import React from 'react'

const  Card= (props) => {
  return (
    <div>
        <div className='card'>
        <img src={props.img} alt="Description" />
        <h1>{props.user}</h1>
        <p>{props.desc}</p>
        <button>Click Me</button>
      </div>
    </div>
  )
}

export default Card