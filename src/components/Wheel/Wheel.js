import React from 'react';

import './Wheel.css';

import WheelLabel from './WheelLabel/WheelLabel';

import spin from './spin'

//todo
//1.  stop propegation?
//2.  if clicking while animation, reset speed, but continue anim instead of now that it adds a anim


class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
      w: 0,
      a: -0.1,
    }
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

  wheelLabel(text, spaceCount, slot, r, onClick) {
    return <WheelLabel
      text={text}
      spaceCount={spaceCount}
      slot={slot}
      r={r}
      onClick={onClick}
    ></WheelLabel>
  }

  render() {
    const onClick = this.onWheelClick.bind(this)

    const spinnerStyle = {transform: `rotate(${this.state.r}deg)`}

    const wheelLabels = []
    for (let i = 0; i < 12; i++) {
      wheelLabels.push(this.wheelLabel(`I'm label ${i}`, 20, i, this.state.r, onClick))
    }

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
          onClick={onClick}
        ></img>

        {wheelLabels}
      </div>
    );
  }
}



export default Wheel;
