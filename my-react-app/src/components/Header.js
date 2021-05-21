import React, {useState} from 'react'
const Header =(props)=>{
  const [username, setUsername] = useState("")
  return(
    <header className="Header">
      <img src="https://pngimg.com/uploads/github/github_PNG28.png"
        style={{width:"50px", height:"50px",margin:"0% 5%", display:"block"}}
        alt="Github png"
      />
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.setUsername(username.replace(/\s\\/g,""))
      }}style={{display:"block"}}>
      <input type="text" name="username" value={props.username}
        onChange={(e)=>{
            var tempUsername=e.target.value.replace(/\s\\/g,"")
            setUsername(tempUsername)
            props.setUsername(tempUsername)
        }}/>
      </form>
    </header>
  )
}
export default Header