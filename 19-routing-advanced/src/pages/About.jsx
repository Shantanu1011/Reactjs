import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
     const navigate=useNavigate();
    
       
        
    
  return (
    <div>
        <button className='bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
        onClick={() => navigate('/')}>
            Return to home page
        </button>
        <button className='bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
        onClick={() => navigate(-1)}>
           back
        </button>
            <h1>About</h1>
    </div>
  )
}

export default About