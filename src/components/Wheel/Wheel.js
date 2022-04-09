import React from 'react';

import './Wheel.css';

import WheelLabel from './WheelLabel/WheelLabel';

import spin from './spin'


class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: -5,
      w: 0,
    }
    this.onWheelClick = this.onWheelClick.bind(this)
  }

  onWheelClick() {
    spin(this.state, this.setState.bind(this)).then((resolved) => {
      //todo should i use it? or other method? it works
      // console.log('finished')
    })
  }


  render() {
    const onClick = this.onWheelClick
    const wheelLabels = renderWheelLabels(this.state.r, this.props.labels, onClick)
    const spinnerStyle = {transform: `rotate(${this.state.r}deg)`}

    return (
      <div className='Wheel'>
        <img className='axis'
          src='/assets/axis.png'
          alt='axis'
          onClick={onClick}
        ></img>
        <img className='spinner'
          src='/assets/spinner.png'
          alt='spinner'
          style = {spinnerStyle}
          onClick={onClick}
        ></img>
        <img className='shaft'
          src='/assets/shaft.png'
          alt='shaft'
        ></img>

        {wheelLabels}
      </div>
    );
  }
}

function renderWheelLabels(r, labels, onClick) {
  const selectedLabelKey = getSelectedLabelKey(12, r) //missing labels are still counted on the wheel
  return labels.map((label, i) => {
    const labelRotation = r - 75 + (i * 30) //starting from -75 on the wheel
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
function getSelectedLabelKey(labelCount, rotation) {
  const maxKey = labelCount - 1
  const progression = Math.floor((rotation % 360) / 30)
  return (maxKey - progression) % labelCount
}


export default Wheel;
