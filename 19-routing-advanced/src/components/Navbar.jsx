import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-800 text-white'>
        <h2 className='text-2xl font-bold'>Shantanu</h2>
        <div className='flex gap-10 '>
            <Link to='/' className='hover:text-blue-500 text-lg font-medium'>Home</Link>
            <Link to='/about' className='hover:text-blue-500 text-lg font-medium'>About</Link>
            <Link to='/product' className='hover:text-blue-500 text-lg font-medium'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar