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
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Nav2/>
    <Routes>
      //simple routing
      <Route path='/' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/courses' element={<Courses/>}/>
      //dynamic routing
      <Route path='/courses/:id' element={<CourseDetail/>}/>
      //nested routing
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