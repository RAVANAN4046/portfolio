import React from 'react'
import { useParams } from 'react-router-dom'
import "./address.css"
import GradientText from '../../../Reactbits/GradientText/GradientText'

const Address = () => {

    const {username} = useParams()

  return (

    <GradientText

  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}

  animationSpeed={3}

  showBorder={false}

  className="custom-class"

>
  <>
  <p>Kanichai House <br />
  Vattakkattupady <br />
  Perumbavoor <br />
  PIN CODE :683542</p>
  </>

</GradientText>
    
      
   
  )
}

export default Address
