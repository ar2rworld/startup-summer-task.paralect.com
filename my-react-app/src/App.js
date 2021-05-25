import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import InitialState from './components/InitialState'
import {useState} from 'react'
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.TOKEN });
function App() {
  document.title="startup-summer-task.paralect.com"
  const [username, setUsername] = useState("")
  const [init, setInit] = useState(true)
  const [profileStatus, setProfileStatus] = useState(1)
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState([])
  const [profileLoaded, setProfileLoaded] = useState(false)
  const [reposLoaded, setReposLoaded] = useState(false)
  const [sliceNumber, setSliceNumber] = useState(1)
  const [numberOfRepos, setNumberOfRepos]=useState(0)
  const handleUsername=(e)=>{
    console.log("before: " + e)
    e=e.replace(/\s\//g, "")
    console.log("after: " + e)
    setUsername(e)
    getUserRepos(e, sliceNumber)
    getUser(e)
  }
  const getUserRepos=async (e, page)=>{
    setReposLoaded(false)
    console.log("started!")
    await octokit.request("GET /users/" + e + "/repos", {"page":page, "per_page":"4"})
    .then(r=>{
      console.log("Good request")
      setRepos(r.data)
      setReposLoaded(true)
    })
    .catch(r=>{
      console.log("Bad request")
    });
  }
  const getUser=async (e)=>{
    setProfileLoaded(false)
    console.log("startedGetUser!")
    await octokit.request("GET /users/" + e , {})
    .then(r=>{
      console.log("Good request for user")
      setProfile(r.data)
      setProfileLoaded(true)
      setNumberOfRepos(r.data.public_repos)
      //console.log(r)
      setProfileStatus(1)
    })
    .catch(r=>{
      console.log("Bad request for user")
      setProfileStatus(0)
    });
  }
  return (
    <div className="App" style={{
      fontSize:(window.innerWidth<=500?"3vw":"1.5vw")
    }}>
      <Header username={username} setInit={setInit} setUsername={handleUsername}/>
      <div style={{height:"60px", display:"block"}}></div>
      
      {(!init?
        (profileStatus?<Main reposLoaded={reposLoaded} profileLoaded={profileLoaded}
          profile={profile} repos={repos} username={username} numberOfRepos={numberOfRepos}
          sliceNumber={sliceNumber} setSliceNumber={setSliceNumber}/>
          :
          <InitialState text="Oh dear, now you have a chance to register a new GitHub user as there is non exist"
            emoji="❌"/>
        )
        :
        <InitialState text="This is an initial state, so you can start searching a github user(if i didn't mess something up)"
          emoji="🔍"/>
      )}
    </div>
  );
}

export default App;
