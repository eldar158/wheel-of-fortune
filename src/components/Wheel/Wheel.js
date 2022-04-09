import React from 'react';

import './Wheel.css';

import WheelLabel from './WheelLabel/WheelLabel';

import spin from './spin'


class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
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
    return this.props.labels.map((label, i) => {
      return <WheelLabel
        key={i}
        text={label}
        slot={i}
        r={this.state.r}
        onClick={onClick}
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



export default Wheel;
