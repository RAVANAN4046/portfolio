import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import './profile.css'
import Particles from '../../../Reactbits/Particles/Particles'

const Profile = () => {
  const { username } = useParams()

  return (
    <div className="profile-wrapper">
      
      <div className="particles-bg">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="profile-content">
        <h1>Profile {username && `- ${username}`}</h1>

        <nav className="profile-nav">
          <Link to="/profile/address">Address</Link>
          <Link to="/profile/achievements">Achievements</Link>
          <Link to="/profile/hobbies">Hobbies</Link>
        </nav>

        <Outlet />
      </div>
    </div>
  )
}

export default Profile
