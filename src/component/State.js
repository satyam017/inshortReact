import React, {useState, useContext} from 'react'
import {UserContext} from '../App'
import App from '../App'
// import { SatyamContext } from '../context/SatyamContext'

function State() {
  let intailCount = 0
  const [count,setCount] = useState(intailCount)

  // const satyam = useContext(SatyamContext)
 useContext(UserContext);


  return (
    <div>
      <UserContext.Consumer>
      {
        (user) =>{
          return <h1 >{user}</h1> 
          // console.log(user);
        }
      }
      </UserContext.Consumer>
      <h2>Count : {count}</h2>
      <button onClick={()=>setCount(nextCount => nextCount+1) }>Increment</button>
      <button onClick={()=> setCount(prevCount => prevCount-1)}>Decrement</button>
      <button onClick={()=>setCount(intailCount)}>Reset</button>
    </div>
  )
}

export default State
