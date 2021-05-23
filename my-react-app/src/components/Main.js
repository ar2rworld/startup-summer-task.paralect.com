import React, {useState,useEffect} from 'react'
import Profile from './Profile'
import Repo from './Repo'
import Slider from './Slider'
import InitialState from './InitialState'
const Main=(props)=>{
  //Main logic
  const [repos, setRepos] = useState(props.repos)
  const [sliceNumber, setSliceNumber] = useState(1)
  const [slices, setSlices] = useState(Math.ceil(props.repos.length/4))
  //console.log(Math.ceil(props.repos.length))
  useEffect(()=>{

  })
  if(props.repos){
    //setRepos(props.repos?props.repos.map(i=><Repo name={i.name} description={i.description}/>):<Repo/>)
    //repos.map(i=><Repo name={i.name} description={i.description}/>)
  }
  return(<div>
    <Profile profileLoaded={props.profileLoaded} profile={props.profile} />
    {(props.reposLoaded?
      <div className="Repos">
        {(props.repos.length!==0?
          <div><h3 style={{textAlign:"left"}}>Repositories ({props.repos.length})</h3>
          {(props.repos?props.repos.slice((sliceNumber-1)*4, sliceNumber*4)
            .map(i=><Repo name={i.name} url={i.html_url} description={i.description}/>)
            :"")}
          <Slider sliceNumber={sliceNumber} setSliceNumber={setSliceNumber} numberOfRepos={props.repos.length}/></div>
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