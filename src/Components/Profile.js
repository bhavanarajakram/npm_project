import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <h1>Hi, Profile Comp</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
