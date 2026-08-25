import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    
  return (
    <div className='h-full w-2/3 flex overflow-x-auto rounded-4xl flex-nowrap gap-10 p-4 '>
        {props.users.map(function(elem,idx){
  
            return<RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent