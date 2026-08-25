import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  console.log(props.id)
  return (
    
    <div className='h-full shrink-0 w-80 bg-red-500 overflow-hidden relative rounded-4xl'>
        <img src={props.img} alt="Description" className='h-full w-full object-cover rounded-4xl' />
        <RightCardContent id={props.id} tag={props.tag} />
    </div>
    
  )
}

export default RightCard