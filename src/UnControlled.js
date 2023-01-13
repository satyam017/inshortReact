import React, {useState, useRef} from 'react'

function UnControlled() {
  const [name,setName] = useState({firstName:'' , lastName:''})
  const refName = useRef(null)
  const refLast = useRef(null)
  console.log(refName)
  function formSubmit(e){
    e.preventDefault();
    console.log('form Submit');
    setName({firstName: refName.current.value,lastName:refLast.current.value})
    // console.log('refName',refName.current.focus())
  }
  return (
    <div>
      <form>
        <input type='text' ref={refName} placeholder='first name'  />
        <input type='text' ref={refLast} placeholder='last name'  />
        <button onClick={formSubmit}>Submit</button>

        <h1>Name:{name.firstName}</h1>
        <h1>LastName:{name.lastName}</h1>
        </form>
    </div>
  )
}

export default UnControlled
