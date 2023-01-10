import React from 'react'
import DriverAbout from './DriverAbout'
import DriverContact from './DriverContact'
import DriverWhySection from './DriverWhySection'
import Slider from './Slider'
// import FadeIn from 'react-fade-in';

const DriverSupport = ({ ref }, { handleClick }) => {
  return (
    <div>


      {/* <FadeIn> */}
        <Slider handleClick={handleClick} />
        <DriverContact ref={ref} />
        <DriverWhySection />
        <DriverAbout />
      {/* </FadeIn> */}
    </div>
  )
}

export default DriverSupport