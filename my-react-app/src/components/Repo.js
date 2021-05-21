import React from 'react'
const Repo =(props)=>{
  return(<div style={{display:"block", border:"1px solid blue",minHeight:"30px", minWidth:"50%", margin:"2%"}}>
    <h3>{props.name}</h3>
    <h4>{props.description}</h4>
  </div>)

}
export default Repo