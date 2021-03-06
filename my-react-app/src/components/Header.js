import React, {useState} from 'react'
const Header =(props)=>{
  const [username, setUsername] = useState("")
  return(
    <header className="Header">
      <a target="none" href="https://github.com/"><img src="https://pngimg.com/uploads/github/github_PNG28.png"
        className="githubIMG"
        alt="Github png"
      /></a>
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.setInit(false)
        props.setUsername(username.replace(/\s\\/g,""))
      }}style={{display:"block"}}>
      <input type="text" name="username" value={username} autoFocus
        placeholder="Enter GitHub username"
        className="usernameInput"
        pattern="[a-zA-z0-9\-]*"
        onChange={(e)=>{
            var tempUsername=e.target.value.replace(/\s\\/g,"")
            setUsername(tempUsername)
            //props.setUsername(tempUsername)
        }}/>
      </form>
    </header>
  )
}
export default Header