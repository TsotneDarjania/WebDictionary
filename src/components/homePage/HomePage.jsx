import React from 'react'
import BackgroundEffect from '../backgroundEffect/BackgroundEffect'
import "./homePage.css"

import inputFilesIcon from '../../images/input_file_icon.png'

function HomePage(){
  return (
    <div className='home-page'>
        <BackgroundEffect/>
        <div className="mode-button mode-button-icon-files">
          {/* <img className='intro-button-icon' src={inputFilesIcon} alt="" /> */}
        </div>
        <div className="mode-button mode-button-icon-manually"></div>
    </div>
  )
}

//asdasduyasyg

export default HomePage;