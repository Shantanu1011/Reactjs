import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav2 = () => {
      const navigate=useNavigate();
  return (
    <div className='flex bg-gray-800 gap-4 p-4'>
         <button className='bg-emerald-500 hover:bg-yellow-400 active:scale-95  text-white font-bold py-2 px-4 rounded' 
        onClick={() => navigate('/')}>
            Return to home page
        </button>
        <button className='bg-emerald-500 hover:bg-yellow-400 active:scale-95 text-white font-bold py-2 px-4 rounded' 
        onClick={() => navigate(-1)}>
           back
        </button>
         <button className='bg-emerald-500 hover:bg-yellow-400 active:scale-95 text-white font-bold py-2 px-4 rounded' 
        onClick={() => navigate(+1)}>
           Next
        </button>
    </div>
  )
}

export default Nav2