import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import {useState, useEffect} from 'react'
import config from './config.json'
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: config['github-token'] });
function App() {
  const [username, setUsername] = useState("")
  const [status, setStatus] = useState(0)
  const [repos, setRepos] = useState([])
  useEffect(()=>{

  })
  const setUsernameP=(e)=> new Promise((res, rej)=>{
    setUsername(e);
    res(e);
  })
  const handleUsernameChange=(e)=>{
    setUsername(e)
    e=e.replace(/\s\//g, '')
    if(e.length>1)
      getUserRepos(e)
  }
  const getUserRepos=async (e)=>{
    console.log("started!")
    const response = await octokit.request("GET /users/" + e + "/repos", {})
    .then(e=>{
      console.log("Good request")
      setStatus(1)
      setRepos(e.data)
    })
    .catch(e=>{
      console.log("Bad request")
      setStatus(0)
    });
    /*
      org: "octokit",
      type: "private", */
    console.log(response)
  }
  return (
    <div className="App">
      <Header username={username} setUsername={handleUsernameChange}/>
      <br/><br/><br/><br/>
      <Main repos={repos} username={username}/>
    </div>
  );
}

export default App;
