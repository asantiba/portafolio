import React, { useState, useEffect } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const GreetingLottie = ({ animationPath, speed = 0.2, style = { width: '600px', height: '600px' } }) => {
  return (
    <div onClick={() => null}>
      <Player src={animationPath} autoplay loop speed={speed} style={style} />
    </div>
  )
}

export default GreetingLottie
