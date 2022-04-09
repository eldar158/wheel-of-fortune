import React from 'react';

import './Wheel.css';

import WheelLabel from './WheelLabel/WheelLabel';

import {spinWheel, getSelectedLabelKey} from './spin'


function Wheel (props) {
  const {spin, setSpin, labels} = {...props}

  function onWheelClick() {
    spinWheel(spin, setSpin).then((resolved) => {
      //todo should i use it? or other method? it works
    })
  }
  
  const wheelLabels = renderWheelLabels(spin.r, labels, onWheelClick)
  const spinnerStyle = {transform: `rotate(${spin.r}deg)`}

  return (
    <div className='Wheel noselect'>
      <img className='axis'
        src='/assets/images/axis.png'
        alt='axis'
        onClick={onWheelClick}
      ></img>
      <img className='spinner noselect'
        src='/assets/images/spinner.png'
        alt='spinner'
        style = {spinnerStyle}
        onClick={onWheelClick}
      ></img>
      <img className='shaft noselect'
        src='/assets/images/shaft.png'
        alt='shaft'
      ></img>

      {wheelLabels}
    </div>
  );
}

function renderWheelLabels(r, labels, onClick) {
  const selectedLabelKey = getSelectedLabelKey(12, r) //missing labels are still counted on the wheel
  return labels.map((label, i) => {
    const labelRotation = r - 75 + (i * 30) //starting from -75 deg on the wheel
    const selected = selectedLabelKey === i
    return <WheelLabel
      key={i}
      text={label}
      r={labelRotation}
      onClick={onClick}
      selected={selected}
    ></WheelLabel>
  })
}


export default Wheel;
