import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import InitialState from './components/InitialState'
import {useState, useEffect} from 'react'
import config from './config.json'
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: config['github-token'] });
function App() {
  const [username, setUsername] = useState("")
  const [init, setInit] = useState(true)
  const [profileStatus, setProfileStatus] = useState(1)
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState([])
  useEffect(()=>{

  })
  const setUsernameP=(e)=> new Promise((res, rej)=>{
    setUsername(e);
    res(e);
  })
  const handleUsername=(e)=>{
    setUsername(e)
    e=e.replace(/\s\//g, '')
    getUserRepos(e)
    getUser(e)

  }
  const getUserRepos=async (e)=>{
    console.log("started!")
    const response = await octokit.request("GET /users/" + e + "/repos", {})
    .then(e=>{
      console.log("Good request")
      setRepos(e.data)
    })
    .catch(e=>{
      console.log("Bad request")
    });
    /*
      org: "octokit",
      type: "private", */
    console.log(response)
  }
  const getUser=async (e)=>{
    console.log("startedGetUser!")
    const response = await octokit.request("GET /users/" + e , {})
    .then(e=>{
      console.log("Good request for user")
      setProfile(e.data)
      //console.log(e)
      setProfileStatus(1)
    })
    .catch(e=>{
      console.log("Bad request for user")
      setProfileStatus(0)
    });
    /*
      org: "octokit",
      type: "private", */
    //console.log(response)
  }
  return (
    <div className="App">
      <Header username={username} setInit={setInit} setUsername={handleUsername}/>
      <br/><br/><br/><br/>
      {(!init?
        (profileStatus?<Main profile={profile} repos={repos} username={username}/>
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
