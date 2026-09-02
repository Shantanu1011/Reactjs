import React from 'react'

const App = () => {
  localStorage.setItem('user', 'Shantanu')
  console.log(localStorage.getItem('user')  );
  localStorage.removeItem('user')

  const user={
    username:"shantanu",
    age:23,
    city:"pune"

  }
  localStorage.setItem('user',JSON.stringify(user))
console.log(localStorage.getItem('user')  );// return items in string formst
 const user1=JSON.parse(localStorage.getItem('user'));
console.log(localStorage.getItem('user1')  );// return string in object format
   
  return (
    <div>App</div>
  )
}

export default App