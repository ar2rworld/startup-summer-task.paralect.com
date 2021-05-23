import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import InitialState from './components/InitialState'
import {useState} from 'react'
import config from './config.json'
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: config['github-token'] });
function App() {
  const [username, setUsername] = useState("")
  const [init, setInit] = useState(true)
  const [profileStatus, setProfileStatus] = useState(1)
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState([])
  const [profileLoaded, setProfileLoaded] = useState(false)
  const [reposLoaded, setReposLoaded] = useState(false)
  const handleUsername=(e)=>{
    setUsername(e)
    e=e.replace(/\s\//g, '')
    getUserRepos(e)
    getUser(e)

  }
  const getUserRepos=async (e)=>{
    setReposLoaded(false)
    console.log("started!")
    const response = await octokit.request("GET /users/" + e + "/repos", {})
    .then(e=>{
      console.log("Good request")
      setRepos(e.data)
      setReposLoaded(true)
    })
    .catch(e=>{
      console.log("Bad request")
    });
    console.log(response)
  }
  const getUser=async (e)=>{
    setProfileLoaded(false)
    console.log("startedGetUser!")
    await octokit.request("GET /users/" + e , {})
    .then(e=>{
      console.log("Good request for user")
      setProfile(e.data)
      setProfileLoaded(true)
      //console.log(e)
      setProfileStatus(1)
    })
    .catch(e=>{
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
        (profileStatus?<Main reposLoaded={reposLoaded} profileLoaded={profileLoaded} profile={profile} repos={repos} username={username}/>
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
