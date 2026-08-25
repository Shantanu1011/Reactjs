import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users=[
    { img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'', 
      tag:'Satiesfied'
    },
    { img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'', 
      tag:'Underserved'
    },
    { img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'', 
      tag:'UnderBanked'
    }
  ]
  return (
    <div >
      <Section1 users={users}/>
      
    </div>

  )
}

export default App