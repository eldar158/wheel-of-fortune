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
      a: -0.1,
    }
    this.onWheelClick = this.onWheelClick.bind(this)
  }

  onWheelClick() {
    this.setState({w: this.getW()}, () => {
      spin(this.state, this.setState.bind(this))
    })
  }
  getW() {
    const constW = 10
    const randW = 20
    return constW + Math.random() * randW
  }


  renderWheelLabels(onClick) {
    const selectedLabelKey = getSelectedLabelKey(this.props.labels.length, this.state.r)
    return this.props.labels.map((label, i) => {
      const labelRotation = this.state.r - 75 + (i * 30) //starting from -75 on the wheel
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

  render() {
    const onClick = this.onWheelClick
    const wheelLabels = this.renderWheelLabels(onClick)
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


function getSelectedLabelKey(labelCount, rotation) {
  const maxKey = labelCount - 1
  const progression = Math.floor((rotation % 360) / 30)
  return (maxKey - progression) % labelCount
}


export default Wheel;
