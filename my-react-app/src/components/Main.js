import React, {useState,useEffect} from 'react'
import Profile from './Profile'
import Repo from './Repo'
const Main=(props)=>{
  //Main logic
  const [repos, setRepos] = useState(props.repos)
  useEffect(()=>{

  })
  if(props.repos){
    //setRepos(props.repos?props.repos.map(i=><Repo name={i.name} description={i.description}/>):<Repo/>)
    //repos.map(i=><Repo name={i.name} description={i.description}/>)
  }
  return(<div>
    <Profile />
    {props.repos.map(i=><Repo name={i.name} description={i.description}/>)}
    
  </div>)
}
export default Main