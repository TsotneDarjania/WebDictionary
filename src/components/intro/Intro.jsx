import React from 'react'
import BackgroundEffect from '../backgroundEffect/BackgroundEffect'
import "./intro.css"

const Intro = () => {
  return (
    <div className='intro'>
        <BackgroundEffect/>
        <div className="intro-button">input by files</div>
        <div className="intro-button">input manually</div>
    </div>
  )
}

export default Intro