import React,{useState , useEffect} from 'react'
import useLocalStorage from '../customHooks/useLocalStorage'
function CounterNew() {
    const [name , setName] = useState({firstName:'',lastName:''})
    useLocalStorage('name' ,name.firstName )
    useLocalStorage('lastName', name.lastName)
  return (
    <div>
      <form>
        <input type='text' placeholder='first name' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' placeholder='last name' value={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})}/>
        <h2>Your First name is {name.firstName}</h2>
        <h2>Your Last Name is {name.lastName}</h2>
        
      </form>
    </div>
  )
}

export default CounterNew
