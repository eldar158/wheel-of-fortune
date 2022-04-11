import React from 'react';

import './Wheel.css';

import WheelLabel from './WheelLabel/WheelLabel';

import { spinWheel } from './spin'


function Wheel (props) {
  const {spin, setSpin, labels, selectedLabelKey} = {...props}

  function onWheelClick() {
    spinWheel(spin, setSpin)
  }

  function renderWheelLabels() {
    return labels.map((label, i) => {
      const labelRotation = spin.r - 75 + (i * 30) //starting from -75 deg on the wheel
      const selected = selectedLabelKey === i
      return <WheelLabel
        key={i}
        text={label}
        r={labelRotation}
        onClick={onWheelClick}
        selected={selected}
      ></WheelLabel>
    })
  }
  
  const wheelLabels = renderWheelLabels()
  const spinnerStyle = {transform: `rotate(${spin.r}deg)`}

  return (
    <div className='Wheel noselect'>
      <img className='axis'
        src='/assets/images/axis.png'
        alt='axis'
        onClick={onWheelClick}
      ></img>
      <img className='spinner'
        src='/assets/images/spinner.png'
        alt='spinner'
        style = {spinnerStyle}
        onClick={onWheelClick}
      ></img>
      <img className='shaft'
        src='/assets/images/shaft.png'
        alt='shaft'
      ></img>

      {wheelLabels}
    </div>
  );
}


export default Wheel;
