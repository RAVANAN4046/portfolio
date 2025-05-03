import React from 'react'
import { useParams } from 'react-router-dom'
import "./hobbies.css"

import RotatingText from '../../../../Reactbits/RotatingText/RotatingText'


const Hobbies = () => {

    const {username} = useParams()

  return (

<div>
    <h2>Myself a </h2>
    <RotatingText
  texts={['Footballer', 'Developer', 'Gamer', 'Artist']}
  mainClassName="rotating-container"
  splitLevelClassName="rotating-line"

  textClassName="rotating-text"
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>

</div>
      
      

     
    
   
      
   
  )
}

export default Hobbies
