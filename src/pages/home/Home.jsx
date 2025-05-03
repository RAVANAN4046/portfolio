import React from 'react'
import { useNavigate } from 'react-router-dom'
import Particles from '../../../Reactbits/Particles/Particles'
import './home.css' 
import ClickSpark from "../../Reactbits1/ClickSpark/ClickSpark"
import DecryptedText from "../../Reactbits/DecryptedText/DecryptedText";

const Home = () => {
  const navigate = useNavigate()

  const about = () => {
    navigate("/about/alan")
  }

  return (
    <div className="home-wrapper">
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

      <ClickSpark

  sparkColor='#fff'

  sparkSize={10}

  sparkRadius={15}

  sparkCount={8}

  duration={400}

>
{<div className="home-content">
  <DecryptedText text="Welcome You" />
      </div>}
  

</ClickSpark>

      
    </div>
  )
}

export default Home
