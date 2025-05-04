import React from 'react'
import { useNavigate } from 'react-router-dom'

import './home.css' 

import Ballpits from "../../Reactbits/Ballpit/Ballpit"

const Home = () => {
  const navigate = useNavigate()

  const about = () => {
    navigate("/about")
  }

  return (
    <div className="home-wrapper">
      <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%',backgroundColor:'white'}}>

<Ballpits

  count={100}

  gravity={0.7}

  friction={0.8}

  wallBounce={0.95}

  followCursor={true}

  colors={["#ff0000","#0000ff","#3cb371","#ee82ee","#ffa500","#6a5acd"]}

/>

</div>

      

      
    </div>
  )
}

export default Home
