import React from 'react'

import { useNavigate } from 'react-router-dom'

import Particles from '../../../Reactbits/Particles/Particles'

const Home = () => {

  const navigate = useNavigate()

  const about = ()=>{
    
    navigate("/about/alan")

  }  

   
  return (
    <div>
      

      <h1>Welcome to Home page</h1>
      <button onClick={about} >Click me</button>


      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
    

    </div>
  )
}

export default Home
