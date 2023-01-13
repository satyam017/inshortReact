import React from 'react'

function HocGreen(props) {
  return (
    <div>
        <h1 style={{backgroundColor:'red', minHeight:200, display:'flex',alignItems:'center',justifyContent:'center'}}><props.cmp/></h1>
    </div>
  )
}

export default HocGreen
