import React from 'react'

function Hoc(props) {
    
  return (
    <div>
      <h1 style={{backgroundColor:'green', minHeight:200, display:'flex',alignItems:'center',justifyContent:'center'}}><props.cmp/></h1>
    </div>
  )
}

export default Hoc
