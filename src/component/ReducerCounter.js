import React, {useState,useReducer} from 'react'

function reducer(state,action){
    console.log(action);
    switch(action.type){
        case 'increment':
            return {count : state.count +1}
            case 'decrement':
            return {count: state.count -1}
            default :
            return state
    }
}

function ReducerCounter() {
    const [state,dispatch] = useReducer(reducer,{count : 0});
    const increment = ()=>{
        // setCount(prevVal => prevVal +1)
        dispatch({type : 'increment'})
    }
    const decrement = ()=>{
        dispatch({type: 'decrement'})
        // setCount(prevVal => {
         
        //         return   prevVal -1
        // })
    }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <button className='decrement' onClick={decrement}>Decrement</button>
      <div style={{margin:'20px'}}>{state.count}</div>
      <button  onClick={increment}>Increment</button>
    </div>
  )
}

export default ReducerCounter
