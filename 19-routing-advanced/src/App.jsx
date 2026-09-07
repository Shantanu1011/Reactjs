import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route ,Routes} from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/product' element={<Product/>}>
      <Route path='mens' element={<Mens/>}/>
      <Route path='womens' element={<Womens/>}/>
      </Route>
      
      <Route path='*' element={<NotFound/>}/>


    </Routes>
      <Footer/>
    </div>
  )
}

export default App