import React, {useState,useEffect} from 'react'
import Profile from './Profile'
import Repo from './Repo'
import Slider from './Slider'
import InitialState from './InitialState'
const Main=(props)=>{
  //Main logic
  const [repos, setRepos] = useState(props.repos)
  //const [sliceNumber, setSliceNumber] = [props.sliceNumber,props.setSliceNumber]
  const [slices, setSlices] = useState(Math.ceil(props.repos.length/4))
  //console.log(Math.ceil(props.repos.length))
  useEffect(()=>{

  })
  if(props.repos){
    //setRepos(props.repos?props.repos.map(i=><Repo name={i.name} description={i.description}/>):<Repo/>)
    //repos.map(i=><Repo name={i.name} description={i.description}/>)
    
  }
  console.log("repos: ")
  console.log(props.repos)
  console.log(typeof props.repos)
  return(<div>
    <Profile profileLoaded={props.profileLoaded} profile={props.profile} />
    {(props.reposLoaded?
      <div className="Repos">
        {(props.repos.length>0 && props.repos!==null?
          <div><h3 style={{textAlign:"left"}}>Repositories ({props.numberOfRepos})</h3>
          {props.repos//.slice((sliceNumber-1)*4, sliceNumber*4)
            .map(i=><Repo name={i.name} url={i.html_url} description={i.description}/>)}
          <Slider sliceNumber={props.sliceNumber} setSliceNumber={props.setSliceNumber} numberOfRepos={props.numberOfRepos}/></div>
          :
          <InitialState emoji="🗃" text="User has not repos😐"/>
        )}
      </div>
    :
    <div className="loader"></div>
    )}
    
  </div>)
}
export default Main