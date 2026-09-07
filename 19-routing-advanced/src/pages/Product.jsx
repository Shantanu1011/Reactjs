import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex gap-10 py-4 justify-center'>
            <Link to='/product/mens' className='hover:text-blue-500 text-xl font-medium'>Mens Clothing</Link>
            <Link to='/product/womens' className='hover:text-blue-500 text-xl font-medium'>Womens Clothing</Link>
<Outlet/>
        </div>
        
    </div>
  )
}

export default Product