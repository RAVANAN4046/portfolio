import React from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import "./achievements.css"
import VariableProximity from '../../../Reactbits/VariableProximity/VariableProximity'


const Achievements = () => {

    const {username} = useParams();
    const containerRef = useRef(null);

  return (
    <div

ref={containerRef}

style={{position: 'relative'}}

>

<div className="multi-vp">
  <VariableProximity
    label={'FrontEnd Developer'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff="linear"
  />
  
</div>
<div
ref={containerRef}

style={{position: 'relative'}} >
<VariableProximity
    label={'Mobile Gamer'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 300, 'opsz' 12"
    toFontVariationSettings="'wght' 900, 'opsz' 30"
    containerRef={containerRef}
    radius={100}
    falloff="linear"
  />
</div>


</div>
  )
}

export default Achievements
