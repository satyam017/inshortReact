import React from "react";
import '../Greet.css'
import { ReactPropTypes } from "react";
const Greet = ({name,age,city,alert,id}) => {
  console.log('key',id)
  const data= name
  return (
    <div className="mainClass" id={id} key={id}>
       <div className="card">
        <div className="cardImg">
          <img src="https://i.pravatar.cc/100"></img>
        </div>
        <div className="cardImfo">
          <div>Name:{name}</div> 
          <div>Age: {age}</div> 
          <div>City : {city}</div>
          <button onClick = {()=>alert(data)} >
            Click Me
          </button>
        </div>
       </div>
    </div>
  )
};
// Greet.prototype ={
//   name : ReactPropTypes.string,
//   age : ReactPropTypes.number,
//   city : ReactPropTypes.string,
// }
export default Greet;
