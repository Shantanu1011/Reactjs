import React, { useState } from 'react'
 import { X } from 'lucide-react'
const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
   
    setTitle("");
    setDetails("");
    
  }
  const deleteNote=(idx)=>{

const copyTask=[...task]
copyTask.splice(idx,1)
setTask(copyTask)

  }
 

  return (
    <div className='bg-black lg:flex text-white h-screen'>
      <form className=' p-10 items-start gap-4 flex-col items-start lg:w-1/2  flex' onSubmit={submitHandler}>
       <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input type="text"
          className='px-5 w-full py-2 border-2 rounded outline-none'
          placeholder="Enter notes heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)} required/>

        <textarea
          className='px-5 py-2 w-full flex  h-30 border-2 rounded outline-none'
          placeholder="Enter notes description" 
          value={details}
          onChange={(e) => setDetails(e.target.value)} required />

        <button className='bg-white w-full  text-black px-5 py-2 rounded outline-none'>Add Notes</button>

      </form>
      <div className=' gap-3 lg:border-l-2 bg-gray-800 lg:w-1/2   p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex gap-2 flex-wrap overflow-y-auto h-96'>
         
          {task.map(function(elem ,idx){
            return  <div key={idx} className='relative h-52 w-40 rounded-2xl bg-white text-black p-5 m-5
            bg-[url("https://cdn.imgbin.com/15/16/17/imgbin-post-it-note-paper-writing-notebook-frog-on-lily-pad-Gsfyp56TwS27kxBXDVB11vggb.jpg")]  bg-center bg-no-repeat'>
              
              <h2 onClick={()=>{deleteNote(idx)}} className='cursor-pointer active:scale-95 absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs'><X /></h2>
              
              <h2 className=' leading-text text-xl font-bold'>{elem.title}</h2>
              <p className='m-4 leading.tight font-medium text-gray-500'>{elem.details}</p>
            </div>
          
          }
          )}
        </div>
      </div>

    </div>
  )
}

export default App