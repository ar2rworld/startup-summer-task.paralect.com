import React from 'react'
const Repo =(props)=>{
  return(<div className="Repo">
    <a target="none" href={props.url}><h3>{props.name}</h3></a>
    <h4>{props.description}</h4>
  </div>)

}
export default Repo