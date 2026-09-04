import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
const [userData, setUserData] = useState([])
const [index, setIndex] = useState(1)
  const getData= async()=> {
   
   const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
   
    setUserData(response.data);

  }

  useEffect(function(){
   getData()
  },[index])

  let printUserData=<h3 className='text-center text-gray-400 text-xs'>No user data available</h3> 
  if(userData.length>0){
printUserData=userData.map(function(elem,idx){
  return <a href={elem.url} target='_blank'>
    <div>
    <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
    <img className='h-full w-full object-cover' src={elem.download_url}></img>
  </div>
  <h2 className='font-bold'>{elem.author}</h2>
  </div>
  </a>
})
  }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      
      <div className='flex flex-wrap gap-4'>
       {printUserData}
      </div>

      <div className='flex justify-center gap-4 mt-4 p-4'>
        <button className="bg-amber-400 text-black rounded px-4 py-2 cursor-pointer active:scale-95 font-bold"
        onClick={()=>{setIndex(index-1)}}
        >Prev</button>
         <h3>page {index}</h3>
        <button className="bg-amber-400 text-black rounded px-4 py-2 cursor-pointer active:scale-95 font-bold"
        onClick={()=>{setIndex(index+1)}}
        >Next</button>
      </div>
    </div>
  )
}

export default App