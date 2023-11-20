import React, { useContext } from 'react'
import UserContext from '../context/UserConext'

function Profile() {
    const {user} = useContext(UserContext)
  return (
    <div>

        <h1> Profile:{user.username} </h1>
    </div>
  )
}

export default Profile