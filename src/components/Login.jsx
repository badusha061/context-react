import React, { useState, useContext } from 'react'
import UserContext from '../context/UserConext'

function Login() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({username , password})
    }
  return (
    <div>

        <input
        value={username}
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        type="text"
         />
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={HandleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login