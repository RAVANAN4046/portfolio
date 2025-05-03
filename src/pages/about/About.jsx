import React from 'react'
import { useParams } from 'react-router-dom'

import SplashCursor from '../../../Reactbits/SplashCursor/SplashCursor'

import RotatingText from '../../../Reactbits/RotatingText/RotatingText'

const About = () => {

    const {username} = useParams()

  return (


    <>


      <h1>Hello welocme to about page</h1>
    
    </>
      
   
  )
}

export default About
